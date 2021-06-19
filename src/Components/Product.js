const Product = ({ product, cartItems, onAdd, onRemoveItem }) => {

    const { id, name, price, img } = product;

    const exist = cartItems.find(item => item.id === id);

    return (
        <div>
            <h3>{name}</h3>
            <img className="small" src={img} alt={name} />
            <p>Price : ${price}</p>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
            {
                exist?.quantity >= 1 ? <button onClick={() => onRemoveItem(id)}>Remove from Cart</button> : null
            }
        </div>
    );
};

export default Product;