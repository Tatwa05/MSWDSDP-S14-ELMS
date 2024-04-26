// Navbar.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './employee.css'
import EmpDashboard from './EmpDashboard';
//import App from '../App';
import ApplyLeave from './ApplyLeave';
import LeaveStatus from './LeaveStatus';
import Profile from './Profile';
import Login from './EmpLogin'
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';





export default function EmpNavBar() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('isEmpLoggedIn');
    localStorage.removeItem('employee');
    navigate('/emplogin');
    window.location.reload()
  };
  return (
    <div>
        <ul className='navbar'>
        <li className='logo'><Link to="/home" className='logo-link'>LeavePilot</Link></li>      
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/applyleave">Apply Leave</Link></li>
          <li><Link to="/myleavestatus">My leave status</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>

        <Routes>

            <Route path="/" element={<EmpDashboard/>} exact/>
            <Route path="/empdashboard" element={<EmpDashboard/>} exact></Route>
            <Route path="/applyleave" element={<ApplyLeave/>} exact/>
            <Route path="/myleavestatus" element={<LeaveStatus/>} exact/>
            <Route path="/profile" element={<Profile/>} exact/>
            <Route path="/login"element={<Login/>} exact/>
            <Route path="/changeemppassword" element={<ChangePassword/>} exact/>

        </Routes>



    </div>
  );
}
