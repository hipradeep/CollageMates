import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import ProfileManu from './ProfileMenu';

import Setting from './Setting';

import NoPage from '../error/NoPage';

export default function ProfilePage() {
  return (
    <div >
        <Routes>
           <Route path="/" element={<ProfileManu />} >
             <Route index element={<Profile />}/>
             <Route  path="" element={<Profile />}/>
             <Route path="setting" element={<Setting />} />
             <Route path="*" element={<NoPage />} />

             
          </Route>
          <Route path="updateprofile" element={<UpdateProfile />}/>
        </Routes>


    </div >
  )
}
