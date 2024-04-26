import React, {useState,useEffect} from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom';


export default function Profile() {

  const [employeeData, setEmployeeData] = useState("");
  // const navigate = useNavigate()
  const navigate = useNavigate()

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData)
    }
  }, []);

  const handleSave = () => {
    // navigate('/changeemppassword')
    console.log("Navigating..")
    navigate('/changeemppassword')
  }

  
    return (
  
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="profile-card">
          <h2>{employeeData.fullname}</h2>
          <p><b>ID: {employeeData.empid}</b></p>
          <p><b>Email: </b>{employeeData.email}</p>
          <p><b>Gender: </b>{employeeData.gender}</p>
          <p><b>Date of birth: </b> {employeeData.dateofbirth}</p>
          <p><b>Location: </b>{employeeData.location}</p>
          <p><b>Contact:</b> {employeeData.contact}</p>
          <br/>
          <br/>
          <button type='submit' onClick={()=>handleSave()}>Change Password</button>

        </div>
        <br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/>
        
        </div>
      
    );
  };
