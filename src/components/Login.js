import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/home');
  }
  return (
    <div>
        {/* className= 'h1login' */}
        {/* className='form2' */}
      <h1 >Get your <span style={{color:"red"}}>Food </span> delivered!</h1>
      <form className='form2'>
        <label> 
          Email:
          <input type= 'email' required/>
        </label>
        <br/>
        <label>
          Password:
          <input className='pass' type="password" required/>
        </label>
        <br/>
        <input type="submit" value="Login" onClick={routeChange} />
      </form>
    </div>
  )
}

export default Login;
