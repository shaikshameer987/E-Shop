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
                setProducts(res)
            })
    })
    return (
        <>
            <Header />
            <div className="row products-container">
                {products.map((product) => (
                        <div className="CardWrapper col-3" key = {product.id}>
                            <ProductCard product = {product}/>
                        </div>
                ))}
                </div>
            <Footer />
        </>
    )
}

export default Home