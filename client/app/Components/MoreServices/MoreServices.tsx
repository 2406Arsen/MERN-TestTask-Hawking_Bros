import classes from './MoreServices.module.scss'
import InfoIcon from '@mui/icons-material/Info'
import { useAppSelector } from '../../Redux/hook'
import { shallowEqual, useDispatch } from 'react-redux'
import { setSelectedMoreServices } from '../../Redux/features/main/mainSlice'
import { memo, MouseEvent } from 'react'
const MoreServices = memo(() => {
	const dispatch = useDispatch()
	const { selectedMoreServices } = useAppSelector(
		({ main }) => ({ selectedMoreServices: main.data.selectedMoreServices }),
		shallowEqual,
	)
	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		dispatch(setSelectedMoreServices(e.currentTarget.id))
	}
	return (
		<section className={classes.MoreServices}>
			<h4>
				Больше услуг
				<InfoIcon />
			</h4>
			<ul>
				<li
					id='videoService'
					className={
						selectedMoreServices.includes('videoService')
							? classes.MoreServiceItem__active
							: classes.MoreServiceItem
					}
					onClick={handleClick}>
					<img src='/static/moreServices.png' alt='/' width={36} height={36} />
					<span>100 ₽</span>
				</li>
			</ul>
		</section>
	)
})
export default MoreServices
