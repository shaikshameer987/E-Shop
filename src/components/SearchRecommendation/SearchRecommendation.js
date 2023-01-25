import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SearchRecommendation.css"
import { useNavigate } from 'react-router-dom'
import { fetchProducts } from '../../redux/reducers/productsReducer'

function SearchRecommendation({value, setValue}) {
    const allProducts = useSelector(state => state.products.products)
    const searchValue = value
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div className='search_help'>
            <ul>
                {   allProducts.length > 0 && searchValue.length > 0
                    &&
                    allProducts.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((product, index) => (
                        <button
                            className='search_filter_button'
                            key={index}
                            onClick={() => {
                                setValue("")
                                navigate("/singleproduct/" + product.id)
                            }}
                        >
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search me-2 search_svg_filter" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                <p className='remove_margin'>{product.title}</p>
                            </li>
                        </button>
                    ))
                }

            </ul>
        </div>
    )
}

export default SearchRecommendation
