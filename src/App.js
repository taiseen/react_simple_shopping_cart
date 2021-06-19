import Main from './Components/Main';
import Basket from './Components/Basket';
import Header from './Components/Header';

const App = () => {

    return (
        <div>
            <Header />

            <div>
                <Main />
                <Basket />
            </div>
        </div>
    );
};

export default App;