import React from 'react'
import "./CartItem.css"
import { useState } from 'react'

function CartItem(props) {
    const [itemQty, setItemQty] = useState(1)
    function handleQtyChange(event) {
        let prevQty = Number(event.target.closest('.qty-div').querySelector('.item-qty').innerText) 
        let cartPriceElement = event.target.closest('.cartItemsContainer').querySelector('.total-price')
        let itemPrice = Number(event.target.closest('.priceContainer').querySelector('.price').innerText)/prevQty
        if(event.target.innerText === "+"){
            cartPriceElement.innerText = +cartPriceElement.innerText + (+itemPrice)
            setItemQty(prevQty + 1)    
        }else{
            cartPriceElement.innerText = +cartPriceElement.innerText - (+itemPrice)
            if((prevQty - 1) == 0){
                let item = event.target.closest('.cartItem')
                item.remove()
                return
            }
            setItemQty(prevQty-1)
        }        
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
                <h5 className="title">{props.item.name}</h5>
                <p className="description">{props.item.detail}</p>
            </div>
            <div className="priceContainer col-lg-3 col-3"> 
                <h5>Price</h5>
                <h6>₹ <span className='price'>{itemQty * props.item.price}</span></h6>   
                <div className='qty-div'>
                <button 
                    className="minus-button bg-danger"
                    onClick={(event) => handleQtyChange(event)}
                > – </button>
                <div className='item-qty'>
                    <span className='qty'>{itemQty}</span>
                </div>
                <button 
                    className="plus-button bg-primary"
                    onClick={(event) => handleQtyChange(event)}
                > + </button>
                </div>                
            </div>
        </div>
    )
}

export default CartItem
