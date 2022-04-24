import { FC, memo } from 'react'
import classes from './Minute.module.scss'
import { Slider } from '@mui/material'
import { setSelectedMinute } from '../../Redux/features/main/mainSlice'
import { useDispatch } from 'react-redux'

const Minute: FC = memo(() => {
	const dispatch = useDispatch()
	const marks = [
		{
			value: 0,
			label: 100,
		},
		{
			value: 20,
			label: 200,
		},
		{
			value: 40,
			label: 300,
		},
		{
			value: 60,
			label: 400,
		},
		{
			value: 80,
			label: 500,
		},
		{
			value: 100,
			label: 600,
		},
	]

	let filterTimeout: NodeJS.Timeout

	const debouncedSelectCurrentValue = (value: number) => {
		clearTimeout(filterTimeout)

		filterTimeout = setTimeout(() => {
			const selected = marks.find((mark) => mark.value === value)

			selected && dispatch(setSelectedMinute(selected.label))
		}, 150)
	}

	const valueText = (value: number) => `${value} мин.`
	return (
		<section className={classes.Minute}>
			<h4>Минуты</h4>
			<p>На Tele2 России безлимитно</p>
			<p>на другие мобильные номера домашнего региона</p>

			<Slider
				aria-label='Custom marks'
				marks={marks}
				step={20}
				defaultValue={20}
				getAriaValueText={valueText}
				onChange={(_, value) =>
					typeof value === 'number' && debouncedSelectCurrentValue(value)
				}
			/>
		</section>
	)
})

export default Minute
