import { useState, useEffect } from "react"
import ProductCard from "../../components/Home/ProductCard/ProductCard"
import Footer from "../../components/Shared/Footer/Footer"
import Header from "../../components/Shared/Header/Header"
import "./Home.css"

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json()
            }).then((res) => {
                res.forEach((o) => o.qty = 1)
                setProducts(res)
            })
    },[])

    return (
        <>
            <Header />
            <div className="row products-container">
                { products.length ? 
                    products.map((product) => (
                        <div className="CardWrapper col-xl-3 col-lg-4 col-sm-6" key = {product.id}>
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
        </>
    )
}

export default Home
