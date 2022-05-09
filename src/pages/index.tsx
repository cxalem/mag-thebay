import { NextPage } from 'next'
import UnderConstruction from '../components/UnderConstruction/UnderConstruction'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <UnderConstruction />
    </div>
  )
}


export default Home;