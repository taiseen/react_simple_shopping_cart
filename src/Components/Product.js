
const Product = ({ product, onAdd }) => {

    const { id, name, price, img } = product;


    return (
        <div>
            <h3>{name}</h3>
            <img className="small" src={img} alt={name} />
            <p>Price : ${price}</p>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;