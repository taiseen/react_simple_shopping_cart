import Main from './Components/Main';
import Basket from './Components/Basket';
import Header from './Components/Header';
import data from './Components/data';

import { useState } from 'react';

const App = () => {

    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {

        // 1st time 
        // store <== undefined 
        const exist = cartItems.find(item => item.id === product.id)
        // exist <== undefined 
        console.log(exist);

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
        }else{
            const quantity = cartItems.map(item => item.id === product.id
                ? { ...exist, quantity: exist.quantity - 1 }
                : item
            );
            setCartItems(quantity);
        }
    }

    return (
        <div>
            <Header cartItems={cartItems} />

            <div className="row">
                <Main products={products} onAdd={onAdd} />
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
};

export default App;