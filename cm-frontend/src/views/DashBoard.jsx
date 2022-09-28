import React from 'react'
import Alpha from './Alpha'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import NoPage from '../error/NoPage';

import Home from './Home';
import ProfilePage from './ProfilePage';
import AboutUs from './AboutUs';
import Collages from './CollegePage';
import Library from './Library';
export default function DashBoard() {
    return (
        <div className='container px-5'>
            <Routes>

                <Route path="/" element={<Header/>} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='library' element={<Library />} />
                    <Route path='colleges' element={<Collages />} />
                    <Route path='about-us' element={<AboutUs />} />
                    <Route path="profile/*" element={<ProfilePage />} />
                   
                </Route>
                <Route path="*" element={<NoPage />} />

            </Routes>


        </div>
    )
}
