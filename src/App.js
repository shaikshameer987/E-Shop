import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn/LogIn';
import { CartProvider } from './Context/CartContext';
import { SearchProvider } from './Context/SearchContent';
import FilterProducts from './pages/FilterProducts/FilterProducts';
import { ProductProvider } from './Context/ProductsContext';
import { FilterProvider } from './Context/FilterContext';
import { UserProvider } from './Context/UserContext';

function App() {

    return (
        <div className="App">
			<UserProvider>
			<ProductProvider>
			<CartProvider>
			<SearchProvider>
			<FilterProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="register" element={<Register />}></Route>
					<Route path="login" element={<LogIn />}></Route>
					<Route path="cart" element={<Cart />}></Route>
					<Route path = "filterproducts" element={<FilterProducts />}></Route>
				</Routes>
			</BrowserRouter>
			</FilterProvider>
			</SearchProvider>
			</CartProvider>
			</ProductProvider>
			</UserProvider>
      	</div>
  	);
}

export default App;
