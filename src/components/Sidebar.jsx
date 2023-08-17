import React from 'react'
import '../App.css';
import { SideData } from './SideData';
import {CiMenuBurger} from "react-icons/ci"
const Sidebar = ({sidebar,setSidebar}) => {
    
  return (
    <div className={sidebar?'sideBar-show vh-100':'w-0 vh-100 '}  style={{width:"5%",backgroundColor:"#2C3034"}}>
        <aside  className="vh-100 d-flex flex-column align-items-center justify-content-betwen" style={{backgroundColor:"#2C3034"}}>
        <div className='mt-2 w-100 d-flex justify-content-end'>
           {/* { sidebar?<span className=''><img className="w-25 mt-1 ms-2" src={logo} alt="logo" /></span>:null} */}
            <span className='btn' onClick={()=> setSidebar(sidebar?false:true)} >{sidebar?<div className='btn-close btn-close-white text-light'/>:<CiMenuBurger size={30} className='text-light'/>}</span> 

        </div>
        <div className='w-100'>
           {sidebar?SideData.map((data,key)=>(
           <div className='sidebar-element d-flex flex-row my-5 justify-content-between  align-items-center text-light' key={key}>
           <div className='ms-3'>{data.icon}</div>
           <div className='d-flex justify-content-start w-50'>
              <div className="me-3">{data.title}</div>
           </div>
           </div>
        )):SideData.map((data,key)=>(
            <div className='sidebar-element my-5 d-flex flex-column justify-content-between  align-items-center text-light '>{data.icon}</div>
        ))}
        </div>

         </aside>
      
    </div>
  )
}

export default Sidebar
