import React from 'react'
import "./LogIn.css"
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function LogIn() {
	const [userLogin, setUserLogin] = useState({})
	let navigate = useNavigate()
	function handleFormLogin() {
		navigate("/")
	}
  	return (
    <div className='loginDiv'>
		<div className='dummy'>
		<h4>Please SignIn.</h4>
        <hr></hr>
		<form onSubmit={handleFormLogin} action=''>
			<div className='username-div px-2 mb-1'>
				<label className='form-label'>Username</label>
				<input 
					type="text"
					onInput = {(e) => {
						userLogin.username = e.target.value
						setUserLogin(userLogin)
					}}></input>
			</div>
			<div className='email-div px-2  mb-1'>
				<label className='form-label'>Email</label>
				<input 
					type="email"
					onInput = {(e) => {
						userLogin.email = e.target.value
						setUserLogin(userLogin)
					}}></input>
			</div>
			<div className='password-div px-2 mb-4'>
				<label className='form-label'>Password</label>
				<input 
					type="password"
					onInput = {(e) => {
						userLogin.password = e.target.value
						setUserLogin(userLogin)
					}}></input>
			</div>   
			<div className='submitDiv px-2 mb-4'>
				<button type="submit" className='btn btn-success'>LogIn</button>
			</div>
			<div className='gotologinDiv'>
				<a href='/register' className='gotologin'>Dont have an Account</a>
			</div>  
		</form>   
		</div>
    </div>
  )
}

export default LogIn
