import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMainInitialState } from './model'

const initialState: IMainInitialState = {
	loading: false,
	data: {
		selectedSocialItems: [],
		selectedMessengers: [],
		selectedMoreServices: [],
		selectedMinute: 200,
		selectedInternet: 5,
		selectedMessages: 50,
		finalPrice: 0,
	},
	error: {},
}
const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.loading = payload
		},
		setSelectedSocialItems: (state, { payload }: PayloadAction<string>) => {
			state.data.selectedSocialItems.includes(payload)
				? (state.data.selectedSocialItems = state.data.selectedSocialItems.filter(
						(selectedSocialItem) => selectedSocialItem !== payload,
				  ))
				: state.data.selectedSocialItems.push(payload)
		},
		setSelectedMessengers: (state, { payload }: PayloadAction<string>) => {
			state.data.selectedMessengers.includes(payload)
				? (state.data.selectedMessengers = state.data.selectedMessengers.filter(
						(selectedSocialItem) => selectedSocialItem !== payload,
				  ))
				: state.data.selectedMessengers.push(payload)
		},
		setSelectedMoreServices: (state, { payload }: PayloadAction<string>) => {
			state.data.selectedMoreServices.includes(payload)
				? (state.data.selectedMoreServices = state.data.selectedMoreServices.filter(
						(selectedSocialItem) => selectedSocialItem !== payload,
				  ))
				: state.data.selectedMoreServices.push(payload)
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
		changePrice: (state, { payload }: PayloadAction<number>) => {
			state.data.finalPrice += payload
		},
	},
})

export const {
	setLoading,
	setSelectedSocialItems,
	setSelectedMessengers,
	setSelectedMoreServices,
	setSelectedMinute,
	setSelectedInternet,
	setSelectedMessages,
	changePrice,
} = mainSlice.actions
export const mainSelector = (state: IMainInitialState): IMainInitialState => state
export default mainSlice.reducer
