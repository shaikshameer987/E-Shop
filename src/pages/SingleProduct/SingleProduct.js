import React from 'react'
import "./SingleProduct.css"
import Header from '../../components/Shared/Header/Header'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Shared/Footer/Footer"
import { addItem } from '../../redux/reducers/cartReducer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function SingleProduct() {

	const singleProduct = useSelector(state => state.filter.singleProduct)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	return (
		<div className='single-product-page'>
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
							dispatch(addItem(singleProduct))
						}}
					>ADD TO CART</button>
					<button 
						className="buynow"
						onClick={() => {
							dispatch(addItem(singleProduct))
							navigate("/cart")
						}}
					>BUY NOW</button>
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
		</div>
	)
}

export default SingleProduct
