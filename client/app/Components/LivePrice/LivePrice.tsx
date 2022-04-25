import { memo } from 'react'
import { useAppSelector } from '../../Redux/hook'
import classes from './LivePrice.module.scss'

const LivePrice = memo(() => {
	const { finalPrice } = useAppSelector(({ main }) => ({ finalPrice: main.data.finalPrice }))

	return (
		<div className={classes.LivePrice}>
			<div>
				<span>{finalPrice} ₽ /</span>
				месяц
			</div>
		</div>
	)
})

export default LivePrice
