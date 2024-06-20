import React from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'

function Modal({children, closeModal, isModModal}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop' >
        <div className="modal" style={{
        border: isModModal ? "2px solid red" : "3px solid black",
        fontSize: "30px",
        backgroundColor: "blue"
    }}>
            {children}
            <br />
            <button onClick={closeModal} >Close</button>
        </div>
    </div>
  ), document.body)
}

export default Modal