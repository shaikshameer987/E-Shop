import React from 'react'
import { useDispatch } from 'react-redux'
import "./CartItem.css"
import { changeQty, removeItem } from '../../redux/reducers/cartReducer'

function CartItem(props) {

    const dispatch = useDispatch()
    
    function handleQtyChange(newQty) {
        if(newQty > 0){
            let item = props.item
            dispatch(changeQty([item, newQty]))
        }else{
            dispatch(removeItem(props.item))
        }
    }

    return (
        <div className="cartItem">
            <div className="image-container">
                <img 
                    src= {props.item.image}
                    className="product-image" 
                    alt="...">
                </img>
            </div>
            <div className="detail-container">
                <h5 className="title">{props.item.title}</h5>
            </div>
            <div className="priceContainer">
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
                    onClick = {() => dispatch(removeItem(props.item))}
                >Delete</button>          
            </div>
        </div>
    )
}

export default CartItem
