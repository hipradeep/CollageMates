import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import api from "../api/api";

export default function Profile() {

  const [user, setUser] = useState({});



  useEffect(() => {


    console.log(localStorage.getItem('userId'))

    profileData();

  }, []);

  async function profileData() {

    try {
      const res = await api.get(`/users/${localStorage.getItem('userId')}`)
        .then(res => {
          console.log(res)

          if (res.data.status) {
            setUser(res.data.data);

          } else {
            alert(res.data.message)
          }

        })
        .catch(err => {
          console.log('Login: ', err)
          alert(err.data.message)
        }).finally(() => {

        });
    } catch (error) {
      console.log(error)

    }
  }



  return (
    <div className='col-9  px-3 mt-3'>
      <div className="row">

        <div className="col-2">

          <div className="border-info ">
            {

         
                <img className="circuler-img3 border" src={`http://localhost:8080/api/post/image/${localStorage.getItem('profile_url')}`} alt="profile imge" />
            
                // <img className="circuler-img3 border" src={require('../images/avatar.png')} alt="profile imge" />

            }

          </div>

        </div>
        <div className="col-8">

          <div className="col">
            <div className='fs-3'>{user.name}</div>
            <div className='fs-6'>{user.bio}</div>
            <div className='fs-6'>Birthday : {user.dob}</div>
            <div className='fs-6 mt-1'><GoLocation className='text-primary me-2' />{user.address}</div>

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
        <div className="col text-end ">   <button className='btn btn-primary rounded-5 px-4 '>Add</button>    </div>

      </div>
      <hr />
      <div className="row">
        <h4>Colleges</h4>

        {
          user.colleges ?

            user.colleges.map((e, index) => {

              return (
                <div className="row  mt-3">
                  <div className="col-1">
                    <div className="box">
                      {
                        (index == 0) ?
                          <img className="card-img-top picture" src={require('../images/college1.jpg')} alt="BigCo Inc. logo" />
                          :
                          <img className="card-img-top picture" src={require('../images/college2.jpg')} alt="BigCo Inc. logo" />
                      }

                    </div>
                  </div>
                  <div className="col-11 px-3">
                    <div className="mx-3">
                      <div className='feedHeading'>
                        {user.colleges[index].name}
                      </div>
                      <div className='feedSubHeading'>
                        <strong> Address : </strong>{user.colleges[index].address}
                        <strong> State : </strong>{user.colleges[index].state}
                        <strong> Pin : </strong>{user.colleges[index].pincode}
                      </div>

                      <div className=' mt-2'>
                        <strong> Join date : </strong>  12-10-2015
                        <strong> Last date : </strong> 12-10-2019

                      </div>

                    </div>


                  </div>
                  <hr className='mt-3'></hr>
                </div>

              )


            })

            :

            <div className="col">
              Null
            </div>
        }


      </div>




    </div>
  )
}
