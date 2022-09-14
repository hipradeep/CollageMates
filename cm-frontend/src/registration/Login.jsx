import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='row'>

      <div className='col'>
        <div className='loginForm'>


          <h2>Login</h2>
          <form className='pt-3 mb-3'>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control rounded-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
              <div hidden id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control rounded-1" id="exampleInputPassword1" placeholder="Enter password" />
            </div>
            <div class="mb-3 ">
              <div id="forgotPassword" class="form-text fs-6"><Link to="/forgotpassword">Forgot Password? </Link></div>
            </div>

            <Link to="/home">

              <button type="submit" class="btn btn-primary  rounded-1 w-100">Login</button></Link>
          </form>
          <div className='row mb-3' >
            <div className=''>Don't have an account? <Link to="/signup">SignUp</Link> </div>

          </div>

        </div>
      </div>


    </div>
  )
}
