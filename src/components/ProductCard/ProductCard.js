import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { category, singleproduct } from '../../redux/reducers/filterReducer'

function ProductCard(props) {
    const navigate = useNavigate() 
    const dispatch = useDispatch()
    console.log("Product Card Called")

    let ratings = Math.round(props.item.rating.rate)
    let ratingsArr = new Array(ratings).fill("")
    let svg = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>

  return (
        <div 
            className="card product-item"
            onClick={() => {
                dispatch(singleproduct(props.item))
                dispatch(category(null))
                navigate("/singleproduct")
            }}
        >
            <h5 
                className="product-title"
            >{props.item.title}</h5>
            <div className='imageDiv'>
                <img 
                    src= {props.item.image} 
                    className="card-img"
                    alt="...">
                </img>
            </div>
            <div className="cardBody">
                <h6 className="product-category">{props.item.category}</h6>
                <p className="product-rating">{
                    ratingsArr.map((star, index) => (
                        <span key = {index} className="star"> {star} {svg} </span>
                    ))
                } &nbsp; {props.item.rating.count}</p>
                <p className="product-price">₹ {props.item.price}</p>
                <div className='desc-div'>
                    <p className="product-description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard