import React, { useState, useEffect } from 'react'
import CartItem from '../../components/Order/CartItem/CartItem'
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
import "./Cart.css"

function Cart() {
    const [items, setItems] = useState([])
    let totalcartvalue = 0
    items.map((item) => (
        totalcartvalue += +item.price
    ))
    useEffect(() => {
        fetch("CartItems.json")
            .then((res) => {
                return res.json()
            }).then((res) => {
                setItems(res)
            })
    })
    return (
        <>
        <Header />
        <div className='cartItemsContainer'>
            <div className='cart-header'>
                <h3 className='heading'>Shopping Cart</h3>
                <div className='total-price-div'>
                    <span className='cart-price-heading'>Total Amount :</span>
                    <span className='rupeesymbol'>₹ <span className='total-price'>{totalcartvalue}</span></span>
                    <div>
                        <button className='goto-checkout-button bg-success'>Checkout</button>
                    </div>
                </div>
            </div>
            <hr></hr>
            { items.map((item,index) => (
                    <CartItem item = {item} key = {index}/>
            ))}
        </div>
        <Footer />
        </>
    )
}

export default Cart
