import {createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    function handleAddItemCart(id, title, price){
        const itemObject = {id, title, price}
        setCart([...cart, itemObject])
    }

    function handleRemoveItemFromCart(clickedItemIndex){
        const filteredCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
        )
        setCart(filteredCart)
    }

    function clearCart(){
        setCart([])
    }

    return (
        <CartContext.Provider 
            value={{cart, setCart, handleAddItemCart, handleRemoveItemFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
        )
}