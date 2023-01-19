import React, {useState} from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../../redux/reducers/searchReducer' 
import { category } from '../../../redux/reducers/filterReducer'
import { setLogout } from "../../../redux/reducers/userReducer"
import SearchRecommendation from '../../SearchRecommendation/SearchRecommendation'

function Header() {
    const [value, setValue] = useState("")
    const cartItems = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div style={{position: "sticky", top: "0px"}} className="header-sticky">
            <header className="header">
                <div className="container-fluid">
                    <div className='branding-div col-md-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                        </svg>       
                        <Link 
                            className="brand-name" 
                            to="/"
                            onClick={() => {
                                dispatch(setSearchValue(value))
                                setValue("")
                                dispatch(category(null))
                            }}
                        >E-Shop</Link>
                    </div>  
                    <div className='search-bar col-md-6'>
                        <form className='d-flex'>
                            <input 
                                className='search-input'
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
                                    if(value.length === 0){
                                        return
                                    }
                                    dispatch(category("all"))
                                    dispatch(setSearchValue(value))
                                    setValue("")
                                    navigate("/filterproducts")
                                }}
                            >Search</button>
                        </form>
                        <SearchRecommendation value= {value} setValue= {setValue}/>
                    </div>
                    <div className='nav-list col-md-3 d-flex justify-content-end'>  
                    <ul className="user-list">
                        {
                            user.isLoggedin 
                            ?
                            <div className="btn-group profile-dropdown-div">
                                <button type="button" className="btn btn-secondary user-profile" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img 
                                        className='profile-pic' 
                                        alt="" 
                                        src={user.profilepic.length !== 0 ? user.profilepic : 'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0='}
                                        
                                    ></img> 
                                </button>   
                                <div className='mt-3'>
                                <ul className="dropdown-menu dropdown-menu-end profile-listitems">
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" to="/myprofile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="plist-logo" viewBox="0 0 16 14">
                                            <path fill="#2874F1" d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm0 2c1.107 0 2 .894 2 2 0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2zM7 11.8a4.8 4.8 0 0 1-4-2.147C3.02 8.327 5.667 7.6 7 7.6c1.327 0 3.98.727 4 2.053A4.8 4.8 0 0 1 7 11.8z"></path>
                                        </svg>
                                        My Profile</Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" className="plist-logo" viewBox="0 0 16 12"><g fill="none"><path fill="#2874F1" d="M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z"></path></g></svg>
                                        My Orders</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="plist-logo" width="16" height="14" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" opacity=".9"></path></svg>
                                            Wishlist
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="plist-logo" viewBox="0 0 12 14"><g fill="none"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg>
                                            Notifications
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className="dropdown-item d-flex align-items-center" 
                                            type="button"
                                            onClick={() => {
                                                dispatch(setLogout(false))
                                                navigate("/")
                                            }}
                                        >
                                            <svg width="16" height="16" className="plist-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2874F0" stroke="#2874F0" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                                </div>
                          </div>
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
        </div>
    )
}

export default Header
