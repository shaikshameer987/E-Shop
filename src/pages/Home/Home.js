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

    function updateCartItemCount() {
        setProducts([...products])
    }
    return (
        <>
            <Header />
            <div className="row products-container">
                {products.map((product) => (
                        <div className="CardWrapper col-xl-3 col-lg-4 col-sm-6" key = {product.id}>
                            <ProductCard item = {product} updateCount = {updateCartItemCount}/>
                        </div>
                ))}
                </div>
            <Footer />
        </>
    )
}

export default Home