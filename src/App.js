import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn/LogIn';
import FilterProducts from './pages/FilterProducts/FilterProducts';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Checkout from './pages/Checkout/Checkout';
import { Provider } from 'react-redux';
import store from "../src/redux/store"

function App() {

    return (
        <div className="App">
			<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="register" element={<Register />}></Route>
					<Route path="login" element={<LogIn />}></Route>
					<Route path="cart" element={<Cart />}></Route>
					<Route path = "filterproducts" element={<FilterProducts />}></Route>
					<Route path = "singleproduct" element={<SingleProduct />}></Route>
					<Route path = "cart/checkout" element={<Checkout />}></Route>
					<Route path = "*" element={<PageNotFound />}></Route>
				</Routes>
			</BrowserRouter>
			</Provider>
      	</div>
  	);
}

export default App;
