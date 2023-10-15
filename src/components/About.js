import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

function About() {
  return (
    <div>
     <div style={{height:'57vh'}}>
      <h1 className='h1about'>About Us</h1>
      <h2 className='h2about'>
        Welcome to our website! We are a passionate team dedicated to </h2>
        <h2 className='h2about'>providing you with the best information, products, or services in our field.
      </h2>
      <h2 className='h2about'>
        Feel free to learn more about us, our mission, and our values.
      </h2>
      <div className='socialicons'>
        <FacebookOutlinedIcon fontSize='large'/>
        <SubscriptionsOutlinedIcon fontSize='large'/>
      </div>
    </div>
  
    </div>
  )
}

export default About