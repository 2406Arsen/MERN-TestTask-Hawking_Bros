import {
	getMinuteData,
	getOneInternet,
	getOneMessage,
	getOneMessenger,
	getOneMoreService,
	getOneSocial,
} from '../../../api/api'
import { AppThunk } from '../../store'
import {
	changePrice,
	setCurrentInternetPrice,
	setCurrentMessagePrice,
	setCurrentMinutePrice,
	setSelectedMessengers,
	setSelectedMoreServices,
	setSelectedSocialItems,
} from './mainSlice'

export const fetchOneMessage = (count: number): AppThunk => {
	return async (dispatch) => {
		try {
			const newMessagePrice = await getOneMessage(count)
			dispatch(setCurrentMessagePrice(newMessagePrice.basePrice))
		} catch (error) {
			console.log(error)
		}
	}
}
export const fetchOneInternet = (count: number): AppThunk => {
	return async (dispatch) => {
		try {
			const newInternetPrice = await getOneInternet(count)
			dispatch(setCurrentInternetPrice(newInternetPrice.basePrice))
		} catch (error) {
			console.log(error)
		}
	}
}
export const fetchOneMinute = (count: number): AppThunk => {
	return async (dispatch) => {
		try {
			const newMinutePrice = await getMinuteData(count)
			dispatch(setCurrentMinutePrice(newMinutePrice.basePrice))
		} catch (error) {
			console.log(error)
		}
	}
}
export const fetchOneMessenger = (id: string): AppThunk => {
	return async (dispatch) => {
		try {
			const oneMessenger = await getOneMessenger(id)
			dispatch(
				setSelectedMessengers({
					itemId: oneMessenger._id,
					price: oneMessenger.basePrice,
				}),
			)
		} catch (error) {
			console.log(error)
		}
	}
}
export const fetchOneMoreService = (id: string): AppThunk => {
	return async (dispatch) => {
		try {
			const oneMoreService = await getOneMoreService(id)
			dispatch(
				setSelectedMoreServices({
					itemId: oneMoreService._id,
					price: oneMoreService.basePrice,
				}),
			)
		} catch (error) {
			console.log(error)
		}
	}
}
export const fetchOneSocial = (id: string): AppThunk => {
	return async (dispatch) => {
		try {
			const oneSocial = await getOneSocial(id)
			dispatch(
				setSelectedSocialItems({
					itemId: oneSocial._id,
					price: oneSocial.basePrice,
				}),
			)
		} catch (error) {
			console.log(error)
		}
	}
}

export const fetchTotalSum = (): AppThunk => {
	return async (dispatch, getState) => {
		try {
			const { internet, message, messengers, minute, moreServices, social } =
				getState().main.data.currentPrices
			const finalPrice = internet + message + minute + messengers + moreServices + social

			dispatch(changePrice(finalPrice))
		} catch (error) {
			console.log(error)
		}
	}
}
