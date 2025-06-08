import React from 'react'
import './Contact.css'
import Phone from './phone.png'
import Email from './email.png'

const Contact = () => {
  return (
    <div className="contact">

      <div className='bg-aqua'>
        <h1>Contact Us</h1>
      </div>

      <div className="contactOptions">

        <div className='phoneDiv'>

          <div className="phoneTitle">
            <img src={Phone} alt="phone" />
            <h2>Phone Number</h2>
          </div>

          <div className="phone">+91XXXXXXXXXX</div>

        </div>

        <div className='emailDiv'>

          <div className="emailTitle">
            <img src={Email} alt="email" />
            <h2>Support Mail</h2>
          </div>

          <div className='email'>example@gmail.com</div>
          
        </div>

      </div>
    </div>
  )
}

export default Contact