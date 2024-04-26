import React,{useState, useEffect}  from 'react';

const commonGridItemStyles = {
  marginTop:'90px',
  background: '#3498db',
  padding: '20px',
  borderRadius: '20px 20px 0 0',
  color: 'white',
  textAlign: 'center',
};
const gridItemStyles = {
  casual: {
    ...commonGridItemStyles,
  },
  sick: {
    ...commonGridItemStyles,
    background: '#2ecc71',
  },
  paid: {
    ...commonGridItemStyles,
    background: '#e74c3c',
  },
  unpaid: {
    ...commonGridItemStyles,
    background: '#9b59b6',
  },
};

const gridContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  width: '80%',
  justifyContent: 'center',  // Center items horizontally
  alignItems: 'center',      // Center items vertically
  margin: '70px auto',       // Adjusted margin for centering
};

export default function EmpDashboard() {

  const [employeeData, setEmployeeData] = useState("");

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData)
    }
  }, []);

  return (

    <div>
    
      {employeeData && (
        <div>
          <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: 'blue' }}>Welcome {employeeData.fullname}</p>
        </div>
      )}
    

    <div style={{ ...gridContainerStyles, marginTop: '70px' }}>
      <div className='pendingapprovals' style={{ ...gridItemStyles.casual }}>
        <p>
          <span style={{ fontSize: '44px', color: 'black' }}>
            <b>{employeeData.casualleaves}</b>
            <br />
          </span>
          <span style={{ fontSize: '28px' }}>
            <b>Casual Leaves</b>
          </span>
        </p>
      </div>

      <div className='medical' style={{ ...gridItemStyles.sick }}>
        <p>
          <span style={{ fontSize: '44px', color: 'black' }}>
            <b>{employeeData.medicalleaves}</b>
            <br />
          </span>
          <span style={{ fontSize: '28px' }}>
            <b>Medical Leaves</b>
          </span>
        </p>
      </div>

      <div className='onduty' style={{ ...gridItemStyles.paid }}>
        <p>
          <span style={{ fontSize: '44px', color: 'black' }}>
            <b>{employeeData.ondutyleaves}</b>
            <br />
          </span>
          <span style={{ fontSize: '28px' }}>
            <b>Onduty Leaves</b>
          </span>
        </p>
      </div>

      <div className='maternity' style={{ ...gridItemStyles.unpaid }}>
        <p>
          <span style={{ fontSize: '44px', color: 'black' }}>
            <b>{employeeData.maternityleaves}</b>
            <br />
          </span>
          <span style={{ fontSize: '28px' }}>
            <b>Maternity Leaves</b>
          </span>
        </p>
      </div>
    </div>
    </div>
  );
}
