import React from 'react'
import { Link } from 'react-router-dom'
import FeedList from '../components/FeedList'
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import '../App.css';
export default function Home() {

    useEffect(() => {  
        console.log("Getting Local data");
       console.log(localStorage.getItem('token'))

      }, []);


    return (
        <div className='row'>
            <div className='col-3 px-3 mt-3'>
                <div className="card w-100" >

                    <img className="card-img-top" src={require('../logo.svg')} alt="BigCo Inc. logo" />

                    <div className="card-body">
                        <h4 className="card-title">Pradeep Maurya</h4>
                        <p className="card-text feedSubHeading">Computer Science 2nd year</p>

                        <div className='text-start mt-1 mb-3'>
                            <div className='feedSubHeading'>
                                <b>Following</b> 125
                                <b className='ms-3'>Mates</b> 500
                            </div>

                        </div>
                        <Link to="/home/profile"> See Profile</Link>
    

                    </div>
                </div>
                <div  className='text-center'>
                <Link to=" ">
                            <button type="submit" className="btn btn-primary  rounded-5 mt-3 postCreateBtn">Post <FiEdit/></button></Link>  
                </div>
              
               
            </div>
            <div className='col-9  px-3 mt-3'>
                <FeedList />

            </div>
        </div>
    )
}
