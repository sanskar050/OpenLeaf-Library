import React, { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
  
    function submitLogin(e) {
      e.preventDefault()
      axios.post("http://localhost:3001/login", {email, password})
      .then(result => {
        // console.log(result)
        if (result.data === "Success!") {
          navigate("/home")
        }
      })
      .catch(err => console.log(err))
    }

  return (
    <div className="loginForm">

      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder='Email' />
      <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Password' />
      
      <div className="login_buttons">
        <NavLink to="/password-reset">Forget Password?</NavLink>
        <button onClick={submitLogin} type='submit'>Submit</button>
      </div>

      <div className="newAccount">
        Don't have any account? <NavLink to="/register">Create a new account</NavLink>
      </div>

    </div>
  )
}

export default Login