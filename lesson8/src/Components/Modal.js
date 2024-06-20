import React from 'react'

function Modal({children}) {
  return (
    <div className='modal-backdrop'>
        <div className="modal">
            {children}
        </div>
    </div>
  )
}

export default Modal