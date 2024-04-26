import React from 'react';
import contact from './contactus.png';

export default function Contact() {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    image: {
      marginTop: '50px',
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
    content: {
      textAlign: 'center',
      fontSize: '20px',
     lineHeight: '2.0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },

  
  };

  const headingStyles = {
    fontSize: '36px',
    color: '#0d023b', // Adjust heading color
    borderBottom: '2px solid #0d023b', // Add an underline effect
    paddingBottom: '10px', // Adjust spacing below heading
  };


  const handleButtonClick = () => {
    // You can replace this with your actual contact form logic or redirection
    console.log('Contact button clicked!');
  };

  return (
    <div style={styles.container}>
      <br/>
      <br/>
      
      <img src={contact} alt="Contact Us" style={styles.image} />
      <div style={styles.content}>
        <h2 style={headingStyles}>Contact Us</h2>
        <p>
          <b>Feel free to reach out to us. We're here to help you with any questions or concerns.</b>
          <br/>
          <b>
            mail : leavepilot@hotmail. <br/>
            Toll Free No. : 4569-5689-2589
          </b>
        </p>
        <button style={styles.button} onClick={handleButtonClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
}



