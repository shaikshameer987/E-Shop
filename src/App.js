import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Shared/Footer/Footer';

function App() {
    return (
        <div className="App">
			{/* <Home /> */}
			<Cart />
			<Footer />
      	</div>
  	);
}

export default App;
