import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import Header from '../../components/Shared/Header/Header'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Shared/Footer/Footer"
import { addItem } from '../../redux/reducers/cartReducer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Register from '../../components/Auth/Register/Register'
import LogIn from '../../components/Auth/LogIn/LogIn'
import { useParams } from 'react-router-dom'

function SingleProduct() {
	const params = useParams()
	const authToOpen = useSelector(state => state.auth.value)
	const [singleProduct, setSingleProduct] = useState("")
	const cartItems = useSelector(state => state.cart.cartItems)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [inCart, setInCart] = useState(false)

	useEffect(() => {
		let index = cartItems.findIndex((item) => item.id === singleProduct.id)
		if(index !== -1){
			setInCart(true)
		}
	},[cartItems,navigate,singleProduct])

	useEffect(() => {
		fetch("../../Products.json")
			.then(res => res.json())
			.then((data) => {
				data.forEach(i => i.qty = 1)
				let product = data.find((i) => i.id === +(params.id))
				setSingleProduct(product)
			})
	},[params.id])

	return (
		singleProduct &&
		<div className='single-product-page' style={{height: authToOpen === "" ? "100%" : "100vh", overflow: authToOpen === "" ? "" : "hidden"}}>
			<Header />
			<Navbar />
			<div className='product-details d-flex'>
				<div className='product-image-button-div'>
				<div className='photo'>
					<img className='singleproduct-image' src={singleProduct.image} alt=''/>
				</div>
				<div className='buy-buttondiv'>
					<button 
						className="addtocart"
						onClick={() => {
							if(inCart){
								navigate("/cart")
							}else{
								dispatch(addItem(singleProduct))
								setInCart(true)

							}
						}}
					>{
						inCart 
						?
						<div className='d-flex align-items-center justify-content-center'>
							<svg className="me-2 ms-1" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
							<p className='m-0'>GO TO CART</p>
						</div>
						:
						<div className='d-flex align-items-center justify-content-center'>
							<svg className="me-2 ms-1" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
							<p className='m-0'>ADD TO CART</p>
						</div>

					 }
					 </button>
					<button 
						className="buynow"
						onClick={() => {
							dispatch(addItem(singleProduct))
							navigate("/cart")
						}}
					>
					<div className='d-flex align-items-center justify-content-center'>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-fill me-1 pt-1" viewBox="0 0 16 16">
  						<path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
					</svg>
						<p className='m-0'>BUY NOW</p>
					</div>
					</button>
				</div>
				</div>
				<div className='product-text'>
					<h4 className='mb-3'>{singleProduct.title}</h4>
					<h6>Brand : {singleProduct.brand}</h6>
					<h4 className='mb-3'>₹ {singleProduct.price}</h4>
					<div className='discounts'>
						<h6 className='mb-3'>Available Offers</h6>
						<h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-tag-fill tag" viewBox="0 0 16 16">
  							<path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
						</svg>
						<small>Bank Offer5% Cashback on Flipkart Axis Bank Card</small></h6>
					</div>
					<div className='discounts'>
						<h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-tag-fill tag" viewBox="0 0 16 16">
  							<path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
						</svg>
						<small>FreebieCoinDCX Get Bitcoin Worth ₹251</small></h6>
					</div>
					<div className='discounts'>
						<h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-tag-fill tag" viewBox="0 0 16 16">
  							<path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
						</svg>
						<small>FreebieOTTplay Premium: Get SonyLIV, Zee5 & more at Re 1</small></h6>
					</div>
					<div className='discounts mb-3'>
						<h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-tag-fill tag" viewBox="0 0 16 16">
  							<path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
						</svg>
						<small>FreebieExam Prep Classes worth ₹999</small></h6>
					</div>
					{singleProduct.size && <h6>Size : {singleProduct.size}</h6>} 
					<p>{singleProduct.description}</p>
					<div className='ratings-div'>
						<h5>Ratings and Reviews</h5>
						<div className='rating-box'>
							<span style={{fontSize: "30px"}}>{singleProduct.rating.rate}</span>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-star-fill singlestar" viewBox="0 0 16 16">
                					<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            				</svg>
							</span>
							<span>{singleProduct.rating.count} ratings and reviews</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<>
				{
					authToOpen !== "" &&
					<div className="auth_singleprod_container_outer">
						<div className="auth_singleprod_container_inner">
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
	)
}

export default SingleProduct
