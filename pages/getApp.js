import Header from '../components/Header'
import styles from	'../styles/Layout.module.css'

export const getApp = () => {
	return (
		<div>
			<main className={styles.main}>
				<Header headerText="Placeholder for Link to App Store" />
      		</main> 
		</div>
	)
}

export default getApp
