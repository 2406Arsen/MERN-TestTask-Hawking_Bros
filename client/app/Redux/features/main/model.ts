export interface IMainInitialState {
	loading: boolean
	data: {
		selectedSocialItems: { itemId: string; price: number }[]
		selectedMessengers: { itemId: string; price: number }[]
		selectedMoreServices: { itemId: string; price: number }[]
		selectedMinute: number
		selectedInternet: number
		selectedMessages: number
		finalPrice: number
		currentPrices: {
			message: number
			internet: number
			minute: number
			social: number
			messengers: number
			moreServices: number
		}
	}
	error: {}
}
