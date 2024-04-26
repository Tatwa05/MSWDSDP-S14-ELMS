import React, { useState,useEffect } from 'react';
import adminhome from './images/adminhome.png';
import axios from 'axios'

export default function Dashboard() {
  const imageContainer = {
    maxWidth: '200%',
    height: '590px',
    marginLeft: '4vw',
    marginTop: '2vh',
    marginBottom: '19vh',
  };

  const [adminData, setAdminData] = useState("")
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
    }
    fetchCounts();
  }, []);
  const fetchCounts = async () => {
    try {
      const response = await axios.get(`http://localhost:2014/analysis`);
      setCounts(response.data);
      
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };

  


  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        <span style={{ fontSize: '28px' }}>
          <b>Pending Approvals : </b>
        </span>
        <span style={{ fontSize: '44px', color: 'red' }}>
          
            {
              counts ?  <b>{counts.appliedCount}</b> : null
            }
          
        </span>
      </p>
      <img src={adminhome} alt='adminhome' style={imageContainer} />
    </div>
  );
}
