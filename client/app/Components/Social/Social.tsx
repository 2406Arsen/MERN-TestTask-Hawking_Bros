import classes from './Social.module.scss'
import InfoIcon from '@mui/icons-material/Info'
import OkIcon from '../../Assets/icons/ok.svg'
import VkIcon from '../../Assets/icons/vk.svg'
import TikTokIcon from '../../Assets/icons/tiktok.svg'
import { shallowEqual, useDispatch } from 'react-redux'
import { memo, MouseEvent } from 'react'
import { setSelectedSocialItems } from '../../Redux/features/main/mainSlice'
import { useAppSelector } from '../../Redux/hook'

const Social = memo(() => {
	const dispatch = useDispatch()
	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		dispatch(setSelectedSocialItems(e.currentTarget.id))
	}
	const { selectedSocialItems } = useAppSelector(
		({ main }) => ({ selectedSocialItems: main.data.selectedSocialItems }),
		shallowEqual,
	)
	return (
		<section className={classes.Social}>
			<h4>
				Соцсети
				<InfoIcon />
			</h4>
			<ul>
				<li
					id='vk'
					onClick={handleClick}
					className={
						selectedSocialItems.includes('vk')
							? classes.SocialItem__active
							: classes.SocialItem
					}>
					<VkIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='ok'
					onClick={handleClick}
					className={
						selectedSocialItems.includes('ok')
							? classes.SocialItem__active
							: classes.SocialItem
					}>
					<OkIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='tiktok'
					onClick={handleClick}
					className={
						selectedSocialItems.includes('tiktok')
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
