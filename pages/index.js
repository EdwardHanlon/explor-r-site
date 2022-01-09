import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Explor-R</title>
        <meta name="keywords" content="Hiking, Mobile, Application, NFT, Web 3.0, blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header headerText="Go Explor" />
      </main>      
    </div>
  )
}
