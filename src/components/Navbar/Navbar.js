import React from 'react'
import { Link } from 'react-router-dom'
import { useFilteredProducts } from '../../Context/FilterContext'
import "./Navbar.css"

function Navbar() {
    const {dispatch} = useFilteredProducts()
    
    return (
        <nav className='navbar'>
            <button 
                className='navLink'
                onClick={() => dispatch({type : "category", payload: ""})}
            ><Link className='nav-list' to="/filterproducts">All</Link></button>
            <button 
                className='navLink'
                onClick={() => dispatch({type : "category", payload: "clothing"})}
            ><Link  className='nav-list' to="/filterproducts">Fashion</Link></button>
            <button
                className='navLink'
                onClick={() => dispatch({type : "category", payload: "electronics"})}
            ><Link  className='nav-list' to="/filterproducts">Electronics</Link></button>
            <button 
                className='navLink'
                onClick={() => dispatch({type : "category", payload: "jewelery"})}
            ><Link  className='nav-list' to="/filterproducts">Jewelery</Link></button>
        </nav>
    )
}

export default Navbar