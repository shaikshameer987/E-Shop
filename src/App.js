import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn/LogIn';
import { CartProvider } from './Context/CartContext';

function App() {

    return (
        <div className="App">
			<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="register" element={<Register />}></Route>
					<Route path="login" element={<LogIn />}></Route>
					<Route path="cart" element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
			</CartProvider>
      	</div>
  	);
}

export default App;
