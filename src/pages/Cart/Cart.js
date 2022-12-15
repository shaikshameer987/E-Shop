import React, { useState, useEffect } from 'react'
import CartItem from '../../components/Order/CartItem/CartItem'
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
import "./Cart.css"
import { useCart } from '../../Context/CartContext';

function Cart() {

    const {cartItems} = useCart()
    const [totalPrice, setTotalPrice] = useState(0) 
    
    useEffect(() => {
        let totalAmount = 0
        for(let i = 0; i < cartItems.length; i++){
            totalAmount += cartItems[i].price * cartItems[i].qty
        }
        setTotalPrice(totalAmount)
    },[cartItems])

    return (
        <>
        <Header />
        <div className='cartItemsContainer'>
            <div className='cart-header'>
                <h4 className='heading'>Shopping Cart</h4>
                <div className='total-price-div'>
                    <span className='cart-price-heading'>Total Price :</span>
                    <span className='rupeesymbol'>₹ <span className='total-price'>{Math.round(totalPrice)}</span></span>
                    <div>
                        <a href="/checkout" className='btn goto-checkout-button bg-success'>Checkout</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            { cartItems.map((item) => (
                    <CartItem 
                        item = {item} 
                        key = {item.title + item.price}  
                    />
            )) }
            <br></br>
            <Footer />
        </div>
        </>
    )
}

export default Cart
