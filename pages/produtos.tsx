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
                    Produtos
                </h1>
                <ul>
                    {products.map(products => {
                        return(
                            <li key={products.id}>
                                <h2 className="title">{products.title}</h2>
                                <h3 className="price">{products.price}</h3>
                                <h4 className="category">{products.category}</h4>
                                <h5 className="description">{products.description}</h5>
                                <Image src={`${products.image}`}
                                    alt={`Foto do ${products.title}`}
                                    width={'200px'}
                                    height={'200px'}
                                    placeholder={'empty'}
                                />
                            </li>
                        )
                    })}
                </ul>
                <Link href="/">Voltar</Link>
            </div>
        </div>
    )
}
