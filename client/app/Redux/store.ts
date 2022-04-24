import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import mainReducer from './features/main/mainSlice'
export const store = configureStore({
	reducer: {
		main: mainReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
