import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
export default function Profile2() {
  return (
    <div className='col-9  px-3 mt-3 bg'>
    <div className="row">

      <div className="col-2">

        <div className="rounded-circle border border-info avatar">

          <img className="card-img-top" src={require('../logo.svg')} alt="BigCo Inc. logo" />
        </div>

      </div>
      <div className="col-8">

        <div className="col">
          <div className='fs-3'>Pradeep maurya</div>
          <div className='fs-6'>Student Computer Science</div>
          <div className='fs-6 mt-1'><GoLocation className='text-primary me-2' />Lucknow Utter Pradesh</div>

        </div>

      </div>
      <div className='col-2'>
        <Link to='updateprofile'>
        <div className="bg-light px-3 editBtn"><RiEditLine /> Edit</div>
        </Link>
      </div>
    </div>
    <div className="row mb-1 mt-5 feedSubHeading">
      <div className="col">
        <b>Following</b> 125 <b className='ms-3'>Mates</b> 500
      </div>
      <div className="col text-end ">     <button className='btn btn-primary rounded-5 px-4 '>Add</button>    </div>

    </div>
    <hr />




  </div>
  )
}
