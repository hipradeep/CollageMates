import React from 'react'
import Alpha from './Alpha'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import NoPage from '../error/NoPage';
import Index from './Index';
import Home from './Home';
import Profile from './Profile';
import NoPage2 from '../error/NoPage2';
import UpdateProfile from './UpdateProfile';
import ProfileSide from './ProfileSide';
import Setting from './Setting';
import Option2 from './Option2';
export default function DashBoard() {
    return (
        <div className='container px-5'>
            <Routes>

                <Route path="/" element={<Index />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='opt2' element={<Option2 />} />
                    <Route path="profile/*" element={<Profile />} />
                    <Route path="*" element={<NoPage2 />} />
                </Route>


            </Routes>


        </div>
    )
}
