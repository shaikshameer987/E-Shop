import React from 'react'
import "./LogIn.css"
import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/reducers/userReducer'

function LogIn() {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [userLogin, setUserLogin] = useState({})
	
	const handleLogin = (event) => {
		event.preventDefault()
		if(userLogin.email === user.email && userLogin.password === user.password){
			dispatch(setLogin(true))
			navigate("/")
		}else{
			alert("Username or Password Incorrect")
			return
		}
	}

  	return (
    <div className='loginDiv'>
		<h4 className='sign-in mb-3'>Sign in</h4>
        <hr></hr>
		<form action=''>
			<div className='email-div px-2  mb-1'>
				<label className='form-label dark'>Email</label>
				<input 
					className='input'
					type="email"
					required
					onInput = {(e) => {
						setUserLogin({...userLogin, email : e.target.value})
					}}></input>
			</div>
			<div className='password-div px-2 mb-4'>
				<label className='form-label dark'>Password</label>
				<input 
					type="password"
					className='input'
					required
					onInput = {(e) => {
						setUserLogin({...userLogin, password : e.target.value})
					}}></input>
			</div>   
			<div className='submitDiv px-2 mb-4'>
				<button 
					type="submit" 
					className='btn btn-success'
					onClick={handleLogin}
				>LogIn</button>
			</div>
			<div className='gotologinDiv'>
				<Link to='/register' className='gotologin'>Dont have an Account</Link>
			</div>  
		</form>   
    </div>
  )
}

export default LogIn
