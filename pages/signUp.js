import Header from '../components/Header'
import styles from	'../styles/Layout.module.css'

export const signUp = () => {
	return (
		<div>
			<main className={styles.main}>
				<Header headerText="Sign Up to get updates about the App" />
      		</main> 
		</div>
	)
}

export default signUp
