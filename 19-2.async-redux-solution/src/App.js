import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";

function App() {

    const showCard = useSelector(state=>{
        return state.ui.cardIsVisible;
    });

    return (
        <Layout>
            {showCard && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
