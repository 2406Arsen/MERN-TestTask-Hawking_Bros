import classes from './Message.module.scss'
import { Slider } from '@mui/material'
import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { setSelectedMessages } from '../../Redux/features/main/mainSlice'
import { fetchOneMessage } from '../../Redux/features/main/functions'
import { useAppSelector } from '../../Redux/hook'
import { AppDispatch } from '../../Redux/store'

const Message = memo(() => {
	const dispatch: AppDispatch = useDispatch()

	const { selectedMessageCount } = useAppSelector(
		({ main }) => ({
			selectedMessageCount: main.data.selectedMessages,
		}),
		shallowEqual,
	)
	useEffect(() => {
		dispatch(fetchOneMessage(selectedMessageCount))
	}, [selectedMessageCount])

	const marks = [
		{
			value: 0,
			label: 0,
		},
		{
			value: 33.3,
			label: 50,
		},
		{
			value: 66.6,
			label: 100,
		},
		{
			value: 99.9,
			label: 150,
		},
	]

	let filterTimeout: NodeJS.Timeout

	const debouncedSelectCurrentValue = (value: number) => {
		clearTimeout(filterTimeout)

		filterTimeout = setTimeout(() => {
			const selected = marks.find((mark) => mark.value === value)

			selected && dispatch(setSelectedMessages(selected.label))
		}, 150)
	}

	const valueText = (value: number) => `${value} смс.`
	return (
		<section className={classes.Message}>
			<h4> СМС </h4>
			<Slider
				aria-label='messages'
				marks={marks}
				step={33.3}
				defaultValue={33.3}
				getAriaValueText={valueText}
				onChange={(_, value) => debouncedSelectCurrentValue(value as number)}
			/>
		</section>
	)
})
export default Message
