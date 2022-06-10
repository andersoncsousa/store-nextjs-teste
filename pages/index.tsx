import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import api from './api/api'

interface ResponseData {
    id: string
    title: string
    price: number
    category: string
    description: string
    image: string
}

export default function Home() {
    const [products, setProducts] = useState<ResponseData[]>([])

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
        <div>
            <Head>
                <title>Store</title>
                <meta name="description" content="Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>
                    Home
                </h1>
                <Link href="/produtos">Produtos</Link>
            </div>
        </div>
    )
}
