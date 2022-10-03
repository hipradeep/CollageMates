import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate();


  

  async function postData() {
    setDisabled(true)
    const loginData = {
      username: email, password: password
    }
    try {
      const res = await api.post("/auth/login", loginData)
        .then(res => {
          console.log(res)
          console.log(res.data.token)
            if (res.data.status) {
              //saving token in local storage
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('userId', res.data.user.id)
              localStorage.setItem('user_profile_name', res.data.user.name)
              localStorage.setItem('user_address', res.data.user.address)
              localStorage.setItem('user_bio', res.data.user.bio)
              localStorage.setItem('profile_url', res.data.user.profileUrl)
              localStorage.setItem('email', res.data.user.email)
              localStorage.setItem('dob', res.data.user.dob)
              localStorage.setItem('user_type', res.data.user.userType)
              //go to home page
             navigate(`/home`);
            } else {
              alert(res.data.message)
            }
        
        })
        .catch(err => {
          console.log('Login: ', err)
          alert("Something went wrong")
        }).finally(()=>{
          setDisabled(false)
        });
    } catch (error) {
      console.log("&&&"+error)
      setDisabled(false)
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    postData()

  }

  return (
    <div className='row'>

      <div className='col'>
        <div className='loginForm'>

          <h2>Login</h2>
          <form className='pt-3 mb-3' onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control rounded-1" id="email" aria-describedby="emailHelp" placeholder="Enter your email"
                value={email} disabled={disabled} required
                onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control rounded-1" id="password" placeholder="Enter password"
                value={password} minLength={3} disabled={disabled} required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <div id="forgotPassword" className="form-text fs-6"><Link to="/forgotpassword">Forgot Password? </Link></div>
            </div>

            {/* <Link to="/home"> */}

            <button type="submit" className="btn btn-primary  rounded-1 w-100"> {disabled ? < AiOutlineLoading3Quarters /> : ""} Login</button>

            {/* </Link> */}
          </form>
          <div className='row mb-3' >
            <div className=''>Don't have an account? <Link to="/signup">SignUp</Link> </div>

          </div>
          <div className='row mb-3' >


          </div>

        </div>
      </div>


    </div>
  )
}
