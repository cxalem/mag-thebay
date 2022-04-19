import { NextPage } from 'next'
import Head from 'next/head'
import UnderConstruction from '../components/UnderConstruction/UnderConstruction'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mag-Thebay</title>
        <meta name="description" content="Construyendo un mundo sin límites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UnderConstruction />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default Home;