import React, {useState } from 'react'
import "./Checkout.css"
import Header from "../../components/Shared/Header/Header"
import CartItem from "../../components/CartItem/CartItem"
import { useSelector } from 'react-redux'

function Checkout() {
	const items = useSelector(state => state.cart.cartItems)
	const user = useSelector(state => state.user)
	const [bgcolour, setBgColour] = useState("address")
	const [notCollapsed, setnotCollapsed] = useState("address")
	const [addressSelect, setAddressSelect] = useState(false)
	const [paymentNotCollapsed, setpaymentNotCollapsed] = useState("")
	
	let totalAmout = 0
	let packingCharges = 50
	function totalPrice() {
		for(let i = 0; i < items.length; i++){
			totalAmout += items[i].price * items[i].qty
		}
	}
	totalPrice()
	return (
		<>
		<Header />
		<div className='checkout-page-container row'>
			<div className='container-left col-8'>
				<div className='login-check'>
					<div className = {bgcolour === "login" ? 'payment-headers background' : 'payment-headers'}>
						<span className='currentnumber'>1</span>
						<span>LOGIN</span>
					</div>
						{
							!(notCollapsed === "login") && 
							<button 
								className='py-1 px-2 change button'
								onClick={() => {
									setBgColour("login")
									setnotCollapsed("login")
								}}
							>CHANGE</button>
						}
					<div className='details mx-4 mt-2'>
						<span className='me-3'>{user.name}</span>
						<span>{user.phone}</span>
					</div>	
					<div className={notCollapsed === "login" ? "" : "collapse"}>	
					<div style={{display: "inline-block"}} className="ps-3">
						<button style={{display: "block"}} className="mt-3 ms-2 button">Logout</button>
						<button 
							className='mt-4 ms-2 button'
							onClick={() => {
								if(user.isLoggedin){
									setBgColour("address")
									setnotCollapsed("address")
								}
							}}
						>CONTINUE CHECKOUT</button>
					</div>
					</div>
				</div>
				<div className='address-check'>
					<div className = {bgcolour === "address" ? 'payment-headers background' : 'payment-headers'}>
						<span className='currentnumber'>2</span>
						<span>DELIVERY ADDRESS</span>
					</div>
					{
						!(notCollapsed === "address") 
						&& 
						<button 
							class="py-1 px-2 change button"
							onClick={() => {
								setBgColour("address")
								setnotCollapsed("address")
							}}
						>CHANGE</button>
					}
					{
						!(notCollapsed === "address") && 	
						<div className='ms-4'>
						<span className='me-3 '>{user.name}</span>
						<span>{user.phone}</span>
						<div className='address mt-2 me-2'>
							<small>{user.address.localAddress +" "+ user.address.city +" "+ user.address.state + " "} - {" " + user.address.pincode}</small>
						</div>
						</div>
					}
					<div className={notCollapsed === "address" ? "mt-3" : "collapse mt-3"}>
					{
					
					<div className='adress-selection'>
						<div className='mb-2'>
						<div style={{width: "70%", display: "inline-block"}}>
						<div className='d-flex align-items-start'>
							<input 
								type="radio" 
								className='me-3 mt-1'
								onChange={() => {
									setAddressSelect(true)
								}}
							/>
							<div>
								<span className='me-3'>{user.name}</span>
								<span>{user.phone}</span>
								<div className='address'>
									<small>{user.address.localAddress +" "+ user.address.city +" "+ user.address.state + " "} - {" " + user.address.pincode}</small>
									{/* <small>House No 8/41 Vikas Nagar</small> */}
								</div>
								<button 
									className='mt-3 button'
									onClick={() => {
										if(!addressSelect){
											alert("Please select address")
											return
										}
										setBgColour("summary")
										setnotCollapsed("summary")
									}}
								>DELIVER HERE</button>
							</div>
						</div>
						</div>
						<button className='edit-address button'>Edit</button>
						</div>
					</div>
					}
					<div className='d-flex justify-content-end'>
						<button className='mt-2 mb-2 me-4 button'>Add New Address</button>
					</div>
					</div>
				</div>
				<div className='order-summary'>
					<div className = {bgcolour === "summary" ? 'payment-headers background' : 'payment-headers'}>
						<span className='currentnumber'>3</span>
						<span>ORDER SUMMARY</span>
					</div>
					{
						!(notCollapsed === "summary") && 
						<div className='ms-5 mt-1'>
							{items.length} Items
						</div>

					}
					{
						!(notCollapsed === "summary") && 
						<button 
							className='py-1 px-2 change button'
							onClick={() => {
								setBgColour("summary")
								setnotCollapsed("summary")
							}}
						>CHANGE</button>
					}
					<div className={notCollapsed === "summary" ? "cart-item-margin" : "collapse mb-2 cart-item-margin"}>
					{	items.length > 0 && 
						items.map((item) => (
							<div  key = {item.id} className="mt-3">
								<CartItem item = {item}/>
							</div>
						))
					}
					<div className='d-flex justify-content-end mt-3' style={{width: "80%", margin: "auto"}}>
						<button 
							className='mt-2 button'
							onClick={() => {
								setBgColour("payment")
								setnotCollapsed("payment")
							}}
						>CONTINUE</button>
					</div>
					</div>
				</div>
				<div className='payment-options'>
					<div className = {bgcolour === "payment" ? 'payment-headers background' : 'payment-headers'}>
						<span className='currentnumber'>4</span>
						<span>PAYMENT OPTIONS</span>
					</div>
					<div className={notCollapsed === "payment" ? 'mt-3 pe-3' : "collapse mt-3"}>
					<div className='d-flex align-items-start mb-3'>
					<input 
						type="radio" 
						className='me-3 mt-1' 
						style={{marginLeft: "15px"}} 
						id="wallet" 
						name='payment-option'
						onChange={() => {
							setpaymentNotCollapsed("wallet")
						}}
					/>
					<div className='d-flex' style={{flexDirection: "column"}}>
						<label className='' htmlFor='wallet'>Wallets</label>
						{
							(paymentNotCollapsed === "wallet") && 
							<div className='wallets mt-3' style={{display: "inline-block"}}>
								<div className='mb-3'>
								<input type="radio" className='me-3' id='paytm' name="wallet-option"/>
								<label htmlFor='paytm'>Paytm Wallet</label>
								<div className='paytm-wallet'>
									<input type="number" className='me-3 mt-3 px-2 py-1 modify-input' placeholder='Enter Your Number'/>
									<button className='button mt-3'>CONTINUE</button>
								</div>
								</div>
								<div className='mb-3'>
								<input type="radio" className='me-3'  id='phonepe' name="wallet-option"/>
								<label htmlFor='phonepe'>PhonePay Wallet</label>
								<div className='paytm-wallet'>
									<input type="number" className='me-3 mt-3 px-2 py-1 modify-input' placeholder='Enter Your Number'/>
									<button className='button mt-3'>CONTINUE</button>
								</div>
								</div>
							</div>
						}
					</div>
					</div>
					<div className='d-flex align-items-start mb-3'>
					<input 
						type="radio" 
						className='me-3 mt-1' 
						style={{marginLeft: "15px"}} 
						id='card-payment' 
						name='payment-option' 
						onChange={() => {
							setpaymentNotCollapsed("card")
						}}
					/>
					<div className='d-flex' style={{flexDirection: "column"}}>
					<label style={{display: "block"}} htmlFor="card-payment">Credit / Debit / ATM Card</label>
					{
						(paymentNotCollapsed === "card") && 
						<div>
							<input type="number" placeholder='Enter Card Number' className='px-2 mb-3 mt-2 modify-input'/>
							<div className='d-flex' style={{flexWrap: "wrap"}}>
								<div className='card-valid me-3 mb-3'>
									<span className='me-3'>Valid Thru</span>
									<select className='card-month me-3'>
											<option>MM</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
									</select>
									<select className='card-year'>
											<option>YY</option>
											<option>22</option>
											<option>23</option>
											<option>24</option>
											<option>25</option>
											<option>26</option>
											<option>27</option>
											<option>28</option>
											<option>29</option>
											<option>30</option>
											<option>31</option>
											<option>32</option>
											<option>33</option>
									</select>
								</div>
								<div className="cvv mb-3">
									<input type="number" style={{width: "90px"}} placeholder="CVV" className='px-2 modify-input'/>
								</div>
							</div>
							<button className='mt-1 button'>PAY 200000</button>
						</div>	
					}
					</div>
					</div>
					<div className='d-flex align-items-start mb-3'>
					<input 
						type="radio" 
						className='me-3 mt-1' 
						style={{marginLeft: "15px"}} 
						id="emi" 
						name='payment-option'
						onChange={() => {
							setpaymentNotCollapsed("emi")
						}}
					/>
					<div className='d-flex' style={{flexDirection: "column"}}>
						<label htmlFor='emi'>EMI (Easy Installments)</label>
						{
							(paymentNotCollapsed === "emi") && 
							<div className='mt-3'>
								<div>
									<p>Pay in easy monthly installments from any of the options below</p>
									<div className='p-2 credit-card'>
										+ CREDIT CARD EMI
									</div>
								</div>
							</div>
						}
					</div>
					</div>
					<div className='d-flex align-items-start'>
					<input 
						type="radio" 
						className='me-3 mt-1' 
						style={{marginLeft: "15px"}}  
						id="cod" 
						name='payment-option'
						onChange={() => {
							setpaymentNotCollapsed("cod")
						}}
					/>
					<div>
						<label htmlFor='cod'>Cash On Delivery</label>
					</div>
					</div>
					<div className='place-order-div p-3 d-flex justify-content-end'>
					<button className='button'>PLACE ORDER</button>
				</div>
				</div>
			</div>
			</div>
			<div className='container-right col-4'>
				<div className='px-4 pb-2 price-details-div pt-3' style={{textAlign: "center"}}>
					<h5 className='mb-4'>PRICE DETAILS</h5>
					<div className='d-flex mt-2 mb-2 justify-content-between'>
						<p>Price ({items.length} Items)</p>
						<p>{totalAmout}</p>
					</div>
					<div className='d-flex mt-2 mb-2 justify-content-between'>
						<p>Delivery Charges</p>
						<p>Free</p>
					</div>
					<div className='d-flex mt-2 mb-2 justify-content-between'>
						<p>Packing Charges</p>
						<p>{packingCharges}</p>
					</div>
					<hr></hr>
					<div className='d-flex mt-4 mb-2 justify-content-between'>
						<p>Amount Payable</p>
						<p>{totalAmout + packingCharges}</p>
					</div>
				</div>
			</div>
		</div>
		</>
    )
}

export default Checkout
