import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import empgif from './employee.gif'
import '../employee/emplogin.css'; // Import the CSS file for styling

export default function EmpLogin({onEmpLogin}) {
    //css codes
  const loginStyles = {
    fontSize: '29px',
    
  };

  const labelStyles = {
    fontSize : '19px',
    color:'black'
    
  }


 //logic for login 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2014/checkemplogin', formData);
      if (response.data!=null) 
      {
        
        onEmpLogin();
        localStorage.setItem('employee', JSON.stringify(response.data));
        navigate("/empdashboard")

      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

    return (
        <div>
          <h3 align="center"><u>Employee Login</u></h3>
          {
            message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
          }
        <div className="login-container">
          <div className="gif-container">
            <img src={empgif} alt="GIF" />
          </div>
          <div className="login-block">
            <h2 style={loginStyles} >Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label style={labelStyles}>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label style={labelStyles}>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <br/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        </div>
      );
}
