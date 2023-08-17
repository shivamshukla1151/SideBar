import React from 'react'
import '../App.css';
import Topbar from '../components/Topbar'
import InputForm from './InputForm';

const Main = ({sidebar,setSidebar}) => {
  return (

    <div className={sidebar?'main-show vh-100':'vh-100 '} style={{width:"95%"}}>
      <Topbar/>

      <div className="div p-5 mt-5 d-flex flex-column align-items-center justify-content-center vw-100 ">
         <h1>This is Main</h1>
       <InputForm/>
      </div>
    </div>
  )
}

export default Main
