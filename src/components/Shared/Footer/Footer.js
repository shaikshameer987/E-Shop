import React from 'react'
import "./Footer.css"

function Footer() {
    
    return (
        <div className='footer'>
            <div className='row footer-row1'>
            <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'> 
                <h6 className="footer-list-heading">ABOUT</h6>
                <ul className="footer-row1-lists">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>E-shop Stories</li>
                    <li>E-shop Wholesale</li>
                    <li>Corporate Information</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h6 className="footer-list-heading">HELP</h6>
                <ul className="footer-row1-lists">
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancellation and Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h6 className="footer-list-heading">POLICY</h6>
                <ul className="footer-row1-lists">
                    <li>Return Policy</li>
                    <li>Terms of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Site Map</li>
                    <li>EPR Compliance</li>
                </ul>
           </div>
           <div className='col-xl-3 col-lg-4 col-sm-6 footer-column'>
                <h6 className="footer-list-heading">SOCIAL</h6>
                <ul className="footer-row1-lists">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>Linked In</li>  
                </ul>
           </div>
           </div>
        </div>
    )
}

export default Footer
