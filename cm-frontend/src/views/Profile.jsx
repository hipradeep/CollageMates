import React from 'react'
import { Link } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";

export default function Profile() {
  return (
    <div className="">

      <div className='row'>
        <div className='col-3 px-3 mt-3'>
          <div class="list-group w-100">
            <Link to="#" class="list-group-item list-group-item-action active">  Profile</Link>
            <Link to="#" class="list-group-item list-group-item-action">Settings</Link>
            <Link to="#" class="list-group-item list-group-item-action">Logout</Link>
          </div>
          {/* <Link to="/home" >Back</Link> */}
        </div>
        <div className='col-9  px-3 mt-3'>
          <div className="row">

            <div className="col-2">

              <div className="rounded-circle border border-info avatar">

                <img class="card-img-top" src={require('../logo.svg')} alt="BigCo Inc. logo" />
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

              <div className="bg-light px-3 editBtn"><RiEditLine /> Edit</div>
            </div>
          </div>
          <div className="row">
            <div >
            <div className='text-start mt-5 mb-1'>
              <div className='feedSubHeading'>
                <b>Following</b> 125
                <b className='ms-3'>Mates</b> 500
              </div>
              
            </div>

            <div className='text-end bg'>
              pradeep
            </div>
            </div>
           
          </div>
          <hr/>




        </div>
      </div>


    </div>
  )
}
