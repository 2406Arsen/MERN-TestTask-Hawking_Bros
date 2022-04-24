import type { NextPage, NextPageContext } from 'next'
import styles from '../styles/Home.module.scss'
import Internet from '../app/Components/Internet/Internet'
import Minute from '../app/Components/Minutes/Minute'
import MoreServices from '../app/Components/MoreServices/MoreServices'
import Social from '../app/Components/Social/Social'
import LivePrice from '../app/Components/LivePrice/LivePrice'
import Message from '../app/Components/Message/Message'
import Messengers from '../app/Components/Messengers/Messengers'
import { useAppSelector } from '../app/Redux/hook'
import { useEffect } from 'react'
import {
	getAllInternetData,
	getAllMessagesData,
	getAllMessengers,
	getAllMinutesData,
	getAllMoreServicesData,
	getAllSocialData,
} from '../app/api/api'

const Home: NextPage = ({ propData }: any) => {
	const { data } = useAppSelector(({ main }) => ({
		data: main.data,
	}))

	return (
		<main className={styles.container}>
			<h1>Настройте тариф</h1>
			<Minute />
			<Message />
			<Internet />
			<Social />
			<Messengers />
			<MoreServices />
			<LivePrice />
		</main>
	)
}

export default Home

export async function getServerSideProps() {
	try {
		let data = {}
		const messengers = await getAllMessengers()
		const internet = await getAllInternetData()
		const minutes = await getAllMinutesData()
		const messages = await getAllMessagesData()
		const moreServices = await getAllMoreServicesData()
		const social = await getAllSocialData()

		data = { ...data, messengers, minutes, internet, messages, moreServices, social }
		return {
			props: {
				propData: JSON.parse(JSON.stringify(data)),
			},
		}
	} catch (error) {
		return {
			props: {
				propData: {},
			},
		}
	}
}
