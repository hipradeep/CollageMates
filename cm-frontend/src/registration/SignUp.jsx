import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='row'>

      <div className='col'>
        <div className='loginForm'>


          <h2>SignUp</h2>
          <form className='pt-3 mb-3'>

            <div class="mb-3">
              <label for="username" class="form-label">Full Name</label>
              <input type="text" class="form-control rounded-1" id="username" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control rounded-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            </div>
            <div class="mb-3">
              <label for="dob" class="form-label">Date of birth</label>
              <input type="date" class="form-control rounded-1" id="dob" placeholder="Enter your name" />
            </div>

            {/* <div class="mb-3">
              <label for="college" class="form-label">Colleges</label>
              <select className="form-select rounded-1" name="colleges" id="college">
                <option value="" disabled selected>Select your college</option>
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select>
            </div> */}
            <div className='mb-3 userType '>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                <label class="form-check-label" for="flexRadioDefault1">
                  Student
                </label>
        
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                <label class="form-check-label" for="flexRadioDefault2">
                  Teacher
                </label>
          
            </div>


            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control rounded-1" id="exampleInputPassword1" placeholder="Enter password" />
            </div>

            <button type="submit" class="btn btn-primary rounded-1  w-100">SignUp</button>
          </form>
          <div className='row mb-3' >
            <div className=''>You already havean account? <Link to="/login">Login</Link> </div>

          </div>

        </div>
      </div>


    </div>
  )
}
