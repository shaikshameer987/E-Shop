import React, {useState} from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useCart } from '../../../Context/CartContext'
import { useSearch } from '../../../Context/SearchContent'
import {useUser} from "../../../Context/UserContext"
import { useNavigate } from 'react-router-dom'

function Header() {
    const {dispatch} = useSearch()
    const [value, setValue] = useState("")
    const {cartItems} = useCart()  
    const {user} = useUser()
    const navigate = useNavigate()

    return (
            <header className="header">
                <div className="container-fluid">
                    <div className='branding-div col-md-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                        </svg>       
                        <Link className="brand-name" to="/">E-Shop</Link>
                    </div>  
                    <div className='search-bar col-md-6'>
                        <form className='d-flex'>
                            <input 
                                className='search-input mx-2'
                                type="text" 
                                value = {value}
                                onInput={(e) => {
                                    setValue(e.target.value)
                                }}
                            />
                            <button 
                                type='submit'
                                className='search-button'
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({type: "setState", data: value})
                                    navigate("/")
                                }}
                            >Search</button>
                        </form>
                    </div>
                    <div className='nav-list col-md-3 d-flex justify-content-end'>  
                    <ul className="user-list">
                        {
                            user.isLoggedin 
                            ?
                            <button className='user-profile'>
                             <img className='profile-pic' alt="" src='https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0='></img>   
                            </button>
                            :
                            <>
                            <li className="user-list-item">
                            <Link className="user-nav-link" to="/register">Register</Link>
                            </li>
                            <li className="user-list-item">
                            <Link className="user-nav-link" to="/login">SignIn</Link>
                            </li>
                            </>
                        }        
                        <li className="nav-item">
                            <Link className="cart-button" to="/cart">
                                Cart <span className="badge text-bg-warning">{cartItems.length ? cartItems.length : ""}</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </header>
    )
}

export default Header
