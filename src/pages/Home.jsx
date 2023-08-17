import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Topbar from '../components/Topbar'

const Home = () => {
    const [sidebar, setSidebar] = React.useState(false)

    function diplaySidebarHandler(){
        
           
    }
  return (
    <div className='d-flex flex-column align-items-start justify-content-between'>
      <main className='d-flex'>
         <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
         <Main sidebar={sidebar} setSidebar={setSidebar}/>
      </main>
    </div>
  )
}

export default Home
