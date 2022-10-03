import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

import { useState, useEffect } from "react";

import { BiArrowBack } from "react-icons/bi";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import api from "../api/api";
export default function CollegePage() {

  const [disabled, setDisabled] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [list, setList] = useState(false);

  async function getSearchColleges() {
    setDisabled(true)
    try {
      const res = await api.get(`/college/search/${searchKey}`)
        .then(res => {
          console.log(res)
          setDisabled(false)
          if (res.data.status) {

            setList(res.data.data);

          } else {
            alert("Something went wrong")
          }

        })
        .catch(err => {
          setDisabled(false)
          console.log('Login: ', err)
          alert("Something went wrong")
        }).finally(() => {

        });
    } catch (error) {
      setDisabled(false)
      console.log(error)

    }
  }
  const submitForm = (e) => {
    e.preventDefault();
    getSearchColleges()
  }



  return (
    <div className='m-3'>

      <div className="row shadow-sm p-3 mb-5 bg-body rounded ">
        <div className="col p-5">

          <img className="card-img-top picture" src={require('../images/collage_pic.jpg')} alt="BigCo Inc. logo" />

        </div>
        <div className="col">
          <div className="row">
            <div className=' position-relative' style={{ height: "300px" }}>

              <div className='position-absolute top-50 start-50 translate-middle w-100 px-5 pb-5' >

                <h2>Search College</h2>
                <form onSubmit={submitForm} className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search colleges..." aria-label="Search"
                    value={searchKey} disabled={disabled} required
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>


              </div>


            </div>
          </div>

          <div className="row ">
            <div className="col text-end">
              Don't find college page
            </div>

          </div>
          <div className="row">
            <div className="col text-end">
              <Link to="/home/add-colleges" className="btn btn-primary mt-2">Create college page</Link>
            </div>

          </div>
        </div>
      </div>

      <div className="row">
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
      {
        list ? <h3 className='mt-5'>Searched Colleges</h3> : ""
      }

      <div className="row mt-5">
        <div className="col">


          <ul> {
            list ?

              list.map((e, index) => {

                return (

                  <li key={index}>


                    <div className="row ">
                      <div className="col-1 ">
                        <div className="box">

                          {
                            !e.purl ?
                              <img className="card-img-top picture" src={`http://localhost:8080/api/post/image/${e.purl}`} style={{ width: "80px", height: "80px" }} alt="profile imge" />
                              :
                              <img className="card-img-top picture" src={require('../images/no_image.jpg')} style={{ width: "80px", height: "80px" }} alt="profile imge" />

                          }
                        </div>
                      </div>
                      <div className="col-11 ">
                        <div className="mx-3">
                          <div className='feedHeading'>
                            <strong className=''>  {e.name}</strong>
                          </div>
                          <div className='feedSubHeading'>
                            <strong>Address</strong>  {e.address}
                          </div>

                          <div className="row">
                            <div className="col-10 ">

                              <strong className='me-3'>Pincode</strong>{e.pincode}
                              <strong className='ms-3'>State</strong> {e.state}
                              <strong className='ms-3'>, </strong> {e.country}

                            </div>

                          </div>

                        </div>

                      </div>
                    </div>
                    <hr className='mb-4' />

                  </li>
                )


              })
              :
              <div className="col">
                ""
              </div>





          } </ul>
        </div>



      </div>

      <div className="row" style={{ height: "200px" }}>


      </div>
    </div>



  )
}
