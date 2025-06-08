import React from 'react'
import './Password-suggestion.css'

const PasswordSuggestion = () => {
  return (
    <div className='suggestion'>

      <h1>Password Suggestions :</h1>

      <div className='passwordSuggestionPoints'>
        <li>Pasword should be atleast 8 characters long.</li>
        <li>Password should have atleast one UPPERCASE character.</li>
        <li>Password should contain atleast one special character. (Example: '!', '@', '#', '$', '%', '^', '&', '*' '(', ')', '_', '=' etc.)</li>
        <li>Password should contain atleast one number.</li>
      </div>
      
    </div>
  )
}

export default PasswordSuggestion