import React from 'react'
import { ReactComponent as HomePageImage } from '../login-page-img.svg';
import '../App.css';
import { Outlet, Link } from "react-router-dom";
export default function Registration() {
  return (
    <>

      <div className='container-fluid'>
        <div className="row">

          <div className="col w-100">

            <div className='bgImage' >
              {/* <img src="./login-page-img.svg" alt="BigCo Inc. logo" /> */}
              {/* <img className='homePageImage' src={require('../login-page-img.svg')}  alt="home page image"/> */}

              <div className='text-center p-3'>
                <h1 className='title  p-2'>CollageMates</h1>
              </div>
            </div>

          </div>

          <div className="col"> 
          
          
          <Outlet />
          
          
          </div>
        </div>

      </div>

    </>
  )
}
