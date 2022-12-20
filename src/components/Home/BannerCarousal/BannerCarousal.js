import React from 'react'
import "./BannerCarousal.css"
import A from "../../../images/A.jpg"
import B from "../../../images/B.jpg"
import C from "../../../images/C.jpg"

function BannerCarousal() {

  return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{height: "maxcontent"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active banner-div">
                <img src={B} className="d-block w-100 h-100 banner" alt="..."/>
                </div>
                <div className="carousel-item banner-div">
                <img src={C} className="d-block w-100 h-100 banner" alt="..."/>
                </div>
                <div className="carousel-item banner-div">
                <img src={A} className="d-block w-100 h-100 banner" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev control-buttons" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next  control-buttons" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default BannerCarousal
