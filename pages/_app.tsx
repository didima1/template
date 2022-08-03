import '@/styles/style.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'inversify-react'
import { RootStore } from '../stores/RootStore'
import MainLayout from '../components/MainLayout'
import { ModalsContainer } from '../modals'
const rootStore = new RootStore()
const container = rootStore.container

function MyApp({ Component, pageProps }: AppProps) {


	// try reconnect to web3
	useEffect(() => {
		rootStore.walletStore.tryReconnect()
	}, [])

	return (
		<Provider container={container}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
			<ModalsContainer />
		</Provider>
	)
}

export default MyApp
