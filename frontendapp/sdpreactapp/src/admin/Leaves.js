import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Leaves() {
  const [employeeData, setEmployeeData] = useState("");
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData)
    }
  }, []);

  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    try 
    {
      const response = await axios.get(`https://mswdsdp-s14-elms.onrender.com/adminviewleaves`);
      setLeaves(response.data);
    } 
    catch (error) 
    {
      setError(error.response.data);
    }
  }

  useEffect(() => {
    fetchLeaves();
  });

  const handleStatusChange= async (leaveid, status) => {
    try 
    {
      const response = await axios.post('https://mswdsdp-s14-elms.onrender.com/changeleavestatus', { leaveid , status });
      fetchLeaves();
      setMessage(response.data);
      setError(''); // Set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); // Set message to ""
    }
  };

  return (
    <div> i am in leaves page
      {
          message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
        }
    <table className="job-table mx-auto" align='center'>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Leave ID</th>
            <th>Leave Type</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaves) && leaves.length > 0 ? (
            leaves.map((leave, index) => (
              <tr key={index}>
                <td>{leave.employee.empid}</td>
                <td>{leave.leaveid}</td>
                <td>{leave.leavetype}</td>
                <td>
                 {leave.fromdate}
                </td>
                <td>{leave.todate}</td>
                <td>{leave.Reason}</td>
                <td>
                <button  style={{backgroundColor:'green'}} className='accepted' onClick={() => handleStatusChange(leave.leaveid,"ACCEPTED")}>ACCEPT</button> &nbsp;&nbsp;&nbsp;
                <button style={{backgroundcolor:"red"}} className='rejected' onClick={() => handleStatusChange(leave.leaveid,"REJECTED")}>REJECT</button>
                </td>
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
  )
}
