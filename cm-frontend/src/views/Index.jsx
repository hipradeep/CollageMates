import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Index() {
    return (
        <div >
            <Header />
            <hr className='mx-3'/>
            <Outlet />
        </div>
    )
}
