import classes from './Social.module.scss'
import InfoIcon from '@mui/icons-material/Info'
import OkIcon from '../../Assets/icons/ok.svg'
import VkIcon from '../../Assets/icons/vk.svg'
import TikTokIcon from '../../Assets/icons/tiktok.svg'
import { shallowEqual, useDispatch } from 'react-redux'
import { memo, useEffect, useState } from 'react'
import { setCurrentSocialPrice } from '../../Redux/features/main/mainSlice'
import { useAppSelector } from '../../Redux/hook'
import { AppDispatch } from '../../Redux/store'
import { fetchOneSocial } from '../../Redux/features/main/functions'

const Social = memo(() => {
	const dispatch: AppDispatch = useDispatch()

	const [selectedSocial, setSelectedSocial] = useState<string[]>([])

	const { selectedSocialItems, selectedInternet } = useAppSelector(
		({ main }) => ({
			selectedSocialItems: main.data.selectedSocialItems,
			selectedInternet: main.data.selectedInternet,
		}),
		shallowEqual,
	)

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		selectedSocial.includes(e.currentTarget.id)
			? setSelectedSocial(selectedSocial.filter((name) => name !== e.currentTarget.id))
			: setSelectedSocial((prev) => [...prev, e?.currentTarget?.id])

		dispatch(fetchOneSocial(e.currentTarget.id))
	}

	useEffect(() => {
		dispatch(setCurrentSocialPrice())
	}, [selectedSocialItems])

	return (
		<section className={classes.Social}>
			<h4>
				Соцсети
				<InfoIcon />
			</h4>
			<ul>
				<li
					id='vk'
					onClick={selectedInternet <= 10 ? handleClick : undefined}
					className={
						selectedInternet > 10 || selectedSocial.includes('vk')
							? classes.SocialItem__active
							: classes.SocialItem
					}>
					<VkIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='ok'
					onClick={selectedInternet <= 10 ? handleClick : undefined}
					className={
						selectedInternet > 10 || selectedSocial.includes('ok')
							? classes.SocialItem__active
							: classes.SocialItem
					}>
					<OkIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='tiktok'
					onClick={selectedInternet <= 10 ? handleClick : undefined}
					className={
						selectedInternet > 10 || selectedSocial.includes('tiktok')
							? classes.SocialItem__active
							: classes.SocialItem
					}>
					<TikTokIcon />
					<span>10 ₽</span>
				</li>
			</ul>
		</section>
	)
})

export default Social
