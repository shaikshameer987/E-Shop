import React from 'react'
import "./Register.css"
import { useNavigate } from "react-router-dom";
import {setName, setPhone, setEmail, setPassword} from "../../../redux/reducers/userReducer"
import { useDispatch, useSelector } from 'react-redux';
function Register() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function handleFormSubmit(event) {
        event.preventDefault()
        if(/\d/.test(user.name)){
            alert("Please dont include numbers in name")
            return 
        }
        let phone = user.phone
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
                            value={user.name}
                            placeholder='First and Last name'
                            onInput = {(e) => {
                                dispatch(setName(e.target.value))
                            }}></input>
                </div>
                <div className='phone-container marg'>
                    <label className='form-label'>Phone</label>
                    <input 
                        type="tel"
                        // required
                        maxLength="10"
                        value={user.phone}
                        placeholder='Mobile number'
                        onInput = {(e) => {
                            dispatch(setPhone(e.target.value))
                        }}></input>
                </div>
                <div className='email-container marg'>
                    <label className='form-label'>Email</label>
                    <input 
                        type="email"
                        required
                        value={user.email}
                        placeholder="xyz@gmail.com  "
                        onInput = {(e) => {
                            dispatch(setEmail(e.target.value))
                        }}></input>
                </div>
                <div className='password-container marg'>
                    <label className='form-label'>Password</label>
                    <input 
                        type="password"
                        required
                        value={user.password}
                        placeholder='Atleast 6 characters'
                        minLength="6"
                        onInput = {(e) => {
                            dispatch(setPassword(e.target.value))
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
