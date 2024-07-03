import React from 'react'
import "./Modal.css"
import { useState } from 'react'
import {v4 as uuidv4} from "uuid"

function Modal({setShowTHead, newEvent, setShowModal}) {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    const resetInputs = () => {
        setname("")
        setEmail("")
        setMobile("")
        setPassword("")
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        
        const event ={
            id: uuidv4(),
            name: name,
            email: email,
            mobile: mobile,
            password: password
        }
        newEvent(event);
        resetInputs()
    }

  return (
    <div className='modal_backdrop'>
        <div className="modal container">
            <form  onSubmit={handelSubmit}>
                <label>
                    <span>Name</span>
                    <input onChange={(e) =>setname(e.target.value) } value={name} type="text" />
                </label>
                <label>
                    <span>Email</span>
                    <input onChange={(e) =>setEmail(e.target.value) } value={email} type="email" />
                </label>
                <label>
                    <span>Mobile</span>
                    <input onChange={(e) =>setMobile(e.target.value) } value={mobile} type="number" />
                </label>
                <label>
                    <span>Password</span>
                    <input onChange={(e) =>setPassword(e.target.value) } value={password} type="number" />
                </label>
                <button onClick={() => setShowTHead(true)}>Submit</button>
                <button onClick={() => setShowModal(false)} >Close</button>
            </form>
        </div>
    </div>
  )
}

export default Modal