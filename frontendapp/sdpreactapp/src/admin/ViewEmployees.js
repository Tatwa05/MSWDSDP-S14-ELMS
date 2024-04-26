import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:2014/viewemployees');
      setEmployees(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (email) => {
    try {
      await axios.delete(`http://localhost:2014/deleteemployee/${email}`);
      fetchEmployees();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Employees</h1>

      <style>
        
      {`
        table {
          width: 80%;
          margin: 20px auto;
          border-collapse: collapse;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #397801;
          color: white;
        }

        tbody tr:hover {
          background-color: #f5f5f5;
        }

        td button {
          background-color:#8b0000;
          color: white;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 25px;
        }

        tbody tr:hover {
          background-color:  #eee170;
          font-weight: bold;
          color: #232b2b;
        }

        td button:hover {
          background-color: #8b0000;

        }

        td button:disabled {
          background-color:#ffa089;
          cursor: not-allowed;
        }
      `}
     
      </style>

      
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Employee ID </th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(employees) && employees.length > 0 ? (
    employees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.empid}</td>
        <td>{employee.fullname}</td>
        <td>{employee.gender}</td>
        <td>{employee.dateofbirth}</td>
        <td>{employee.email}</td>
        <td>{employee.location}</td>
        <td>{employee.contact}</td>
        <td>
          <button onClick={() => deleteEmployee(employee.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}