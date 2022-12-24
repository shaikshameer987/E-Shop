import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { setSearchValue } from '../../redux/reducers/searchReducer'
import { category } from '../../redux/reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
    const dispatch = useDispatch()
    const productsCategory = useSelector(state => state.filter.category)
    
    return (
        <nav className='navbar'>
            <button 
                className={productsCategory === "all" ? "navLink navLink-active" : 'navLink'}
                onClick={() => {
                    dispatch(category("all"))
                    dispatch(setSearchValue(""))
                }}
            ><Link className='nav-list' to="/filterproducts">All</Link></button>
            <button 
                className={productsCategory === "clothing" ? "navLink navLink-active" : 'navLink'}
                onClick={() => {
                    dispatch(category("clothing"))
                    dispatch(setSearchValue(""))
                    
                }}
            ><Link  className='nav-list' to="/filterproducts">Fashion</Link></button>
            <button
                className={productsCategory === "electronics" ? "navLink navLink-active" : 'navLink'}
                onClick={() => {
                    dispatch(category("electronics"))
                    dispatch(setSearchValue(""))
                }}
            ><Link  className='nav-list' to="/filterproducts">Electronics</Link></button>
            <button 
                className={productsCategory === "jewelery" ? "navLink navLink-active" : 'navLink'}
                onClick={() =>{
                    dispatch(category("jewelery"))
                    dispatch(setSearchValue(""))
                }}
            ><Link  className='nav-list' to="/filterproducts">Jewelery</Link></button>
        </nav>
    )
}

export default Navbar