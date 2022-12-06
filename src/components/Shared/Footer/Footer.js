import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='row footer-row1'>
            <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'> 
                <h5 className="footer-list-heading">Get to Know Us</h5>
                <ul className="footer-row1-lists">
                    <li><a className='navbar-list-item' href=''>Careers</a></li>
                    <li><a className='navbar-list-item' href=''>Blog</a></li>
                    <li><a className='navbar-list-item' href=''>About Amazon</a></li>
                    <li><a className='navbar-list-item' href=''>Investor Relations</a></li>
                    <li><a className='navbar-list-item' href=''>Amazon Devices</a></li>
                    <li><a className='navbar-list-item' href=''>Amazon Science</a></li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Make Money with Us</h5>
                <ul className="footer-row1-lists">
                    <li><a className='navbar-list-item' href=''>Sell products on Amazon</a></li>
                    <li><a className='navbar-list-item' href=''>Sell on Amazon Business</a></li>
                    <li><a className='navbar-list-item' href=''>Sell apps on Amazon</a></li>
                    <li><a className='navbar-list-item' href=''>Become an Affiliate</a></li>
                    <li><a className='navbar-list-item' href=''>Advertise Your Products</a></li>
                    <li><a className='navbar-list-item' href=''>Self-Publish with Us</a></li>
                    <li><a className='navbar-list-item' href=''>Host an Amazon Hub</a></li>
                    <li><a className='navbar-list-item' href=''>See More Make Money with Us</a></li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Amazon Payment Products</h5>
                <ul className="footer-row1-lists">
                    <li><a className='navbar-list-item' href=''>Amazon Business Card</a></li>
                    <li><a className='navbar-list-item' href=''>Shop with Points</a></li>
                    <li><a className='navbar-list-item' href=''>Reload Your Balance</a></li>
                    <li><a className='navbar-list-item' href=''>Amazon Currency Converter</a></li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Let Us Help You</h5>
                <ul className="footer-row1-lists">
                    <li><a className='navbar-list-item' href=''>Amazon and COVID-19</a></li>
                    <li><a className='navbar-list-item' href=''>Your Account</a></li>
                    <li><a className='navbar-list-item' href=''>Your Orders</a></li>
                    <li><a className='navbar-list-item' href=''>Shipping Rates & Policies</a></li>
                    <li><a className='navbar-list-item' href=''>Returns & Replacements</a></li>
                    <li><a className='navbar-list-item' href=''>Manage Your Content and Devices</a></li>
                    <li><a className='navbar-list-item' href=''>Amazon Assistant</a></li>
                    <li><a className='navbar-list-item' href=''>Help</a></li>
                </ul>
           </div>
           </div>
        </div>
    )
}

export default Footer
