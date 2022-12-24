import React, {useState} from 'react'
import "./MyProfile.css"
import Header from "../../components/Shared/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { setName, setGender, setEmail, setPhone } from '../../redux/reducers/userReducer'

function Myprofile() {
	const [personalInfoEdit, setPersonalInfoEdit] = useState(false)
	const [emailInfoEdit, setEmailInfoEdit] = useState(false)
	const [mobileInfoEdit, setMobileInfoEdit] = useState(false)
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)

	return (
		<>
		<Header />
		<Navbar />
		<div className='my-profile d-flex'>

			<div className='profile-image-div'>
					<img 
						className='profile-pic-image'
						alt="" 
						src={user.profilepic !== "" ? user.profilepic : "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="}
					/>
				</div>
			<div className='d-flex details-container' style={{flexGrow: "1"}}>  
				<div style={{minWidth: "270px"}} className="col-4 detail">
				<div className='text d-flex align-items-center mt-3 mb-1 ms-4'>
					<h5 className='m-0'>Personal Information</h5>
					<button 
						className='ms-2 profile-edit'
						onClick={(e) => {
							setPersonalInfoEdit(!personalInfoEdit)
						}}
					>
						{personalInfoEdit ? "Save" : "Edit"}
					</button>
				</div>
				<div className='d-flex'>
				<input 
						value={user.name} 
						disabled={personalInfoEdit ? "" : true} 
						className='name-input mt-3 mb-1 ms-4 me-3 px-2'
						placeholder='Full Name'
						onChange={(e) => {
							if(personalInfoEdit){
								dispatch(setName(e.target.value))
							}
						}}
					/>
				</div>
				<p className='mt-3 mb-1 ms-4'>Your Gender</p>
				<div className='gender-info mt-2 mb-1 ms-4 d-flex align-items-center'>
					<input 
						type="radio" 
						style={{width: "max-content"}} 
						id="male" 
						name="gender" 
						className='me-2'
						disabled={personalInfoEdit ? "" : true} 
						checked= {user.gender === "male" ? true : false}
						onClick={() => {
							dispatch(setGender("male"))
						}}
					/>
					<label htmlFor='male' className='me-3'>
						<span  disabled={personalInfoEdit ? "" : true}>Male</span>
					</label>
					<input 
						type="radio" 
						style={{width: "max-content"}} 
						id="female" 
						name="gender" 
						className='me-2'
						disabled={personalInfoEdit ? "" : true} 
						checked= {user.gender === "female" ? true : false}
						onClick={() => {
							dispatch(setGender("female"))
						}}
					/>
					<label htmlFor='female' className='me-3'>
						<span  disabled={personalInfoEdit ? "" : true}>Female</span>
					</label>
				</div>
				</div>
				<div style={{minWidth: "270px"}} className="col-4 detail">
				<div className='text d-flex align-items-center mt-3 mb-1 ms-4'>
					<h5 className='m-0'>Email</h5>
					<button 
						className='ms-2 profile-edit'
						onClick={() => {
							setEmailInfoEdit(!emailInfoEdit)
						}}
					>
						{emailInfoEdit ? "Save" : "Edit"}
					</button>
				</div>
				<div className='d-flex'>
				<input 
					value={user.email} 
					disabled={emailInfoEdit ? "" : true} 
					className='email-input mt-3 mb-1 ms-4 me-3 px-2'
					onChange={(e) => {
						if(emailInfoEdit){
							dispatch(setEmail(e.target.value))
						}
					}}
				/>
				</div>
				</div>
				<div style={{minWidth: "270px"}} className="col-4 detail">
				<div className='text d-flex align-items-center mt-3 mb-1 ms-4'>
					<h5 className='m-0'>Mobile Number</h5>
					<button 
						className='ms-2 profile-edit'
						onClick={() => {
							setMobileInfoEdit(!mobileInfoEdit)
						}}
					>
						{mobileInfoEdit ? "Save" : "Edit"}
					</button>
				</div>
				<div className='d-flex'>
				<input 
					value={user.phone} 
					minLength="10"
					disabled={mobileInfoEdit ? "" : true}
					className='phone-input mt-3 mb-1 ms-4 me-3'
					onChange={(e) => {
						if(mobileInfoEdit){
							dispatch(setPhone(e.target.value))
						}
					}}
				/>
				</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Myprofile
