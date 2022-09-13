import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from '../error/NoPage';
import ForgotPassword from '../registration/ForgotPassword';
import Login from '../registration/Login';
import Registration from '../registration/Registration';
import SignUp from '../registration/SignUp';
export default function Main() {
  return (

<div className='main' style={{margin:"0", padding:"0"}}>

    <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<Registration />} >
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<NoPage />} />
        </Route>

    </Routes>
    
  </BrowserRouter>

  </div>
  )
}
