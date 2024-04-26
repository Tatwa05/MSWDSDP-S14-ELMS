import React,{useState} from 'react';
import '../main/login.css'; // Import the CSS file for styling
import gif from '../main/giphy.gif'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({onAdminLogin}) {
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
      const response = await axios.post('https://mswdsdp-s14-elms.onrender.com/checkadminlogin', formData);
      if (response.data!=null) 
      {
        onAdminLogin()
        navigate("/dashboard")
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
      <h3 align="center"><u>Admin Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
    <div className="login-container">
      <div className="gif-container">
        <img src={gif} alt="GIF" />
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
