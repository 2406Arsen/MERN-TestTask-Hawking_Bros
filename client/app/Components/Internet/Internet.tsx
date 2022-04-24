import classes from './Internet.module.scss'
import { Slider } from '@mui/material'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedInternet } from '../../Redux/features/main/mainSlice'

const Internet = memo(() => {
	const dispatch = useDispatch()
	const marks = [
		{
			value: 0,
			label: 5,
		},
		{
			value: 33.3,
			label: 10,
		},
		{
			value: 66.6,
			label: 15,
		},
		{
			value: 99.9,
			label: 25,
		},
	]

	let filterTimeout: NodeJS.Timeout

	const debouncedSelectCurrentValue = (value: number) => {
		clearTimeout(filterTimeout)

		filterTimeout = setTimeout(() => {
			const selected = marks.find((mark) => mark.value === value)

			selected && dispatch(setSelectedInternet(selected.label))
		}, 150)
	}

	const valueText = (value: number) => `${value} ГБ.`
	return (
		<section className={classes.internet}>
			<h4>Интернет</h4>
			<Slider
				aria-label='internet'
				marks={marks}
				step={33.3}
				defaultValue={66.6}
				getAriaValueText={valueText}
				onChange={(_, value) =>
					typeof value === 'number' && debouncedSelectCurrentValue(value)
				}
			/>
		</section>
	)
})
export default Internet
