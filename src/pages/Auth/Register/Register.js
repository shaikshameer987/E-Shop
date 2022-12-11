import React from 'react'
import "./Register.css"
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../../Context/UserContext';

function Register() {
    
    const {user, dispatch} = useUser() 
    const [regUser, setRegUser] = useState({})
    const navigate = useNavigate()
    
    function handleFormSubmit(event) {
        event.preventDefault()
        if(/\d/.test(regUser.name)){
            alert("Please dont include numbers in name")
            return 
        }
        console.log({...user, ...regUser})
        dispatch({type : "ADD_USER", payload: {...user, ...regUser}})
        navigate("/login")
    }
    
    return (
        <div className='register-form'>
            <h4>Create Account</h4>
            <hr></hr>
            <form onSubmit={handleFormSubmit} action=''>
                <div className='name'>
                        <label className='form-label'>Your name</label>
                        <input 
                            type="text"
                            // required
                            placeholder='First and Last name'
                            onInput = {(e) => {
                                regUser.name = e.target.value
                                setRegUser(regUser)
                            }}></input>
                </div>
                <div className='phone-container marg'>
                    <label className='form-label'>Phone</label>
                    <input 
                        type="tel"
                        // required
                        maxLength="10"
                        placeholder='Mobile number'
                        onInput = {(e) => {
                            regUser.phone = e.target.value
                            setRegUser(regUser)
                        }}></input>
                </div>
                <div className='email-container marg'>
                    <label className='form-label'>Email</label>
                    <input 
                        type="email"
                        required
                        onInput = {(e) => {
                            regUser.email = e.target.value
                            setRegUser(regUser)
                        }}></input>
                </div>
                <div className='password-container marg'>
                    <label className='form-label'>Password</label>
                    <input 
                        type="password"
                        required
                        placeholder='Atleast 6 characters'
                        minLength="6"
                        onInput = {(e) => {
                            regUser.password = e.target.value
                            setRegUser(regUser)
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
