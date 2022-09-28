import React from 'react'
import { Routes, Route, Outlet} from 'react-router-dom'
import Profile2 from './Profile'
import UpdateProfile from './UpdateProfile'

export default function Alpha() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Outlet />} >
      <Route index element={<Profile2 />} />
      <Route path="/updateprofile" element={<UpdateProfile />} />
      </Route>
        
      </Routes>
    </div>
  )
}
