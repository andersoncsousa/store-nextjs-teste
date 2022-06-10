import Head from 'next/head'
import Link from 'next/link'
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

import styles from '../styles/Default.module.css'

export default function Carrinho () {
    // const {cart, setCart,handleAddItemCart, handleRemoveItemFromCart, clearCart}  = useContext(CartContext)

    return (
        <div className={styles.carrinhoGeral}>
            <Head>
                <title>Store Carrinho</title>
                <meta name="description" content="Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>
                    Carrinho
                </h1>
                <div>
                    {/* {cart.map(setCart => { */}
                        return(
                            <div key={cart.id}>
                                <h2 className="title">{cart.title}</h2>
                                <h3 className="price">{cart.price}</h3>
                            </div>
                        )
                    {/* })} */}
                    <h1>Produto</h1>
                    <button>+</button>
                    <button>-</button>
                    <button>Limpar tudo</button>
                </div>
            </div>
            <Link href="/">Voltar a página</Link>
        </div>
    )
}
