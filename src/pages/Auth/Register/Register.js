import React from 'react'
import "./Register.css"
import {useState} from 'react'

function Register() {
    const [user, setUser] = useState({})
    function handleFormSubmit(event) {
        console.log(user)
    }
    return (
        <div className='register-form'>
            <h4>Please Register.</h4>
            <hr></hr>
            <form onSubmit={handleFormSubmit} action=''>
                <div className='row name mb-1'>
                    <div className='col-6 px-2'>
                        <label className='form-label'>First Name</label>
                        <input 
                            type="text"
                            onInput = {(e) => {
                                user.firstName = e.target.value
                                setUser(user)
                            }}></input>
                    </div>
                    <div className='col-6 px-2'>
                        <label className='form-label'>Last Name</label>
                        <input 
                            type="text"
                            onInput = {(e) => {
                                user.lastName = e.target.value
                                setUser(user)
                            }}></input>
                    </div>
                </div>
                <div className='username-div px-2 mb-1'>
                    <label className='form-label'>Username</label>
                    <input 
                        type="text"
                        onInput = {(e) => {
                            user.username = e.target.value
                            setUser(user)
                        }}></input>
                </div>
                <div className='email-div px-2  mb-1'>
                    <label className='form-label'>Email</label>
                    <input 
                        type="email"
                        onInput = {(e) => {
                            user.email = e.target.value
                            setUser(user)
                        }}></input>
                </div>
                <div className='password-div px-2 mb-1'>
                    <label className='form-label'>Password</label>
                    <input 
                        type="password"
                        onInput = {(e) => {
                            user.password = e.target.value
                            setUser(user)
                        }}></input>
                </div>
                <div className='phone-div px-2 mb-1'>
                    <label className='form-label'>Phone</label>
                    <input 
                        type="number"
                        onInput = {(e) => {
                            user.phone = e.target.value
                            setUser(user)
                        }}></input>
                </div>
                <div className='row address mb-3'>
                    <label className='form-label address-label'>Address</label>
                    <div className='col-6 px-2'>
                        <input 
                            type="text"
                            placeholder='City'
                            onInput = {(e) => {
                                user.address ?
                                user.address.city = e.target.value
                                :
                                user.address = { city : e.target.value }
                                setUser(user)
                            }}></input>
                    </div>
                    <div className='col-6 px-2'>
                        <input 
                            type="text" 
                            placeholder='Street'
                            onInput = {(e) => {
                                user.address ?
                                user.address.street = e.target.value
                                :
                                user.address = { street : e.target.value }
                                setUser(user)
                            }}></input>
                    </div>
                    <div className='col-6 px-2 my-2'>
                        <input 
                            type="text" 
                            placeholder='Flat No'
                            onInput = {(e) => {
                                user.address ?
                                user.address.flatNo = e.target.value
                                :
                                user.address = { flatNo : e.target.value }
                                setUser(user)
                            }}></input>
                    </div>
                    <div className='col-6 px-2 my-2'>
                        <input 
                            type="text" 
                            placeholder='Zip Code'
                            onInput = {(e) => {
                                user.address ?
                                user.address.zipCode = e.target.value
                                :
                                user.address = { zipCode : e.target.value }
                                setUser(user)
                            }}></input>
                    </div>
                </div>
                <div className='submitDiv px-2 mb-2'>
                    <button type="submit" className='btn btn-success'>Regsiter</button>
                </div>
                <div className='gotologinDiv'>
                    <a href='' className='gotologin'>Already have an Account</a>
                </div>
                
            </form>
        </div>
    )
}

export default Register
