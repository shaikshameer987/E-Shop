import React from 'react'
import Header from '../../components/Shared/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/Home/ProductCard/ProductCard'
import "./FilterProducts.css"
import { useSearch } from '../../Context/SearchContent'
import { useFilteredProducts } from '../../Context/FilterContext'
import Footer from '../../components/Shared/Footer/Footer'

function FilterProducts() {
	const {state, dispatch} = useFilteredProducts()
	const {filteredProducts} = state
	const {searchValue} = useSearch()
	// console.log(filteredProducts)
	return (
		<div className='category-div'>
			<Header />
			<Navbar />
			<div className='products-div d-flex'>
				<div className='filter-div'>
					<div className='pricerange-div bg-light p-2 d-flex justify-content-center'>
						<select 
							className='sort-dropdown'
							onChange={(e) => {
								let option = e.target.value
								dispatch({type: "sort", payload: option})
							}}
						>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
						</select>
					</div>
				</div>
				<div className='row category-products'>
					{filteredProducts.length 
						?
						filteredProducts.filter((item) => {
							return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
						}) 
						.map((product) => (
							<div className="CardWrapper col-lg-4 col-sm-6" key = {product.id}>
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
			</div>
			<div className='footer-dummy'>
				<Footer />
			</div>
		</div>
	)
}

export default FilterProducts
