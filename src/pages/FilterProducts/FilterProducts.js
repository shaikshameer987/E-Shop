import React, { } from 'react'
import Header from '../../components/Shared/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/Home/ProductCard/ProductCard'
import "./FilterProducts.css"
import { useSearch } from '../../Context/SearchContent'
import { useFilteredProducts } from '../../Context/FilterContext'
import Footer from '../../components/Shared/Footer/Footer'

function FilterProducts() {
	const {state, dispatch} = useFilteredProducts()
	const {filteredProducts, sort, minPrice, maxPrice} = state
	const {searchValue} = useSearch()

	let prods = []
	let brands = []
	let sizes = []

	function filterProducts() {
		prods = [...filteredProducts]
		const brandsObj = {}
		const sizesObj = {}
		for(let i = 0; i < prods.length; i++){
			brandsObj[filteredProducts[i].brand] = 1
			sizesObj[filteredProducts[i].size] = 1
		}
		brands = Object.keys(brandsObj)
		sizes = Object.keys(sizesObj)
		if(state.brands.length){
			prods = prods.filter((item) => state.brands.includes(item.brand))
		}
		if(state.size.length) {
			prods = prods.filter((item) => state.size.includes(item.size))
		}
		prods = prods.filter((item) => item.price >= minPrice && item.price <= maxPrice)		
		if(state.sort){
			if(state.sort === "Price: Low to High"){
				prods.sort((a,b) => a.price - b.price)
			}else{
				prods.sort((a,b) => b.price - a.price)
			}
		}
	}
	filterProducts()

	return (
		<div className='category-div'>
			<Header />
			<Navbar />
			<div className='products-div d-flex'>
				<div className='filter-div'>
					<div className='sort-div'>
						<h4 className='filter-header'>Filters</h4>
						<hr></hr>
						<h6 className='py-1'>Sort by Price</h6>
						<select 
							className='sort-dropdown'
							value={sort}
							onChange={(e) => {
								let option = e.target.value
								dispatch({type: "sort", payload: option})
							}}
						>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
						</select>
					</div>
					<div className='pricerange-div'>
						<h6 className='pricerange mb-3'>Price Range</h6>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 0, maxPrice: 1000})
							}}
						>Under ₹1,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 1000, maxPrice: 5000})
							}}	
						>₹1,000 - ₹5,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 5000, maxPrice: 10000})
							}}	
						>₹5,000 - ₹10,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 10000, maxPrice: 20000})
							}}	
						>₹10,000 - ₹20,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 20000, maxPrice: Infinity})
							}}
						>Over ₹20,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch({type: "pricerange", minPrice: 0, maxPrice: Infinity})
							}}
						>Clear Filter</button>
						
					</div>
					<div className='brands-div'>
						<h6 className='py-1'>BRAND	</h6>
						<ul className='brands-list'>
							{
								brands.map((item) => (
									<li key = {item} className="d-flex align-items-center">{
										<>
										<input 
											style={{width: "max-content", marginRight: "20px"}} 
											type="checkbox"
											id={item}
											onClick={(e) => {
												if(e.target.checked){
													dispatch({type : "addbrand", payload: item})
												}else{
													dispatch({type : "removebrand", payload: item})
												}
											}}
										>
										</input>
										<label htmlFor={item}>{item}</label>
										</>
									}</li>
								))
							}
						</ul>
					</div>
					{
						filteredProducts.length >= 1 && filteredProducts[0].category.includes("clothing") && 
						<div className='size-div'>
							<h6 className='py-1'>SIZE</h6>
							<ul className='size-list'>
								{
									sizes.map((size,index) => (
										size !== "undefined" && 	
										<li key = {index} className="d-flex align-items-center">
											{
											<>
											<input 
												style={{width: "max-content", marginRight: "20px"}} 
												type="checkbox"
												id={index}
												onClick={(e) => {
													if(e.target.checked){
														dispatch({type : "addsize", payload: +size})
													}else{
														dispatch({type : "removesize", payload: +size})
													}
												}}
											>
											</input>
											<label htmlFor={index}>{size}</label>
											</>
											}
										</li>
									))
								}
							</ul>
						</div> 
					}
				</div>
				<div className='row category-products'>
					{prods.length >= 1 
						&&
						prods.filter((item) => {
							return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
						}) 
						.map((product) => (
							<div className="CardWrapper col-lg-4 col-sm-6" key = {product.id}>
								<ProductCard item = {product} />
							</div>
						))
					}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default FilterProducts
