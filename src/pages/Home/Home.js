import Header from "../../components/Shared/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/Home/ProductCard/ProductCard"
import Footer from "../../components/Shared/Footer/Footer"
import "./Home.css"
import { useSearch } from "../../Context/SearchContent"
import { useProducts } from "../../Context/ProductsContext"

function Home() {
    const {products} = useProducts()
    const {searchValue} = useSearch()

    return (
        <>
        <Header />
        <Navbar />
        <div className="home-page">
            <div className="row products-container">
                {products.length ?
                    products.filter((item) => {
                        return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
                    }) 
                    .map((product) => (
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
        </div>
        </>
    )
}

export default Home
