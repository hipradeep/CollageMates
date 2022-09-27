import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import Profile2 from './Profile2';
import UpdateProfile from './UpdateProfile';
import ProfileSide from './ProfileSide';
import Alpha from './Alpha';
import Setting from './Setting';
import NoPage3 from '../error/NoPage3';

export default function Profile() {
  return (
    <div >

  
        <Routes>
           <Route path="/" element={<ProfileSide />} >
             <Route index element={<Profile2 />}/>
             
             <Route path="setting" element={<Setting />} />
             <Route path="updateprofile" element={<UpdateProfile />}/>
             <Route path="*" element={<NoPage3 />} />
          </Route>
          
        </Routes>





    </div >
  )
}
