import { createContext, useState } from "react";
import data from './data';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const { products } = data;

    const [cartItems, setCartItems] = useState([]);


    const onAdd = (product) => {

        const exist = cartItems.find(item => item.id === product.id)
        // exist <== undefined | 1st time

        if (exist) {
            const increment = cartItems.map(item => item.id === product.id
                ? { ...exist, quantity: exist.quantity + 1 }
                : item
            );
            setCartItems(increment);
        } else {
            console.log('1st time ==> undefined...');
            const withQuantity = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(withQuantity);
        }
    }

    const onRemove = (product) => {

        const exist = cartItems.find(item => item.id === product.id);

        if (exist.quantity === 1) 
        {
            const remainProduct = cartItems.filter(item => item.id !== product.id);
            setCartItems(remainProduct);

        } else 
        {
            const decrement = cartItems.map(item => item.id === product.id
                ? { ...exist, quantity: exist.quantity - 1 }
                : item
            );
            setCartItems(decrement);
        }
    }

    // remove a single product from Cart 
    const onRemoveItem = (id) => {
        const remainProduct = cartItems.filter(item => item.id !== id);
        setCartItems(remainProduct);
    }

    // clear total basket 
    const clearBasket = () => {
        alert("Check Out Successfully...");
        setCartItems([]);
    }


    return (
        <ProductContext.Provider value={
            {
                products, cartItems,
                onAdd, onRemove, onRemoveItem, clearBasket
            }
        }>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;