import { observer } from 'mobx-react'
import Head from 'next/head'
import { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

const MainLayout: FC = observer(({ children }) => {

	return (
		<>
			<Head>
				<title></title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
})

export default MainLayout
