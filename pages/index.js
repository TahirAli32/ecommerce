import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce Store</title>
        <meta name="description" content="Ecommerce Site by Tahir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  )
}