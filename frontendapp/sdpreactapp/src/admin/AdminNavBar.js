// Navbar.js

import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import "./admin.css"
import Dashboard from './Dashboard';
import AddEmployee from './AddEmployee';
import ViewEmployees from './ViewEmployees';
import Leaves from './Leaves';
import Login from '../admin/AdminLogin';




export default function AdminNavBar() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div>
      
        <ul className='navbar'>
        <li className='logo'><Link to="/home" className='logo-link'>LeavePilot</Link></li>      
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/AddEmployee">Add Employee</Link></li>
        <li><Link to="/ViewEmployees">View Employees</Link></li>
        <li><Link to="/Leaves">Leaves</Link></li>
        <li> <Link onClick={handleLogout} >Logout</Link>&nbsp;&nbsp;&nbsp;</li>
        </ul>

        <Routes>

            <Route path="/" element={<Dashboard/>} exact/>
            <Route path="/dashboard" element={<Dashboard/>} exact></Route>
            <Route path="/AddEmployee" element={<AddEmployee/>} exact/>
            <Route path="/ViewEmployees" element={<ViewEmployees/>} exact/>
            <Route path="/leaves" element={<Leaves/>} exact/>
            <Route path="/login"element={<Login/>} exact/>

        </Routes>



    </div>
  );
}
