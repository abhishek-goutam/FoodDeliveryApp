import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='contact'>
     <h1 style={{textAlign:'center', color:'red'}}>
     Heart-healthy meals delivered by hand to your house.
     </h1>
      <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-info">Feel free to reach out to us using the following contact information:</p>
      <p className="contact-info">Email: <span className="contact-links"><a href="mailto:contact@example.com">contact@example.com</a></span></p>
      <p className="contact-info">Phone: (123) 456-7890</p>
      {/* Add any additional contact information or a contact form here */}
    </div >
    <h1 style={{textAlign:'center',color:'red'}}>
      Fill the below form to submit any complaint or request
    </h1>
   <ContactForm/>
    </div>
  )
}

export default Contact