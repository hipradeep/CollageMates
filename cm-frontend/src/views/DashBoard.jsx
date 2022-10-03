import React from 'react'
import Alpha from './Alpha'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import NoPage from '../error/NoPage';
import { useState, useEffect } from "react";
import Home from './Home';
import ProfilePage from './ProfilePage';
import AboutUs from './AboutUs';
import Collages from './CollegePage';
import Library from './Library';
import Post from './Post';
import { useNavigate } from "react-router-dom";
import Contact from './Contact';
import AddCollege from './AddCollege';
export default function DashBoard() {
   

    return (
        <div className='container px-5'>
            <Routes>

                <Route path="/" element={<Header />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='creat-post' element={<Post />} />
                    <Route path='library' element={<Library />} />
                    <Route path='colleges' element={<Collages />} />
                  
                    <Route path='add-colleges' element={<AddCollege />} />
                    <Route path='about-us' element={<AboutUs />} />
                    <Route path='contact-us' element={<Contact />} />
                    <Route path="profile/*" element={<ProfilePage />} />

                </Route>
               
                <Route path="*" element={<NoPage />} />

            </Routes>


        </div>
    )
}
