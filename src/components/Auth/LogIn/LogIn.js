import React from 'react'
import "./LogIn.css"
import {useState, useRef, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/reducers/userReducer'
import { setAuth } from '../../../redux/reducers/authReducer'

function LogIn() {
	const firstInput = useRef()
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [userLogin, setUserLogin] = useState({
		email: "",
		password: ""
	})

	const handleLogin = (e) => {
		e.preventDefault()
		console.log(user, userLogin)
		if(userLogin.email === user.email && userLogin.password === user.password){
			dispatch(setLogin(true))
			dispatch(setAuth(""))
			navigate("/")
		}else{
			return
		}
	}

	useEffect(() => {
        firstInput.current.focus()
    },[])

  	return (
    <div className='loginDiv'>
		<h4 className='sign-in mb-3'>Sign in</h4>
		<button
            className='login_div_close'
            onClick={() => {
                dispatch(setAuth(""))
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </button>
        <hr></hr>
		<form onSubmit={(e) => {
			handleLogin(e)
		}}>
			<div className='email-div px-2  mb-1'>
				<label className='form-label dark'>Email</label>
				<input 
					className='input'
					type="email"
					required
					ref={firstInput}
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
			<div className='submitDiv px-2 mb-2'>
				<input
					type="submit"
					className='btn btn-success'
					name='LogIn'
				/>
			</div>
		</form>
    </div>
  )
}

export default LogIn
