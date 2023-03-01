import React, { useState } from 'react'
import './index.css';

export default function Login() {

    const [loginEmail, setLoginEmail] = useState('');

const handleChange = (e) =>{
    setLoginEmail(e.target.value)
    
}
const handleLogin =()=>{

  if(loginEmail==='user_a@system.com' || loginEmail==='user_b@system.com')

    localStorage.setItem('isAuth', loginEmail)
    window.location.reload()
}

  return (
    <div>
    <div className="container">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Enter Registered Email</label>
        <input value={loginEmail} onChange={handleChange} type="text" id="username" name="username"/>
        <button onClick={handleLogin} type='button' id="submit-btn">Login</button>
      </div>

      </div>
    
    </div>
  )
}
