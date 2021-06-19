import Main from './Components/Main';
import Basket from './Components/Basket';
import Header from './Components/Header';
import ProductContextProvider from './Components/Context/ProductContext';

const App = () => {

    return (
        <ProductContextProvider>
            <Header />
            <div className="row">
                <Main />
                <Basket />
            </div>
        </ProductContextProvider>
    );
};

export default App;