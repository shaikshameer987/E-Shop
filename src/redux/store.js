import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/reducers/userReducer"
import searchReducer from './reducers/searchReducer';
import productsReducer from './reducers/productsReducer';
import filterReducer from './reducers/filterReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
    reducer: {
        user : userReducer,
        search : searchReducer,
		products : productsReducer,
        filter : filterReducer,
        cart : cartReducer
	}
});

export default store