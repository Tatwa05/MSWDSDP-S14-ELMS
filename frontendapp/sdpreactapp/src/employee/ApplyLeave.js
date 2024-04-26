import React,{useState,useEffect} from 'react';
import axios from "axios"

const styles = {
    container: {
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '15px', // Increased spacing between form groups
    },
    label: {
      marginRight: '10px',
      width: '150px',
      fontSize: '18px', // Increased font size for labels
      fontWeight: '600', // Semi-bold
    },
    input: {
      flex: '1',
      width: '100%',
      padding: '15px', // Increased padding for inputs
      borderRadius: '15px',
      boxSizing: 'border-box',
      fontSize: '18px', // Increased font size for inputs
    },
    selects: { // Changed from "select :" to "select:"
      flex: '1',
      width: '100%',
      padding: '15px', // Applied padding for select
      borderRadius: '15px',
      boxSizing: 'border-box',
      fontSize: '18px', // Increased font size for select
    },
    optionnames: { // Added styles for options
      fontSize: '18px', // Increased font size for options
    },
    button: {
      backgroundColor: '#008000',
      color: 'white',
      border: 'none',
      borderRadius: '15px',
      padding: '12px 16px', // Adjusted padding for the button
      fontSize: '16px',
      cursor: 'pointer',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '26px',
      textAlign: 'center',
      width: '15%',
    },
  };
  
  export default function ApplyLeave() {
    const [employeeData, setEmployeeData] = useState("");

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData)
    }
  }, []);

    const [formData, setFormData] = useState({
      leavetype: '',
      fromdate: '',
      todate: '',
      Reason: '',
      
    });
  
    //message state variable
    const [message, setMessage] = useState('');
    //error state variable
    const [error, setError] = useState('');
  
    
  
    const handleSubmit = async (e) => 
    {
      e.preventDefault();
      try 
      {
        const response = await axios.post('http://localhost:2014/applyleave', {...formData, employee : employeeData});
        if (response.status === 200) 
        {
          setFormData({
            leavetype: '',
            fromdate: '',
            todate: '',
            Reason: '',
          });
        }
        setMessage(response.data);
        setError('');
      } 
      catch(error) 
      {
        setError(error.response.data);
        setMessage('');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
      <div style={styles.container}>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.formGroup}>
              <td style={styles.label}>Select Leave type:</td>
              <td>
                <select
                  style={styles.selects}
                  id="leavetype"
                  value={formData.leavetype}
                  onChange={(e) => setFormData({ ...formData, leavetype: e.target.value })}
                  required
                >
                  <option value="">---Select---</option>
                  <option value="casualLeave">casual Leave</option>
                  <option value="MedicalLeave">Medical Leave</option>
                  <option value="OndutyLeave">On duty Leave</option>
                  <option value="MaternityLeave">Maternity Leave</option>
                </select>
              </td>
            </tr>

            <tr style={styles.formGroup}>
              <td style={styles.label}>From Date:</td>
              <td>
                <input
                  type="date"
                  value={formData.fromdate}
                  onChange={(e) => setFormData({ ...formData, fromdate: e.target.value })}
                  style={styles.input}
                  required
                />
              </td>
            </tr>

            <tr style={styles.formGroup}>
              <td style={styles.label}>To Date:</td>
              <td>
                <input
                  type="date"
                  value={formData.todate}
                  onChange={(e) => setFormData({ ...formData, todate: e.target.value })}
                  style={styles.input}
                  required
                />
              </td>
            </tr>

            <tr style={styles.formGroup}>
              <td style={styles.label}>Reason:</td>
              <td>
                <input
                  type="text"
                  value={formData.Reason}
                  onChange={(e) => setFormData({ ...formData, Reason: e.target.value })}
                  style={styles.input}
                  required
                  placeholder="Reason"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" style={styles.button} className="button">
          Apply Leave
        </button>
      </div>
    </form>
    );
  }
  