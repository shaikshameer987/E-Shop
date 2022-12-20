import React from 'react'
import "./Modal.css"

function Modal(props) {
    return (
        <div className='modal-outer-container' tabIndex="-1">
            <div className="modal-inner-container" style={{pointerEvents: `${props.show ? "auto" : "none"}`}}>
                <div className="modal-box" style={{pointerEvents:"auto"}}>
                    <div className="modal-top d-flex justify-content-between">
                        <h5 className="mb-3">{props.modal.title}</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => {
                                props.setModal({
                                    title: "",
                                    desciption: "",
                                    show: false
                                })
                                document.body.style.overflow = "visible"
                            }}
                        ></button>
                    </div>
                    <div className="modal-body mb-3"> {props.modal.description} </div>
                </div>
            </div>
        </div>
    )
}

export default Modal


// {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
// Launch static backdrop modal
// </button> */}