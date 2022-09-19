import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand mt-3">
                <div className="col-3">
                    <div className='text-start   '>
                        <h2 className='title  p-2'>CollageMates</h2>
                    </div>
                </div>
                <div class="col-9">

                    <div class="collapse navbar-collapse  " id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home"><div className='nav-link active'>Home</div></Link>
                             
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Option 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Option 2</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                </div>

            </nav>

        </>
    )
}
