import React from 'react'
import "./AddUser.css"

function AddUser({setShowModal} ) {
  return (
    <div className='add_user container' >
        <button onClick={() => setShowModal(true)} >Add User</button>
        <br />
        <br />
        <hr />
    </div>
  )
}

export default AddUser