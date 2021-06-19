import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

const Header = () => {

    const { cartItems } = useContext(ProductContext);

    return (
        <header className="row block center">
            <div>
                <h1>Small Shopping Cart</h1>
            </div>

            <div>
                <a href="#/">Cart {
                    cartItems.length !== 0
                        ? <span className="badge">{cartItems.length}</span>
                        : null
                }</a> <a href="#/">SignIn</a>
            </div>

        </header>
    );
};

export default Header;