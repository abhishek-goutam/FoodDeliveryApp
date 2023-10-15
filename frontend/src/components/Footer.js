import React from 'react'
import logo from '../images/logo.jpg'
const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
};
const logoStyle = {
  width: '150px', // Adjust the width of the logo as needed
  height: 'auto', // Maintain aspect ratio
  marginRight: '10px', // Add margin for spacing
};
function Footer() {
  return (
    <div className='footer'>
      <footer style={footerStyle}>
        <div>
        <img src={logo} alt="Logo" style={logoStyle} />
          &copy; 2023 Food Delivery App
        </div>
        <div>
          Address: 123 Main Street, Gurgaon, India
        </div>
        <div>
          Phone: (123) 456-7890
        </div>
        <div>
          Email: info@example.com
        </div>
      </footer>
       
    </div>
  )
}

export default Footer