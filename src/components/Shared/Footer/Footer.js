import React from 'react'
import "./Footer.css"

function Footer() {
    
    return (
        <div className='footer'>
            <div className='row footer-row1'>
            <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'> 
                <h5 className="footer-list-heading">Get to Know Us</h5>
                <ul className="footer-row1-lists">
                    <li>Careers     </li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Make Money with Us</h5>
                <ul className="footer-row1-lists">
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Make Money with Us</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Amazon Payment Products</h5>
                <ul className="footer-row1-lists">
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h5 className="footer-list-heading">Let Us Help You</h5>
                <ul className="footer-row1-lists">
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul>
           </div>
           </div>
        </div>
    )
}

export default Footer
