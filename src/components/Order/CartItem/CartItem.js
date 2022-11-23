import React from 'react'
import "./CartItem.css"

function CartItem(props) {
    return (
        <div class="cartItem">
            <div class="imageContainer col-4">
                <img 
                    src= {props.item.image}
                    class="img-fluid rounded-start" 
                    alt="...">
                </img>
            </div>
            <div class="DetailContainer col-6">
                <h5 class="title">{props.item.name}</h5>
                <p class="description">{props.item.detail}</p>
                <div className='qtyDiv'>
                    <span className='qty'>Qty &nbsp;:</span> &nbsp;
                    <select className='quantity'>
                        <option value="1" className='listItem'>1</option>
                        <option value="2" className='listItem'>2</option>
                        <option value="3" className='listItem'>3</option>
                        <option value="4" className='listItem'>4</option>
                        <option value="5" className='listItem'>5</option>
                        <option value="6" className='listItem'>6</option>
                        <option value="7" className='listItem'>7</option>
                        <option value="8" className='listItem'>8</option>
                        <option value="9" className='listItem'>9</option>
                        <option value="10" className='listItem'>10</option>
                    </select>
                </div>
            </div>
            <div class="priceContainer col-2"> 
                <h5>Price</h5>
                <h6>₹ {props.item.price}</h6>                   
            </div>
        </div>
    )
}

export default CartItem
