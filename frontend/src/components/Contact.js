import React from 'react';
import background from '../images/rest3.jpg'

function Contact() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "70vh",
    background: '#f0f0f0', // Light gray background
    backgroundImage: `url(${background})`,
    backgroundSize: "cover", // Ensure the image covers the container
    backgroundRepeat: "no-repeat",
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: 'cursive',
    color: 'red',
    textAlign: 'center',
  };

  const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const contactTitleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'red',
  };

  const contactInfoStyle = {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
    color: '#333', // Dark gray color
  };

  const contactLinkStyle = {
    color: 'blue',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle} className="contact">
      <h1 style={headingStyle}>
        Heart-healthy meals delivered by hand to your house.
      </h1>
      <div style={contactContainerStyle} className="contact-container">
        <h2 style={contactTitleStyle} className="contact-title">Contact Us</h2>
        <p style={contactInfoStyle} className="contact-info">
          Feel free to reach out to us using the following contact information:
        </p>
        <p style={contactInfoStyle} className="contact-info">
          Email: <span style={contactLinkStyle}><a href="mailto:contact@example.com">contact@example.com</a></span>
        </p>
        <p style={contactInfoStyle} className="contact-info">
          Phone: (123) 456-7890
        </p>
      </div>
    </div>
  );
}

export default Contact;
