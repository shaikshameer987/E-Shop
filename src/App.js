import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn/LogIn';
// import { CartProvider } from './Context/CartContext';
import FilterProducts from './pages/FilterProducts/FilterProducts';
// import { FilterProvider } from './Context/FilterContext';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import { Provider } from 'react-redux';
import store from "../src/redux/store"

function App() {

    return (
        <div className="App">
			<Provider store={store}>
			{/* <CartProvider> */}
			{/* <FilterProvider> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="register" element={<Register />}></Route>
					<Route path="login" element={<LogIn />}></Route>
					<Route path="cart" element={<Cart />}></Route>
					<Route path = "filterproducts" element={<FilterProducts />}></Route>
					<Route path = "singleproduct" element={<SingleProduct />}></Route>
				</Routes>
			</BrowserRouter>
			{/* </FilterProvider> */}
			{/* </CartProvider> */}
			</Provider>
      	</div>
  	);
}

export default App;
