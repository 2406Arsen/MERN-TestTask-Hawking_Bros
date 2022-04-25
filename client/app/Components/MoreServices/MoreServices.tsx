import classes from './MoreServices.module.scss'
import InfoIcon from '@mui/icons-material/Info'
import { useAppSelector } from '../../Redux/hook'
import { shallowEqual, useDispatch } from 'react-redux'
import { setCurrentMoreServicesPrice } from '../../Redux/features/main/mainSlice'
import { memo, useEffect, useState } from 'react'
import { fetchOneMoreService } from '../../Redux/features/main/functions'
import { AppDispatch } from '../../Redux/store'

const MoreServices = memo(() => {
	const dispatch: AppDispatch = useDispatch()
	const [selectedMoreServicesNames, setSelectedMoreServicesNames] = useState<string[]>([])

	const { selectedMoreServices } = useAppSelector(
		({ main }) => ({ selectedMoreServices: main.data.selectedMoreServices }),
		shallowEqual,
	)

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		selectedMoreServicesNames.includes(e.currentTarget.id)
			? setSelectedMoreServicesNames(
					selectedMoreServicesNames.filter((name) => name !== e.currentTarget.id),
			  )
			: setSelectedMoreServicesNames((prev) => [...prev, e?.currentTarget?.id])

		dispatch(fetchOneMoreService(e.currentTarget.id))
	}

	useEffect(() => {
		dispatch(setCurrentMoreServicesPrice())
	}, [selectedMoreServices])

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
						selectedMoreServicesNames.includes('videoService')
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
