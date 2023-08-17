import React from 'react'
import '../App.css';
import Topbar from '../components/Topbar'

const Main = ({sidebar,setSidebar}) => {
  return (

    <div className={sidebar?'main-show vh-100 ':'vh-100 '} style={{width:"95%"}}>
      <Topbar/>

      <div className="div p-5 mt-5">
         <h1>This is Main</h1>

        <p className='text-start'>   Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non veritatis iste consequatur odit this is what it is
            nisi perspiciatis animi at voluptatum quidem, laudantium exercitationem 
            veniam fugiat voluptate, facilis doloribus illo, totam libero labore?
        </p>
      </div>
    </div>
  )
}

export default Main
