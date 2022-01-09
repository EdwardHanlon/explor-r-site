import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = ({headerText}) => {
	return (
		<div>
			<h6 className={headerStyles.title}>{headerText}</h6>
		</div>
	)
}

export default Header
