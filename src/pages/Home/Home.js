import Header from "../../components/Shared/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import BannerCarousal from "../../components/BannerCarousal/BannerCarousal"
import ProductCard from "../../components/ProductCard/ProductCard"
import Footer from "../../components/Shared/Footer/Footer"
import "./Home.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../redux/reducers/productsReducer"
import { useEffect} from "react"
import A from "../../images/A.jpg"
import B from "../../images/B.jpg"
import C from "../../images/C.jpg"
import Register from "../../components/Auth/Register/Register"
import LogIn from "../../components/Auth/LogIn/LogIn"

function Home() {
    const authToOpen = useSelector(state => state.auth.value)
    const products = useSelector(state => state.products.products)
    const searchValue = useSelector(state => state.search.value)
    const dispatch = useDispatch()
    let images = [B,A,C]

    useEffect(() => {
        if(products.length === 0){
            dispatch(fetchProducts())
        }
    })

    return (
        <div style={{height: authToOpen === "" ? "100%" : "100vh", overflow: authToOpen === "" ? "" : "hidden"}}> 
        <Header/>
        <Navbar />
        <BannerCarousal images = {images}/>
        <div className="home-page">
            <div className="row home-products-container">
                {products.length ?
                    products.filter((item) => {
                        return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
                    })
                    .map((product) => (
                        <div className="home-cardwrapper col-xl-3 col-lg-4 col-sm-6 col-12" key = {product.id}>
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
        <>
            {
                authToOpen !== "" &&
                <div className="auth_container_outer">
                    <div className="auth_container_inner">
                        {
                            authToOpen === "register"
                            ?
                            <Register/>
                            :
                            <LogIn/>
                        }
                    </div>
                </div>
            }
        </>
        </div>
    )
}

export default Home
