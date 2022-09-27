import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className='row'>

    <div className='col'>
      <div className='loginForm'>

   
      <h2>Forgot Password</h2>
      <form className='pt-3 mb-3'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Register Email address</label>
          <input type="email" className="form-control rounded-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
            <div hidden id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <button type="submit" className="btn btn-primary rounded-1 w-100">Forgot Password</button>
      </form>
      <div className='row mb-3' >
        <div className=''> <Link to="/login">Back to Login?</Link> </div>
       
      </div>
      
    </div>
    </div>


  </div>
  )
}
