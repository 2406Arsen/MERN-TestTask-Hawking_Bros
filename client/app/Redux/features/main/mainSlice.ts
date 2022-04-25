import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMainInitialState } from './model'

const initialState: IMainInitialState = {
	loading: false,
	data: {
		selectedSocialItems: [],
		selectedMessengers: [],
		selectedMoreServices: [],
		selectedMinute: 200,
		selectedInternet: 15,
		selectedMessages: 50,
		finalPrice: 0,
		currentPrices: {
			internet: 0,
			message: 0,
			messengers: 0,
			minute: 0,
			moreServices: 0,
			social: 0,
		},
	},
	error: {},
}
const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setSelectedMessengers: (
			state,
			{ payload }: PayloadAction<{ itemId: string; price: number }>,
		) => {
			!!state.data.selectedMessengers.find(({ itemId }) => payload.itemId === itemId)
				? (state.data.selectedMessengers = state.data.selectedMessengers.filter(
						({ itemId }) => itemId !== payload.itemId,
				  ))
				: (state.data.selectedMessengers = [...state.data.selectedMessengers, payload])
		},
		setSelectedSocialItems: (
			state,
			{ payload }: PayloadAction<{ itemId: string; price: number }>,
		) => {
			!!state.data.selectedSocialItems.find(({ itemId }) => payload.itemId === itemId)
				? (state.data.selectedSocialItems = state.data.selectedSocialItems.filter(
						({ itemId }) => itemId !== payload.itemId,
				  ))
				: (state.data.selectedSocialItems = [...state.data.selectedSocialItems, payload])
		},
		setSelectedMoreServices: (
			state,
			{ payload }: PayloadAction<{ itemId: string; price: number }>,
		) => {
			!!state.data.selectedMoreServices.find(({ itemId }) => payload.itemId === itemId)
				? (state.data.selectedMoreServices = state.data.selectedMoreServices.filter(
						({ itemId }) => itemId !== payload.itemId,
				  ))
				: (state.data.selectedMoreServices = [...state.data.selectedMoreServices, payload])
		},

		setSelectedMinute: (state, { payload }: PayloadAction<number>) => {
			state.data.selectedMinute = payload
		},
		setSelectedInternet: (state, { payload }: PayloadAction<number>) => {
			state.data.selectedInternet = payload
		},
		setSelectedMessages: (state, { payload }: PayloadAction<number>) => {
			state.data.selectedMessages = payload
		},

		setCurrentMessagePrice: (state, { payload }: PayloadAction<number>) => {
			state.data.currentPrices.message = payload
		},
		setCurrentInternetPrice: (state, { payload }: PayloadAction<number>) => {
			state.data.currentPrices.internet = payload
		},
		setCurrentMinutePrice: (state, { payload }: PayloadAction<number>) => {
			state.data.currentPrices.minute = payload
		},
		setCurrentMessengersPrice: (state) => {
			state.data.currentPrices.messengers = state.data.selectedMessengers.reduce(
				(aggr, value) => aggr + value.price,
				0,
			)
		},
		setCurrentSocialPrice: (state) => {
			state.data.currentPrices.social = state.data.selectedSocialItems.reduce(
				(aggr, value) => aggr + value.price,
				0,
			)
		},
		setCurrentMoreServicesPrice: (state) => {
			state.data.currentPrices.moreServices = state.data.selectedMoreServices.reduce(
				(aggr, value) => aggr + value.price,
				0,
			)
		},
		changePrice: (state, { payload }: PayloadAction<number>) => {
			state.data.finalPrice = payload
		},
	},
})

export const {
	setSelectedSocialItems,
	setSelectedMessengers,
	setSelectedMoreServices,
	setSelectedMinute,
	setSelectedInternet,
	setSelectedMessages,
	setCurrentMessagePrice,
	setCurrentInternetPrice,
	setCurrentMinutePrice,
	setCurrentMessengersPrice,
	setCurrentMoreServicesPrice,
	setCurrentSocialPrice,
	changePrice,
} = mainSlice.actions
export const mainSelector = (state: IMainInitialState): IMainInitialState => state
export default mainSlice.reducer
