import { createContext, useState } from "react";


export const CartDropdownContext = createContext();


export const CartDropdownProvider = ({children}) => {
    var [cartDropdownProps, setCartDropdownProps] = useState(
        {
            viewable: false,
            products: []
        },
    );

    console.log(cartDropdownProps.viewable);
    var value = {cartDropdownProps, setCartDropdownProps};
    return <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
}