import type { NextPage } from 'next'
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
import { AppDispatch } from '../app/Redux/store'
import { useDispatch } from 'react-redux'
import { fetchTotalSum } from '../app/Redux/features/main/functions'

const Home: NextPage = () => {
	const { data } = useAppSelector(({ main }) => ({
		data: main.data,
	}))
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTotalSum())
	}, [data.currentPrices])

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
