import React, { useState, useEffect } from 'react'
import CartItem from '../../components/Order/CartItem/CartItem'
import "./Cart.css"

function Cart() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("CartItems.json")
            .then((res) => {
                return res.json()
            }).then((res) => {
                setItems(res)
            })
    })
    return (
        <div className='cartItemsContainer'>
            <h3 className='cartHeader'>Shopping Cart</h3>
            <hr></hr>
            { items.map((item) => (
                    <CartItem item = {item}/>
            ))}
        </div>
    )
}

export default Cart
