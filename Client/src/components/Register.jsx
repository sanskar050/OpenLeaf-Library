import React, { useState } from 'react'
import './Register.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  
  function createAccount(e) {
    e.preventDefault()
    axios.post("http://localhost:3001/register", {name, email, password})
    .then( () => {
      // console.log(result)
      navigate("/login")
    })
    .catch(err => console.log(err))
  }
  
  // function checkNewAccCreation() {
  //   let newEmail = document.querySelector(".newAccEmail").value
  //   if (!newEmail.includes("@")){
  //     console.log("Email should contain '@'")
  //   }
  //   else {
  //     createAccount();
  //   }
  // }

  return (
    <div className='register'>

      <h1>Create Your Account</h1>

      <input onChange={(e) => setName(e.target.value)} type="name" className='newAccName' placeholder='Name'/>

      <input onChange={(e) => setEmail(e.target.value)} type="email" className="newAccEmail" id="" placeholder='Email'/>

      <input onChange={(e) => setPassword(e.target.value)} type="password" className='newAccPassword' id="" placeholder='Password'/>

      <NavLink className="underline" to="/password-suggestion">
        <div className='passwordSuggestion'>Click For Password Suggestion</div>
      </NavLink>
      
      <button onClick={createAccount} type="submit" className='createAccount'>Create Account</button>
      
      <div>Already have an Account?
        <NavLink to="/login"><span> Log In</span></NavLink>
      </div>

    </div>
  )
}

export default Register