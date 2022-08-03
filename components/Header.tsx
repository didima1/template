import { observer } from 'mobx-react'
import { FC } from 'react'
// import search from '../public/icons/search.svg'
import s from 'styles/header.module.scss'

const Header: FC = observer(() => {


	return (
		<header className={s.header}>
			header
		</header>
	)
})

export default Header
