import React from 'react'
import { Link } from 'react-router-dom'
import FeedList from '../components/FeedList'
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import '../App.css';

export default function Home() {

    const [isNull, setIsNull] = useState(false);
    const [localProfileImage, setLocalProfileImage] = useState("adshai");


    useEffect(() => {
        console.log("Getting Local data");
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('userId'))
        console.log(localStorage.getItem('user_profile_name'))
        console.log(localStorage.getItem('user_address'))
        console.log(localStorage.getItem('user_bio'))
        console.log(localStorage.getItem('email'))
        console.log(localStorage.getItem('dob'))
        console.log(localStorage.getItem('user_type'))
        console.log("ProfileImage");

        setLocalProfileImage(localStorage.getItem('profile_url'))


        if (localProfileImage == null) {
            console.log("Null h")
        } else {
            console.log("Null nahi h")
        }



    }, []);

    function isEmpty(str) {
        return (!str || str.length === 0);
    }


    return (
        <div className='row'>
            <div className='col-3 px-3 mt-3'>
                <div className="card w-100" >

                    <div className="text-center mt-3">
                        <div className="border-info  ">


                            {

    
                                    <img className="circuler-img3 border" src={`http://localhost:8080/api/post/image/${localStorage.getItem('profile_url')}`} alt="profile imge" />
                                    
                            }

                        </div></div>

                    <div className="card-body">
                        <h4 className="card-title">{localStorage.getItem('user_profile_name')}</h4>
                        <p className="card-text feedSubHeading">{localStorage.getItem('user_bio')}</p>

                        <div className='text-start mt-1 mb-3'>
                            <div className='feedSubHeading'>
                                <b>Following</b> 125
                                <b className='ms-3'>Mates</b> 500
                            </div>
                        </div>
                        <Link to="/home/profile"> See Profile</Link>


                    </div>
                </div>
                <div className='text-center'>
                    <Link to="creat-post">
                        <button type="submit" className="btn btn-primary  rounded-5 mt-3 postCreateBtn">Post <FiEdit /></button></Link>
                </div>


            </div>
            <div className='col-9  px-3 mt-3'>



                <FeedList />

            </div>
        </div>
    )
}
