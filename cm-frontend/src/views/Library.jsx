import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
export default function Library() {
  return (
    <div className='m-3'>

      <div className="row shadow-sm p-3 mb-5 bg-body rounded ">
        <div className="col p-5">

          <img className="card-img-top picture" src={require('../images/booka_img.jpg')} alt="BigCo Inc. logo" />

        </div>
        <div className="col">
          <div className="row">
            <div className=' position-relative' style={{ height: "300px" }}>

              <div className='position-absolute top-50 start-50 translate-middle w-100 px-5 pb-5' >

                <h2>Public Libary</h2>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search books, pdf..." aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>

          </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <Link to="" className="btn btn-primary mt-2">Add books and pdf</Link>
            </div>

          </div>
   
      </div>

      <div className="row" hidden>
        <div className="col">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">High ranking colleges </h5>
                  <p className="card-text">Explore the top most college around the world</p>
                  <Link to="#" className="">View</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Latest added college on this site</h5>
                  <p className="card-text">See the recently added indian college</p>
                  <Link to="#" className="">View</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="row" style={{ height: "200px" }}>


      </div>
    </div>
  )
}
