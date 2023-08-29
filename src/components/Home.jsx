 import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Nav from '../Navigation/Nav'
import Products from './Products'
import DarkModeComponent from "./DarkMode";
 
 const Home = () => {
   return (
     <div className=''>
      <DarkModeComponent/>
      <Nav/>
      <div className='flex flex-col md:flex-row p-2'>
      <Sidebar/>
      <Products/>
      </div>
     </div>
   )
 }
 
 export default Home