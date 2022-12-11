import React from 'react'
import "./CartItem.css"
import { useCart } from '../../../Context/CartContext'

function CartItem(props) {

    const {dispatch} = useCart()
    
    function handleQtyChange(newQty) {
        if(newQty > 0){
            props.item.qty = newQty
            dispatch({type : "CHANGE_QTY", data : props.item})
        }else{
            props.item.qty = 0
            dispatch({type : "CHANGE_QTY", data : props.item})
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
            <div className="detail-container col-lg-8 col-sm-6 col-5">
                <h5 className="title">{props.item.title}</h5>
                <p className="description">{props.item.description}</p>
            </div>
            <div className="priceContainer col-lg-2 col-3"> 
                <p className='itemTotalPrice'>₹ {Math.round(props.item.price * props.item.qty)}</p>   
                <div className='qty-div'>
                <button 
                    className="minus-button bg-danger"
                    onClick={() => handleQtyChange(props.item.qty <= 1 ? 0 : props.item.qty - 1)}
                > – </button>
                <div className='item-qty'>
                    <span className='qty'>{props.item.qty}</span>
                </div>
                <button 
                    className="plus-button bg-primary"
                    onClick={() => handleQtyChange(props.item.qty + 1)}
                > + </button>
                </div> 
                <button 
                    className='btn btn-outline-danger btn-sm deleteItem mt-2'
                    onClick = {() => dispatch({type : "REMOVE_ITEM", data : props.item})}
                >Delete</button>          
            </div>
        </div>
    )
}

export default CartItem
