import React from 'react'
import "./LogIn.css"
import {useState} from 'react'
import { useUser } from '../../../Context/UserContext'
import {useNavigate} from "react-router-dom"

function LogIn() {

	const navigate = useNavigate()
	const [userLogin, setUserLogin] = useState({})
	const {user, dispatch} = useUser()
	const handleLogin = (event) => {
		event.preventDefault()
		if(userLogin.email === user.email && userLogin.password === user.password){
			dispatch({type : "loggedin"})
			navigate("/")
		}else{
			alert("Username or Password Incorrect")
			return
		}
	}

  	return (
    <div className='loginDiv'>
		<h4 className='sign-in'>Sign in</h4>
        <hr></hr>
		<form action=''>
			<div className='email-div px-2  mb-1'>
				<label className='form-label dark'>Email</label>
				<input 
					type="email"
					onInput = {(e) => {
						setUserLogin({...userLogin, email : e.target.value})
					}}></input>
			</div>
			<div className='password-div px-2 mb-4'>
				<label className='form-label dark'>Password</label>
				<input 
					type="password"
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
				<a href='/register' className='gotologin'>Dont have an Account</a>
			</div>  
		</form>   
    </div>
  )
}

export default LogIn
