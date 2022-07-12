import { createContext, useState } from "react";

import SHOP_DATA from '../shop-data.json';


// as the actual value you want to access
export const ProductsContext = createContext({
    currentProducts: [],
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {
    var [currentProducts, setProducts] = useState(SHOP_DATA);
    var value = {currentProducts, setProducts};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
