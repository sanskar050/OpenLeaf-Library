import React from 'react'
import './Password-Reset.css'

const PasswordReset = () => {

  function enterCode() {
    let email = document.querySelector("#email-input").value
    if (email === "") {
      alert("Please Enter Email!")
    }
    else if (!email.includes("@")) {
      alert("Email should include '@'")
    }
    else {
      document.querySelector(".Enter-Email").style.display = "none"
      document.querySelector(".send-otp-btn").style.display = "none"
      document.querySelector(".Enter-Code").style.margin = "65px 0 0 0"
      document.querySelector(".verify-btn").style.display = "block"
    }
  }

  function verify() {
      alert("Coming Soon...")
    }
  
  return (
    <div className='passwordReset'>

      <div className='passwordResetForm'>

      <h1>Reset Password</h1>

      <div className='field'>

        <div className="Enter-Email">
          <label>Email:</label>
          <input id='email-input' type='email' placeholder='Email'></input>
        </div>

        <button type='submit' onClick={enterCode} className='send-otp-btn'>Send Code</button>

        <div className="Enter-Code">
          <label>Code:</label>
          <input id='code-input' type='otp' placeholder='Code'></input>
        </div>

        <button type='submit' onClick={verify} className='verify-btn'>Verify Code</button>

      </div>

      </div>

    </div>
  )
}

export default PasswordReset