import classes from './Messengers.module.scss'
import InfoIcon from '@mui/icons-material/Info'
import WhatsappIcon from '../../Assets/icons/whatsapp-icon.svg'
import ViberIcon from '../../Assets/icons/viber-icon.svg'
import TelegramIcon from '../../Assets/icons/telegram.svg'
import DiscordIcon from '../../Assets/icons/discord.svg'
import { useAppSelector } from '../../Redux/hook'
import { shallowEqual, useDispatch } from 'react-redux'
import { setSelectedMessengers } from '../../Redux/features/main/mainSlice'
import { memo } from 'react'

const Messengers = memo(() => {
	const dispatch = useDispatch()

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		dispatch(setSelectedMessengers(e.currentTarget.id))
	}
	const { selectedMessengers } = useAppSelector(
		({ main }) => ({ selectedMessengers: main.data.selectedMessengers }),
		shallowEqual,
	)
	return (
		<section className={classes.Messengers}>
			<h4>
				Мессенджеры
				<InfoIcon />
			</h4>
			<ul>
				<li
					id='whatsapp'
					onClick={handleClick}
					className={
						selectedMessengers.includes('whatsapp')
							? classes.MessengerItem__active
							: classes.MessengerItem
					}>
					<WhatsappIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='viber'
					onClick={handleClick}
					className={
						selectedMessengers.includes('viber')
							? classes.MessengerItem__active
							: classes.MessengerItem
					}>
					<ViberIcon />
					<span>10 ₽</span>
				</li>
				<li
					id='tamTam'
					onClick={handleClick}
					className={
						selectedMessengers.includes('tamTam')
							? classes.MessengerItem__active
							: classes.MessengerItem
					}>
					<img
						src='https://msk.tele2.ru:443/api/media/asset?mediaId=m1120006'
						alt='tamTam'
						width={36}
						height={36}
					/>
					<span>10 ₽</span>
				</li>
				<li
					id='telegram'
					onClick={handleClick}
					className={
						selectedMessengers.includes('telegram')
							? classes.MessengerItem__active
							: classes.MessengerItem
					}>
					<TelegramIcon />
					<span>20 ₽</span>
				</li>
				<li
					id='discord'
					onClick={handleClick}
					className={
						selectedMessengers.includes('discord')
							? classes.MessengerItem__active
							: classes.MessengerItem
					}>
					<DiscordIcon />
					<span>10 ₽</span>
				</li>
			</ul>
		</section>
	)
})

export default Messengers
