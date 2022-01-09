import Head from 'next/head'
import Header from '../components/Header'
import styles from	'../styles/Layout.module.css'

export const story = () => {
	return (
		<div>
			<main className={styles.main}>
				<Header headerText="Our Story" />
      		</main>      
			
		</div>
	)
}

export default story
