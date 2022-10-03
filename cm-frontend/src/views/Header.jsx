import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand mt-3">
                <div className="col-3">
                    <div className='text-start   '>
                        <h2 className='title  p-2'>CollageMates</h2>
                    </div>
                </div>
                <div className="col-9">

                    <div className="collapse navbar-collapse  " id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to=""><div className='nav-link active'>Home</div></Link>
                             
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="colleges">Colleges</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="library">Library</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact-us">Contact</Link>
                            </li>
                        </ul>
                        
                    </div>

                </div>

            </nav>
            <hr className='mx-3'/>
            <Outlet />

        </div>
    )
}
