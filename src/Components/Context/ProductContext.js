import { createContext, useState } from "react";
import data from './data';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const { products } = data;

    const [cartItems, setCartItems] = useState([]);


    const onAdd = (product) => {

        // 1st time 
        // store <== undefined 
        const exist = cartItems.find(item => item.id === product.id)
        // exist <== undefined 

        if (exist) {
            const quantity = cartItems.map(item => item.id === product.id
                ? { ...exist, quantity: exist.quantity + 1 }
                : item
            );
            setCartItems(quantity);
        } else {
            console.log('1st time ==> undefined...');
            const quantity = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(quantity);
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find(item => item.id === product.id);
        if (exist.quantity === 1) {
            const remainProduct = cartItems.filter(item => item.id !== product.id);
            setCartItems(remainProduct);

        } else {
            const quantity = cartItems.map(item => item.id === product.id
                ? { ...exist, quantity: exist.quantity - 1 }
                : item
            );
            setCartItems(quantity);
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