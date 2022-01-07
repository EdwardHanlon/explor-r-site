import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explor-R</title>
        <meta name="description" content="Go Explor...." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Go Explor
      </main>      
    </div>
  )
}
