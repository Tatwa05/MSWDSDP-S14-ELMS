import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import AdminLogin from '../admin/AdminLogin'
import Contact from './Contact'
import './style.css'
import EmpLogin from '../employee/EmpLogin'

export default function MainNavBar({onAdminLogin,onEmpLogin}) {
  return (
    
    <div>
      <style>

      
      </style>
        <ul className='navbar'>
        <li className='logo' ><Link to="/home" className='logo-link' >LeavePilot</Link></li>
        
        <li><Link to="/about">About</Link></li>
        
          
          
            <li><Link to="/adminlogin" >Admin</Link></li>
            <li><Link to="/emplogin" >Employee</Link></li>
          
        
        <li> <Link to ="/contact">Contact us</Link>&nbsp;&nbsp;&nbsp;</li>
        </ul>

        <Routes>

            <Route path="/" element={<Home/>} exact/>
            <Route path="/home" element={<Home/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact/>
            <Route path='/emplogin' element={<EmpLogin onEmpLogin={onEmpLogin}/>} exact/>
            <Route path="/contact"element={<Contact/>} exact/>

        </Routes>



    </div>
  )
}
