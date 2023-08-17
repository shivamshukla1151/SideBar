import React from 'react'
import logo from "../resources/logo2.png"


const Topbar = () => {
  return (
    
      <nav className='d-flex w-100 justify-content-between align-items-center position-fixed shadow-sm p-3 mb-5 bg-white rounded' style={{ background:"#F8F9FA"}}>
        <div className="nav-logo mx-5">
            <img src={logo} className='w-25' alt="logo" />
        </div>
        <div className="mx-5">
            <ul className='d-flex mx-5'>
                <li className='text-decoration-none mx-3 list-unstyled' style={{cursor:"pointer"}}>Link 1</li>
                <li className='text-decoration-none mx-3 list-unstyled'>Link 2</li>
                
            </ul>
        </div>
      </nav >
  )
}

export default Topbar