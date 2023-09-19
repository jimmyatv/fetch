import {createContext, useState, useEffect} from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setProducts(json);
        })
    },[]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;