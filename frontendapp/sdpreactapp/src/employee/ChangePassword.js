import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function ChangePassword() {
  const [employeeData, setEmployeeData] = useState("");
  

    useEffect(() => {
      const storedEmployeeData = localStorage.getItem('employee');
      if (storedEmployeeData) {
        const parsedEmployeeData = JSON.parse(storedEmployeeData);
        setEmployeeData(parsedEmployeeData);
      }
    }, []);

    const [formData, setFormData] = useState({
      oldpassword: '',
      newpassword: ''
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
  
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try 
      {
        const response = await axios.put('https://mswdsdp-s14-elms.onrender.com/changeemppassword', {...formData,"email":employeeData.email});
        if (response.data != null) 
        {
          localStorage.removeItem('isEmpLoggedIn');
          localStorage.removeItem('employee');
          navigate('/emplogin');
          window.location.reload()
        } 
        else 
        {
          setMessage("Old Password is Incorrect");
          setError("");
        }
      } catch (error) {
        setMessage("");
        setError(error.response.data);
      }
    };
  

  return (
    <div>
      <br/><br/><br/><br/>
      <h3 align="center"><u>Change Password</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
         <div>
          <label style={{color:'black'}}><b>Old Password</b></label>
          <input type="password" id="oldpassword" value={formData.oldpassword} onChange={handleChange} style={{width:"190px"}} required />
        </div>
        <div>
          <label style={{color:'black'}}><b>New Password</b></label>
          <input type="password" id="newpassword" value={formData.newpassword} onChange={handleChange} style={{width:"190px"}} required />
          <br/>
          <input type="submit" value="Change"  style={{ width: '80px', backgroundColor: 'green', color: 'black', alignItems:'center' }} />
        </div>
        
      </form>

       
    </div>
  )
}
