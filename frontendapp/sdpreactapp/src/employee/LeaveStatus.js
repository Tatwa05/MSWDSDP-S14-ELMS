import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './leavestatus.css'; // Import the external CSS file
import pending from './pending.jpeg'
import accepted from './accepted.jpeg'
import rejected from './rejected.jpeg'



export default function LeaveStatus() {
  const [employeeData, setEmployeeData] = useState("");
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData)
    }
  }, []);

  useEffect(() => {
    if (employeeData) {
      fetchLeaves();
    }
  }); 

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(`https://mswdsdp-s14-elms.onrender.com/viewleaves/${employeeData.email}`);
      setLeaves(response.data);
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div>
      <h2>Leave Status</h2>
      <table className="job-table mx-auto" align='center'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Leave ID</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaves) && leaves.length > 0 ? (
            leaves.map((leave, index) => (
              <tr key={index}>
                <td>{leave.employee.empid}</td>
                <td>{leave.leaveid}</td>
                <td>{leave.fromdate}</td>
                <td>{leave.todate}</td>
                <td>
                  {
                leave.jobStatus === 'APPLIED'? <img style={{width: '30px', height: 'auto'}} src={pending} alt="Pending" /> :
                leave.jobStatus === 'ACCEPTED'? <img style={{width: '30px', height: 'auto'}} src={accepted} alt="accepted" /> :
                leave.jobStatus === 'REJECTED'? <img style={{width: '40px', height: 'auto'}} src={rejected} alt="rejected" /> : null
              }
                </td>
                <td>{leave.appliedTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No leave Applications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
