import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [userType, setUserType] = useState("student");
  const [disabled, setDisabled] = useState(false);

  let history = useNavigate();
  function handleClick() {
    history("/login");
  }

  async function postData() {
    setDisabled(true)
    const registerData = {
      name: fullName, password, email, userType, dob,
    }
    try {
      const res = await api.post("/auth/register", registerData)
        .then(res => {
          console.log(res)
          setDisabled(false)
          handleClick()

        })
        .catch(err => console.log('Login: ', err));
    } catch (error) {
      console.log(error)
      setDisabled(false)
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email, password, fullName, dob, userType }))
    postData();
    
  }

  return (
    <div className='row'>

      <div className='col'>
        <div className='loginForm'>


          <h2>SignUp</h2>
          <form className='pt-3 mb-3' onSubmit={submitForm}>

            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control rounded-1" id="fullName" placeholder="Enter your name" autoComplete='off'
                value={fullName} disabled={disabled} required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control rounded-1" id="email" aria-describedby="emailHelp" placeholder="Enter your email" autoComplete='off'
                value={email} disabled={disabled} required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of birth</label>
              <input type="date" className="form-control rounded-1" id="dob" min="01-01-1950" max={new Date().toLocaleDateString('en-ca')}
                value={dob} disabled={disabled} required
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div className='mb-3 userType '>
              <input className="form-check-input" type="radio" name="userType" id="rStudent" checked
                value={"student"} disabled={disabled} required
                onChange={(e) => setUserType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="rStudent">
                Student
              </label>

              <input className="form-check-input" type="radio" name="userType" id="rTeacher"
                value={"teacher"} disabled={disabled} required
                onChange={(e) => setUserType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="rTeacher">
                Teacher
              </label>

            </div>


            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control rounded-1" id="password" placeholder="Enter password" autoComplete='off'

                value={password} minLength={3} disabled={disabled} required
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>

            <button type="submit" className="btn btn-primary rounded-1  w-100">{disabled ? < AiOutlineLoading3Quarters /> : ""} SignUp</button>
          </form>
          <div className='row mb-3' >
            <div className=''>You already havean account? <Link to="/login">Login</Link> </div>

          </div>

        </div>
      </div>


    </div>
  )
}
