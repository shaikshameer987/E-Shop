import React, { useState, useEffect, useRef } from 'react'
import "./Register.css"
import { setUser} from "../../../redux/reducers/userReducer"
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/reducers/authReducer';

function Register() {

    const [registerUser, setRegisterUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })
    const firstInputRef = useRef()
    const dispatch = useDispatch()

    function handleFormSubmit(event) {
        event.preventDefault()
        if(/\d/.test(registerUser.name)){
            return
        }
        let phone = registerUser.phone
        for(let i = 0; i < phone.length; i++){
            if(isNaN(+phone[i])){
                return
            }
        }
        dispatch(setUser(registerUser))
        dispatch(setAuth("login"))
    }
    useEffect(() => {
        firstInputRef.current.focus()
    },[])

    return (
        <div className='register-page'>
            <div className='register-form' onKeyDown={(e) => {
                // handleKeyDown(e)
            }}>
                <h4>Create Account</h4>
                <button
                    className='register_div_close'
                    onClick={() => {
                        dispatch(setAuth(""))
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
                <hr className='register-hr'></hr>
                <form onSubmit={(e) => {
                    handleFormSubmit(e)
                }}>
                    <div className='name'>
                        <label className='form-label'>Your name</label>
                        <input
                            className='register_input'
                            type="text"
                            required
                            ref={firstInputRef}
                            value={registerUser.name}
                            placeholder='First and Last name'
                            onChange = {(e) => {
                                setRegisterUser({...registerUser, name: e.target.value})
                            }}
                        />
                    </div>
                    <div className='phone-container marg'>
                        <label className='form-label'>Phone</label>
                        <input
                            type="tel"
                            required
                            className='register_input'
                            maxLength="10"
                            value={registerUser.phone}
                            placeholder='Mobile number'
                            onChange = {(e) => {
                                setRegisterUser({...registerUser, phone: e.target.value})
                            }}
                        />
                    </div>
                    <div className='email-container marg'>
                        <label className='form-label'>Email</label>
                        <input
                            type="email"
                            required
                            className='register_input'
                            value={registerUser.email}
                            placeholder="xyz@gmail.com  "
                            onChange = {(e) => {
                                setRegisterUser({...registerUser, email: e.target.value})
                            }}
                        />
                    </div>
                    <div className='password-container marg'>
                        <label className='form-label'>Password</label>
                        <input
                            type="password"
                            required
                            className='register_input'
                            value={registerUser.password}
                            placeholder='Atleast 6 characters'
                            minLength="6"
                            onChange = {(e) => {
                                setRegisterUser({...registerUser, password: e.target.value})
                            }}
                        />
                    </div>
                    <div className='button-container marg'>
                        <button type='submit' className='btn btn-success'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
