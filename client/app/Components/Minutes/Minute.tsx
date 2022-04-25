import { FC, memo, useEffect } from 'react'
import classes from './Minute.module.scss'
import { Slider } from '@mui/material'
import { setSelectedMinute } from '../../Redux/features/main/mainSlice'
import { shallowEqual, useDispatch } from 'react-redux'
import { AppDispatch } from '../../Redux/store'
import { useAppSelector } from '../../Redux/hook'
import { fetchOneMinute } from '../../Redux/features/main/functions'

const Minute: FC = memo(() => {
	const dispatch: AppDispatch = useDispatch()
	const { selectedMinute } = useAppSelector(
		({ main }) => ({
			selectedMinute: main.data.selectedMinute,
		}),
		shallowEqual,
	)

	useEffect(() => {
		dispatch(fetchOneMinute(selectedMinute))
	}, [selectedMinute])

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
