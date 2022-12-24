import React, {useState, useEffect, useCallback} from 'react'
import "./BannerCarousal.css"

function BannerCarousal({images}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevSlide = () =>  {
        if(currentIndex === 0){
            setCurrentIndex(images.length-1)
        }else{
            setCurrentIndex(currentIndex-1)
        }
    }

    const goToNextSlide = useCallback(() => {
        if(currentIndex === images.length-1){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex+1)
        }
    },[currentIndex, images.length])
    

    useEffect(() => {
        let slide = setInterval(function(){
            goToNextSlide()
        },4500)

        return () => {
            clearInterval(slide)
        }
    },[goToNextSlide])

    return (
        <div className='carousal'>
            <button 
                onClick={goToPrevSlide}
                className="prev-button control-btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
            </button>
            <div className='slides'>
            {
                images.map((image,index) => (
                    <img 
                        src={image} 
                        alt="" 
                        className='carousal-image'
                        key={index}
                        style={
                            {
                                width: "100%", 
                                transform: `translateX(calc(-${currentIndex}* 100%))`,
                                transition: "transform 900ms "
                            }
                        }
                    />
                ))  
            }
            </div>
            <button 
                onClick={goToNextSlide}
                className="next-button control-btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </button>
        </div>
    )
}

export default BannerCarousal
