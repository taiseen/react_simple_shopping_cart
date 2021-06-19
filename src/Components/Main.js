import Product from './Product';

const Main = ({ products, onAdd }) => {

    return (
        <main className="block col-2">
            <h2>Product</h2>
            <div className="row">
                {
                    products && products.map(product => (
                        <Product key={product.id} product={product} onAdd={onAdd} />
                    ))
                }
            </div>
        </main>
    );
};

export default Main;