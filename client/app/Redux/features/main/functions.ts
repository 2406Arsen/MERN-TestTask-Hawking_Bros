import { getOneMessage } from '../../../api/api'
import { AppThunk } from '../../store'
import { changePrice } from './mainSlice'

export const fetchOneMessage = (count: number): AppThunk => {
	return async (dispatch) => {
		try {
			const newMessagePrice = await getOneMessage(count)
			dispatch(changePrice(newMessagePrice.basePrice))
		} catch (error) {
			console.log(error)
		}
	}
}
