import React from 'react'
import Alpha from './Alpha'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import NoPage from '../error/NoPage';
import Index from './Index';
import Home from './Home';
import Profile from './Profile';
import NoPage2 from '../error/NoPage2';
export default function DashBoard() {
    return (
        <div className='container px-5'>

            <Routes>

                <Route path="/" element={<Index />} >
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NoPage2 />} />
                </Route>


            </Routes>


        </div>
    )
}
