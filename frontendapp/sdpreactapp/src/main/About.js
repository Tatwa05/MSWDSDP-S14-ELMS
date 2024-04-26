import React from 'react';

export default function About() {
  
  const aboutStyles = {
    maxWidth: '1300px',
    margin: '0 auto',
    textAlign: 'justify',
    fontSize: '20px',
    lineHeight: '2.0',
    color: '#333', // Adjust text color
    padding: '20px', // Add padding for better spacing
    backgroundColor: '#F2C2FF', // Add a light background color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    borderRadius: '10px', // Add rounded corners
  };

  const headingStyles = {
    fontSize: '36px',
    color: '#0d023b', // Adjust heading color
    borderBottom: '2px solid #0d023b', // Add an underline effect
    paddingBottom: '10px', // Adjust spacing below heading
  };
  return (
    <div>
      <br/>
      <br/>
    <div style={aboutStyles}>

      <h2 style={headingStyles}>Features</h2>
      <br />
      <p><b>
        The Employee Leave Management System is a web-based system that allows
        the user to effectively make leave requests that are handled by managers
        and employees. It is a platform where employees can request leaves, and
        where as admin can accept or reject the request depending on the
        employee's document and the reason he applied. With secure user
        authentication measures, the system ensures that only authorized
        individuals have access, it also safeguards the sensitive information
        and maintains the integrity of the leave management process. Managing
        employee leaves is important for keeping a productive work
        environment. The user interface is designed with simplicity in mind,
        allowing employees to effortlessly submit their leave requests. This
        promotes widespread adoption across the organization. It not only
        streamlines the administrative processes but also enhances transparency
        across the organization.
        </b>
      </p>
    </div>
    </div>
  );
}
