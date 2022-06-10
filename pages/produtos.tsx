import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext/'

import styles from '../styles/Default.module.css'


import { CardCarrinho } from '../components/card-carrinho'
import api from './api/api'

interface ResponseData {
    id: string
    title: string
    price: number
    category: string
    description: string
    image: string
}

export default function Produtos () {
    const [products, setProducts] = useState<ResponseData[]>([])
    const {handleAddItemCart}  = useContext(CartContext)



    useEffect(() => {
        api
        .get('products')
        .then(response => {
            console.log('log', response.data)
            setProducts(response.data)
        })
        .catch(err => console.log('log erro', err))
    }, [])

    return (
        <div className={styles.produtosGeral}>
            <Head>
                <title>Store - Produtos</title>
                <meta name="description" content="Store - Produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardCarrinho/>
            <div className={styles.produtosContainer}>
                <h1>
                    Produtos
                </h1>
                <div className={styles.produtosBox}>
                    {products.map(products => {
                        return(
                            <div className={styles.produto} key={products.id}>
                                <Image src={`${products.image}`}
                                    alt={`Foto do ${products.title}`}
                                    width={'200px'}
                                    height={'200px'}
                                    placeholder={'empty'}
                                />
                                <h2 className={styles.title}>{products.title}</h2>
                                <h3 className={styles.price}>{products.price}</h3>
                                <h4 className={styles.category}>{products.category}</h4>
                                <h5 className={styles.description}>{products.description}</h5>
                                <button className={styles.btnAddCarrinho} onClick={() => handleAddItemCart(products.id, products.title, products.price)}>Adicionar no carrinho</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link className={styles.btnVoltar} href="/" 
            // style={{
            //     fontSize:'20px',
            //     fontWeight:'900',
            //     color:'#f0f',
            //     padding: '15px',
            // }}
            >Voltar a página</Link>
        </div>
    )
}
