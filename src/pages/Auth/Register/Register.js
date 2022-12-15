import React from 'react'
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useUser } from '../../../Context/UserContext';

function Register() {
    
    const {user, dispatch} = useUser() 
    const {name, phone, email, password} = user
    const navigate = useNavigate()
    
    function handleFormSubmit(event) {
        event.preventDefault()
        if(/\d/.test(name)){
            alert("Please dont include numbers in name")
            return 
        }
        for(let i = 0; i < phone.length; i++){
            if(isNaN(+phone[i])){
                alert("Please enter a valid phone number")
                return
            } 
        }
        navigate("/login")
    }
    
    return (
        <div className='register-form'>
            <h4>Create Account</h4>
            <hr className='register-hr'></hr>
            <form onSubmit={handleFormSubmit} action=''>
                <div className='name'>
                        <label className='form-label'>Your name</label>
                        <input 
                            type="text"
                            // required
                            value={name}
                            placeholder='First and Last name'
                            onInput = {(e) => {
                                dispatch({type: "name", payload : e.target.value})
                            }}></input>
                </div>
                <div className='phone-container marg'>
                    <label className='form-label'>Phone</label>
                    <input 
                        type="tel"
                        // required
                        maxLength="10"
                        value={phone}
                        placeholder='Mobile number'
                        onInput = {(e) => {
                            dispatch({type: "phone", payload : e.target.value})
                        }}></input>
                </div>
                <div className='email-container marg'>
                    <label className='form-label'>Email</label>
                    <input 
                        type="email"
                        required
                        value={email}
                        placeholder="xyz@gmail.com  "
                        onInput = {(e) => {
                            dispatch({type: "email", payload : e.target.value})
                        }}></input>
                </div>
                <div className='password-container marg'>
                    <label className='form-label'>Password</label>
                    <input 
                        type="password"
                        required
                        value={password}
                        placeholder='Atleast 6 characters'
                        minLength="6"
                        onInput = {(e) => {
                            dispatch({type: "password", payload : e.target.value})
                        }}></input>
                </div>
                <div className='button-container marg'>
                    <button type="submit" className='btn btn-success'>Register</button>
                </div>
                <div className='gotologinDiv marg'>
                    <a href='/login' className='gotologin'>Already have an Account</a>
                </div>
            </form>
        </div>
    )
}

export default Register
