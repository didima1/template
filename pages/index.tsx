import { UserStore } from '../stores/UserStore'
import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import type { NextPage } from 'next'

const Home: NextPage = observer(() => {
	const store = useInjection(UserStore)

	return (
		<div className={'_container'}>
		</div>
	)
})

export default Home
