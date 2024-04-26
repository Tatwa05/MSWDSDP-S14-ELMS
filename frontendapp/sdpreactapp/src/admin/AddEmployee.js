import React, {useState} from 'react'
import axios from 'axios'


export default function AddEmployee() {
  const [formData, setFormData] = useState({
    empid:'',
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    location: '',
    contact: '',
    
  });

   //message state variable
   const [message, setMessage] = useState('');
   //error state variable
   const [error, setError] = useState('');
 
   const handleChange = (e) => 
   {
     
     setFormData({...formData, [e.target.id]: e.target.value});
     
     
   };
 
   const handleSubmit = async (e) => 
   {
     e.preventDefault();
     try 
     {
       const response = await axios.post('https://mswdsdp-s14-elms.onrender.com/insertemployee',formData);
       if (response.status === 200) 
       {
         
         setFormData({
            empid: '',
           fullname: '',
           gender: '',
           dateofbirth: '',
           email: '',
           location: '',
           contact: '',
          
         });
       }
       setMessage(response.data);
       setError(''); //set error to ""
     } 
     catch(error) 
     {
       setError(error.response.data);
       setMessage(''); //set message to ""
     }
   };

  return (
    <div>
  
  {
    message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
  }

  <form onSubmit={handleSubmit}>

    <table align="center">
      <tbody>
        <tr>
          <td><label>ID</label></td>
          <td><input type="text" id="empid" value={formData.empid} onChange={handleChange} required />
          </td>
        </tr>
        <tr>
          <td><label>Full Name</label></td>
          <td><input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required /></td>
        </tr>
        <tr>
          <td><label>Gender</label></td>
          <td>
            <select id="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Date of Birth</label></td>
          <td><input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required /></td>
        </tr>
        <tr>
          <td><label>Email</label></td>
          <td><input type="email" id="email" value={formData.email} onChange={handleChange} required /></td>
        </tr>
        
        <tr>
          <td><label>Location</label></td>
          <td><input type="text" id="location" value={formData.location} onChange={handleChange} required /></td>
        </tr>
        <tr>
          <td><label>Contact</label></td>
          <td><input type="number" id="contact" value={formData.contact} onChange={handleChange} pattern="[6789][0-9]{9}" placeholder="Must be 10 digits" required /></td>
        </tr>
        
        <tr>
          <td colSpan="2" align="center"><button type="submit">Register</button></td>
        </tr>
      </tbody>
    </table>
  </form>
</div>

  )
}
