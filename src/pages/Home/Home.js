import Header from "../../components/Shared/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import BannerCarousal from "../../components/Home/BannerCarousal/BannerCarousal"
import ProductCard from "../../components/Home/ProductCard/ProductCard"
import Footer from "../../components/Shared/Footer/Footer"
import "./Home.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../redux/reducers/productsReducer"
import { useEffect } from "react"

function Home() {
    const products = useSelector(state => state.products.products)
    const searchValue = useSelector(state => state.search.value)
    const dispatch = useDispatch()

    useEffect(() => {
        if(products.length === 0){
            console.log("fetching all products")
            dispatch(fetchProducts())
        }
        
    },[])

    return (
        <>
        <Header />
        <Navbar />
        <BannerCarousal />
        <div className="home-page">
            <div className="row products-container">
                {products.length ?
                    products.filter((item) => {
                        return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
                    }) 
                    .map((product) => (
                        <div className="cardwrapper col-xl-3 col-lg-4 col-6" key = {product.id}>
                            <ProductCard item = {product} />
                        </div>
                    ))
                    :
                    <div className="d-flex align-items-center justify-content-center p-3">
                        <span className="loading">Loading Products..</span>
                        &nbsp;&nbsp;&nbsp;
                        <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                </div>
            <Footer />
        </div>
        </>
    )
}

export default Home
