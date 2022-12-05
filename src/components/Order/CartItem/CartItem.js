import React from 'react'
import "./CartItem.css"
import { useState } from 'react'

function CartItem(props) {
    const [itemQty, setItemQty] = useState(1)
    const [itemTotalPrice, setItemTotalPrice] = useState(props.item.price)

    function handleQtyChange(newQty) {
        if(newQty > 0){
            setItemQty(newQty)
            setItemTotalPrice(props.item.price * newQty)
        }else{
            setItemQty(0)
            setItemTotalPrice(0)
        }
        props.updatePrice(props.item,newQty)
    }

    function handleItemDelete() {
        props.deleteItem(props.item)
        let cartItems = localStorage.getItem('cart')
        let cart = JSON.parse(cartItems)
        let index = cart.findIndex((i) => i === props.item)
        cart.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    
    return (
        <div className="cartItem">
            <div className="image-container col-lg-2 col-sm-3 col-4">
                <img 
                    src= {props.item.image}
                    className="product-image" 
                    alt="...">
                </img>
            </div>
            <div className="detail-container col-lg-7 col-sm-6 col-5">
                <h5 className="title">{props.item.title}</h5>
                <p className="description">{props.item.description}</p>
            </div>
            <div className="priceContainer col-lg-3 col-3"> 
                <p className='itemTotalPrice'>₹ {Math.round(itemTotalPrice)}</p>   
                <div className='qty-div'>
                <button 
                    className="minus-button bg-danger"
                    onClick={() => handleQtyChange(itemQty <= 1 ? 0 : itemQty - 1)}
                > – </button>
                <div className='item-qty'>
                    <span className='qty'>{itemQty}</span>
                </div>
                <button 
                    className="plus-button bg-primary"
                    onClick={() => handleQtyChange(itemQty + 1)}
                > + </button>
                </div> 
                <button 
                    className='btn btn-outline-danger btn-sm deleteItem mt-2'
                    onClick = {() => handleItemDelete()}
                >Delete</button>          
            </div>
        </div>
    )
}

export default CartItem
