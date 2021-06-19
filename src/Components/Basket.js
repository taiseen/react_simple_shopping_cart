
const Basket = ({ cartItems, onAdd, onRemove }) => {

    const itemPrice = cartItems.reduce((total, { price, quantity }) => total + (price * quantity), 0);
    const taxPrice = itemPrice * 0.14;
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
                                <button onClick={() => onAdd(item)} className="add">+</button>
                                <button onClick={() => onRemove(item)} className="remove">-</button>
                            </div>

                            <div className="col-2 text-right">
                                {quantity} x ${price.toFixed(2)}
                            </div>

                        </div>
                    )
                })
            }

            
        </aside>
    );
};

export default Basket;