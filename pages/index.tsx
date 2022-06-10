import Head from 'next/head'
import Link from 'next/link'
import { CardCarrinho } from '../components/card-carrinho'
import styles from '../styles/Default.module.css'

export default function Home() {
  return (
    <div className={styles.homeGeral}>
      <Head>
          <title>Store</title>
          <meta name="description" content="Store" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardCarrinho/>
      <div className={styles.homeContainer}>
          <h1>
              Home Store Teste
          </h1>
          <h3>Lista de Produtos abaixo:</h3>
          <Link className={styles.btnVolta} href="/produtos">Clique aqui</Link>
      </div>
    </div>
  )
}
