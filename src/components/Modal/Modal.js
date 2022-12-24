import React from 'react'
import "./Modal.css"

function Modal(props) {
    return (
        <>
            <button style={{display:"none"}} id="modaltoggler" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" aria-hidden="true">
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{border: "0px", padding: "15px 20px 5px 20px"}}>
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.modal.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{padding: "15px 20px 20px 20px"}}>
                        {props.modal.description}
                        </div>
                        {/* <div className="modal-footer" style={{border: "0px"}}>
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-bs-dismiss="modal"
                                style={{padding: "3px", width: "90px"}}
                            >Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal


        // <div className='modal-outer-container' tabIndex="-1" data-bs-keyboard="false">
        //     <div className="modal-inner-container" style={{pointerEvents: `${props.show ? "auto" : "none"}`}}>
        //         <div className="modal-box" style={{pointerEvents:"auto"}}>
        //             <div className="modal-top d-flex justify-content-between">
        //                 <h5 className="mb-3">{props.modal.title}</h5>
        //                 <button 
        //                     type="button" 
        //                     className="btn-close" 
        //                     onClick={() => {
        //                         props.setModal({
        //                             title: "",
        //                             desciption: "",
        //                             show: false
        //                         })
        //                         document.body.style.overflow = "visible"
        //                     }}
        //                 ></button>
        //             </div>
        //             <div className="modal-body mb-3"> {props.modal.description} </div>
        //         </div>
        //     </div>
        // </div>