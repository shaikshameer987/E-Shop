import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="d-grid bg-secondary" style={{height: "100vh", placeItems: "center"}}>
        <div className='bg-light px-4 py-3 mx-4' style={{maxWidth: "510px", borderRadius: "20px"}}>
        <h2 className='mb-4'>Page Not Found</h2>
        <p className='mb-4' style={{fontSize: "15px"}}>The page you are looking for does not exist. Either you have followed a broken link or entered a URL
           that does not exist. 
        </p>
        <Link to="/" className="btn btn-primary" style={{fontSize: "14px"}}>Go TO HOME</Link>
        </div>
    </div>
  )
}

export default PageNotFound
