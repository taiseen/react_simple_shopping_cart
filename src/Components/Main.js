import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import Product from './Product';

const Main = () => {

    const { products, cartItems, onAdd, onRemoveItem } = useContext(ProductContext);

    return (
        <main className="block col-2">
            <h2>Product</h2>
            <div className="row">
                {
                    products && products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemoveItem={onRemoveItem} />
                    ))
                }
            </div>
        </main>
    );
};

export default Main;