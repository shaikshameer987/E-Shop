import React, { useState, useEffect } from 'react'
import CartItem from '../../components/Order/CartItem/CartItem'
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
import "./Cart.css"

function Cart() {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0) 

    useEffect(() => {
        let cart = localStorage.getItem('cart')
        let cartItems = JSON.parse(cart)
        if(cartItems){
            setCartItems(cartItems)
            updateTotalPrice(cartItems)
        }
    },[])

    function updatePrice(item, newQty) {
        let items = cartItems
        let cartItemIndex = items.findIndex((i) => i.name === item.name)
        items[cartItemIndex].qty = newQty
        updateTotalPrice(items)
    }

    function updateTotalPrice(res) {
        let updatedPrice = 0
        for(let i = 0; i < res.length; i++){
            updatedPrice += +(res[i].price) * +(res[i].qty)
        }
        setTotalPrice(updatedPrice)
    }

    function deleteItem(item) {
        let items = cartItems
        let index = items.findIndex((i) => i.name === item.name)
        items.splice(index, 1)
        setCartItems([...items])
        updateTotalPrice(items)
    }
    
    return (
        <>
        <Header />
        <div className='cartItemsContainer'>
            <div className='cart-header'>
                <h3 className='heading'>Shopping Cart</h3>
                <div className='total-price-div'>
                    <span className='cart-price-heading'>Total Amount :</span>
                    <span className='rupeesymbol'>₹ <span className='total-price'>{Math.round(totalPrice)}</span></span>
                    <div>
                        <a href="/checkout" className='btn goto-checkout-button bg-success'>Checkout</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            { cartItems.map((item,index) => (
                    <CartItem 
                        item = {item} 
                        key = {item.title + item.price} 
                        index = {index} 
                        updatePrice = {updatePrice}
                        deleteItem = {deleteItem}
                    />
            )) }
        </div>
        <Footer />
        </>
    )
}

export default Cart
