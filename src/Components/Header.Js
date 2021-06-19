
const Header = ({ cartItems }) => {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>

            <div>
                <a href="#/">Cart {
                    cartItems?.length ? <span className="items">{cartItems.length}</span> : null
                }</a> <a href="#/">SignIn</a>
            </div>

        </header>
    );
};

export default Header;