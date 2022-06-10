import Head from 'next/head'
import Link from 'next/link'

export const CardCarrinho = () => {

    return (
        <>
            <Head>
                <title>Store - Carrinho</title>
                <meta name="description" content="Store - Carrinho" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/carrinho">
                <p>Carrinho: 0</p>
            </Link>
        </>
    )
}

;
