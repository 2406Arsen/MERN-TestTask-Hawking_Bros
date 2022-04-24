import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Head from 'next/head'
import React from 'react'
import theme from './theme'
import '../styles/muiGlobal.scss'
import { Provider } from 'react-redux'
import { store } from '../app/Redux/store'

export default function MyApp(props: any) {
	const { Component, pageProps } = props

	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</React.Fragment>
	)
}
