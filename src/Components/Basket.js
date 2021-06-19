import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

const Basket = () => {

    const { cartItems, onAdd, onRemove , clearBasket } = useContext(ProductContext);

    const itemPrice = cartItems.reduce((total, { price, quantity }) => total + (price * quantity), 0);
    const taxPrice = itemPrice * 0.10;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h1>Basket</h1>

            <div>{cartItems.length === 0 && <div>Basket is empty</div>}</div>

            {
                cartItems?.map(item => {
                    const { id, name, quantity, price } = item;

                    return (
                        <div key={id} className="row">

                            <div className="col-2">{name}</div>

                            <div className="col-2">
                                <button onClick={() => onRemove(item)} className="remove">-</button>
                                <button onClick={() => onAdd(item)} className="add">+</button>
                            </div>

                            <div className="col-2 text-right">
                                <span className="quantity"><b>{quantity}</b></span> x ${price.toFixed(2)}
                            </div>

                        </div>
                    )
                })
            }

            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price (10%)</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2"><strong>Total Price</strong></div>
                        <div className="col-1 text-right">${totalPrice.toLocaleString()}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={clearBasket}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
};

export default Basket;