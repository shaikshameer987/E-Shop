import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilterProducts from './pages/FilterProducts/FilterProducts';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Checkout from './pages/Checkout/Checkout';
import Myprofile from './pages/MyProfile/Myprofile';
import { Provider } from 'react-redux';
import store from "../src/redux/store"

function App() {

    return (
        <div className="App">
			<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="cart" element={<Cart />}></Route>
					<Route path = "filterproducts" element={<FilterProducts />}></Route>
					<Route path = "singleproduct/:id" element={<SingleProduct />}></Route>
					<Route path = "cart/checkout" element={<Checkout />}></Route>
					<Route path = "myprofile" element={<Myprofile />}></Route>
					<Route path = "*" element={<PageNotFound />}></Route>
				</Routes>
			</BrowserRouter>
			</Provider>
      	</div>
  	);
}

export default App;
