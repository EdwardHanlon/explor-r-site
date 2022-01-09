import Link from 'next/link'
import Button from '@mui/material/Button';
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
	return (
		<div className={navStyles.nav}>
			<ul>
				<li>
					<Link href="/">Explor</Link>
				</li>						
			</ul>
			<ul>	
				<li>
					<Link href="/signUp">Sign Up</Link>
				</li>
				<li>
					<Link href="/story">Read Our Story</Link>
				</li>					
				<Button variant="contained" className={navStyles.appButton}>
					<Link href="/getApp">Get the App</Link>
				</Button>			
			</ul>
		</div>
	)
}

export default Nav