
const Header = ({ cartItems }) => {
    return (
        <header className="row block center">
            <div>
                <h1>Small Shopping Cart</h1>
            </div>

            <div>
                <a href="#/">Cart {
                    cartItems ? <span className="badge">{cartItems}</span> : null
                }</a> <a href="#/">SignIn</a>
            </div>

        </header>
    );
};

export default Header;