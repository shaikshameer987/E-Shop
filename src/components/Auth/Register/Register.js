import React, { useEffect, useRef } from 'react'
// import {useState} from 'react'
import "./Register.css"
import {setName, setPhone, setEmail, setPassword} from "../../../redux/reducers/userReducer"
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../redux/reducers/authReducer';
// import Modal from '../../../components/Modal/Modal';

function Register() {

    const firstInputRef = useRef()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
        // const [modal, setModal] = useState({
        //     title: "",
        //     description: ""
        // }

    function handleFormSubmit(event) {
        event.preventDefault()
        if(/\d/.test(user.name)){
            // setModal({
            //     title: "Invalid Name",
            //     description: "Please inlcude only alphabets in the name",
            //     show: true
            // })
            // let btn = document.getElementById("modaltoggler")
            // btn.click()
            return 
        }
        let phone = user.phone
        for(let i = 0; i < phone.length; i++){
            if(isNaN(+phone[i])){
                // setModal({
                //     title: "Invalid Phone Number",
                //     description: "Please enter a valid Phone Number",
                // })
                // let btn = document.getElementById("modaltoggler")
                // btn.click()
                return
            }
        }
        dispatch(setAuth("login"))
    }
    useEffect(() => {
        firstInputRef.current.focus()
    },[])

    return (
        <div className='register-page'>
            {/* <Modal  modal={modal}/> */}
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
                            required
                            className='register_input'
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
                            className='register_input'
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
                            className='register_input'
                            value={user.password}
                            placeholder='Atleast 6 characters'
                            minLength="6"
                            onInput = {(e) => {
                                dispatch(setPassword(e.target.value))
                            }}></input>
                    </div>
                    <div className='button-container marg'>
                        <button type='submit' className='btn btn-success'>
                            Register
                        </button>
                    </div>
                    <div className='gotoregisterDiv marg'>
                        <button 
                            className='gotoregister'
                            onClick={() => {
                                dispatch(setAuth("login"))
                            }}
                        >
                            Already have an Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
