import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button } from 'bootstrap';

export default function ProfileMenu() {
   

const logout=(e)=>{
  const navigate = useNavigate();
 // localStorage.getItem('token')
 console.log("hi")
  localStorage.setItem('token', "")
  navigate(-1)
  //navigate("/login", { replace: true });

}

  return (
    <div className='row'>
      <div className='col-3 px-3 mt-3'>
        <div className="list-group w-100">
          <Link to="" className="list-group-item list-group-item-action ">  Profile</Link>
          <Link to="setting" className="list-group-item list-group-item-action">Settings</Link>
          <Link to="/login" onClick={logout} className="list-group-item list-group-item-action">Logout</Link>
        </div>
      </div>


      <Outlet />


    </div>
  )
}
