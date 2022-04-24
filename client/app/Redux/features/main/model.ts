export interface IMainInitialState {
	loading: boolean
	data: {
		selectedSocialItems: string[]
		selectedMessengers: string[]
		selectedMoreServices: string[]
		selectedMinute: number
		selectedInternet: number
		selectedMessages: number
		finalPrice: number
	}
	error: {}
}
