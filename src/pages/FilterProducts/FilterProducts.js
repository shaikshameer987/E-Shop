import React, { useEffect, useState} from 'react'
import Header from '../../components/Shared/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import "./FilterProducts.css"
import Footer from '../../components/Shared/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { category, fetchProducts } from '../../redux/reducers/filterReducer'
import {setSearchValue} from "../../redux/reducers/searchReducer"
import { useLocation } from 'react-router-dom'
import {sort, pricerange, addbrand, removebrand, addsize, removesize} from "../../redux/reducers/filterReducer"
import Register from '../../components/Auth/Register/Register'
import LogIn from '../../components/Auth/LogIn/LogIn'

function FilterProducts() {
	const authToOpen = useSelector(state => state.auth.value)
	const filterState = useSelector(state => state.filter)
	const {filteredProducts, sort: sortValue, minPrice, maxPrice, brands: prevBrands, size: prevSize} = filterState
	const searchValue = useSelector((state => state.search.value))
	const [collapsebool, setCollpasebool] = useState(false)
	const [filterbuttonbool, setFilterbuttonbool] = useState(false)
	const location = useLocation()
	const dispatch = useDispatch()
 
	useEffect(() => {
		function handleWindowResize() {
			const {innerWidth} = window
			if(innerWidth <= 550){
				setCollpasebool(true)
				setFilterbuttonbool(true)
			}else{
				setCollpasebool(false)
				setFilterbuttonbool(false)
			}
		}
		handleWindowResize()
		window.addEventListener("popstate", function() {
			dispatch(setSearchValue(""))
			dispatch(category(null))
		})
	},[dispatch])

	useEffect(() => {
		if(filteredProducts.length === 0){
			dispatch(fetchProducts())
		}
		if(location.pathname === "/filterproducts" && filterState.category === null){
			dispatch(category("all"))
		}
	})

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
		if(prevBrands.length){
			prods = prods.filter((item) => prevBrands.includes(item.brand))
		}
		if(prevSize.length) {
			prods = prods.filter((item) => prevSize.includes(item.size))
		}
		prods = prods.filter((item) => item.price >= minPrice && item.price <= maxPrice)		
		if(sort){
			if(sortValue === "Price: Low to High"){
				prods.sort((a,b) => a.price - b.price)
			}else{
				prods.sort((a,b) => b.price - a.price)
			}
		}
	}
	filterProducts()

	return (
		<div className='category-div'>
			<Header/>
			<Navbar />
			{
				filterbuttonbool &&	
				<div className='filterbutton-div'>
					<button 
						className='filter-toggler'
						onClick={() => {
							setFilterbuttonbool(!filterbuttonbool)
							setCollpasebool(!collapsebool)
						}}
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-funnel-fill funnel" viewBox="0 0 16 16">
							<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
					</svg>
					<small><b>Filter</b></small>
					</button>
				</div>
			}
			<div className='products-div'>
				<div className={collapsebool ? "filter-div collapse" : "filter-div"}>
					<div className='sort-div'>
						<span className='filter-header'>Filters</span>
						{
							!collapsebool &&
							<button
								className='filter-close'
								onClick={() => {
									setFilterbuttonbool(!filterbuttonbool)
									setCollpasebool(!collapsebool)
								}}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
									<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
								</svg>
							</button>
						}
						<hr></hr>
						<h6 className='py-1'>Sort by Price</h6>
						<select 
							className='sort-dropdown'
							value={sortValue}
							onChange={(e) => {
								let option = e.target.value
								dispatch(sort(option))
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
								dispatch(pricerange({minPrice: 0, maxPrice: 1000}))
							}}
						>Under ₹1,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch(pricerange({minPrice: 1000, maxPrice: 5000}))
							}}	
						>₹1,000 - ₹5,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch(pricerange({minPrice: 5000, maxPrice: 10000}))
							}}	
						>₹5,000 - ₹10,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch(pricerange({minPrice: 10000, maxPrice: 20000}))
							}}	
						>₹10,000 - ₹20,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch(pricerange({minPrice: 20000, maxPrice: Infinity}))
							}}
						>Over ₹20,000</button>
						<button 
							className='pricerange-buttons'
							onClick={() => {
								dispatch(pricerange({minPrice: 0, maxPrice: Infinity}))
							}}
						>Clear Price Range</button>
						
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
													dispatch(addbrand(item))
												}else{
													dispatch(removebrand(item))
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
														dispatch(addsize(+size))
													}else{
														dispatch(removesize(+size))
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
				<div className=' category-products'>
					{prods.length >= 1 
						&&
						prods.filter((item) => {
							return searchValue === "" || item.title.toLowerCase().includes(searchValue.toLowerCase()) ? item : null
						}) 
						.map((product) => (
							<div className="cardwrapper col-lg-4 col-md-6" key = {product.id}>
								<ProductCard item = {product} />
							</div>
						))
					}
				</div>
			</div>
			<Footer />
			<>
				{
					authToOpen !== "" &&
					<div className="auth_filter_container_outer">
						<div className="auth_filter_container_inner">
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

export default FilterProducts
