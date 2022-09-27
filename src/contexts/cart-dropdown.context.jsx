import { useEffect } from "react";
import { createContext, useState } from "react";



const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}


export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {}
});


export const CartDropdownProvider = ({children}) => {
    var [isCartOpen, setIsCartOpen] = useState(false);
    var [cartItems, setCartItems] = useState([]);
    var [cartCount, setCartCount] =useState(0);



    // whenever anything related to cartITems changes run this.
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    var value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart, cartCount, removeItemFromCart};
    return <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
}