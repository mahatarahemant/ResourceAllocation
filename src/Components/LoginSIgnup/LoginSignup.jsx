import React from 'react'
import './LoginSignup.css'
import user from '../Assets/user.png'
import email from '../Assets/email.png'

export default function LoginSignup() {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">Sign Up</div>
            <div className="UnderLine"></div>
        </div>   
        <div className="inputs">
            <div className="input">
                <img src={user} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="Email" />
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="Email" />
            </div>
        </div>
    </div>
  )
}
 
