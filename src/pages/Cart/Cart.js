import React, { useState, useEffect } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
import Modal from "../../components/Modal/Modal"
import "./Cart.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Register from '../../components/Auth/Register/Register';
import LogIn from '../../components/Auth/LogIn/LogIn';
import { fetchProducts } from '../../redux/reducers/filterReducer';
import { useDispatch } from 'react-redux';

function Cart() {
    const authToOpen = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.cartItems)
    const [totalPrice, setTotalPrice] = useState(0) 
    const [modal, setModal] = useState({
        title: "",
        description: "",
    })
    
    useEffect(() => {
        let totalAmount = 0
        for(let i = 0; i < cartItems.length; i++){
            totalAmount += cartItems[i].price * cartItems[i].qty
        }
        setTotalPrice(totalAmount)
        dispatch(fetchProducts())
    },[cartItems,dispatch])

    return (
        <div style={{height: authToOpen === "" ? "100%" : "100vh", overflow: authToOpen === "" ? "" : "hidden"}}>
        <Modal modal = {modal}/>
        <Header />
        <div className='cartItemsContainer'>
            <div className='cart-header'>
                <h4 className='heading'>Shopping Cart</h4>
                <div className='total-price-div'>
                    <span className='cart-price-heading'>Total Price :</span>
                    <span className='rupeesymbol'>₹ <span className='total-price'>{Math.round(totalPrice)}</span></span>
                    <div>
                            <button 
                                className='btn goto-checkout-button'
                                onClick={() => {
                                    if(cartItems.length === 0){
                                        setModal({
                                            title: "Cart is Empty",
                                            description: "Please add items in cart before checkout",
                                        })
                                        let btn = document.getElementById("modaltoggler")
                                        btn.click()
                                    }else if(cartItems.length > 0 && user.isLoggedin){
                                        navigate("/cart/checkout")
                                    }
                                    else{
                                        setModal({
                                            title: "LogIn",
                                            description: "Please Login before placing an order",
                                        })
                                        let btn = document.getElementById("modaltoggler")
                                        btn.click()    
                                    }
                                }} 
                        > 
                                Checkout
                            </button>
                    </div>
                </div>
            </div>
            <hr></hr>
            { 
                cartItems.length 
                ?
                cartItems.map((item) => (
                    <CartItem 
                        item = {item} 
                        key = {item.id}  
                    />
                )) 
                :
                <div style={{width: "100%",marginTop: '20px'}} className="d-flex justify-content-center">
                    <h3>Cart is Empty</h3>
                </div>
            }
            <br></br>
            <Footer />
            <>
				{
					authToOpen !== "" &&
					<div className="auth_filter_container_outer">
						<div className="auth_filter_container_inner">
							{
								authToOpen === "register"
								?
								<Register/>
								:
								<LogIn/>
							}
						</div>
					</div>
				}
			</>
        </div>
        </div>
    )
}

export default Cart
