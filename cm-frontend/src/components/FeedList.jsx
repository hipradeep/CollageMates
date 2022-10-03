import React from 'react'
import '../App.css';
import { FaHeart } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

import { useState, useEffect } from "react";
import api from "../api/api";

export default function FeedList() {

    const [posts, setPosts] = useState({});
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {


        console.log(localStorage.getItem('userId'))

        postData();

    }, []);

    async function postData() {

        try {
            const res = await api.get(`/posts?pageNumber=${pageNumber}&pageSize=${10}`)
                .then(res => {
                    console.log(res)

                    if (res.data.status) {

                        console.log(res.data.data.content[0].category.categoryTitle);
                        setPosts(res.data.data);

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

    const increasePage = () => {

        console.log(pageNumber);
        if (pageNumber < posts.totalPages) {
            setPageNumber(pageNumber + 1);
        }
        console.log(pageNumber);
        postData();
    };
    const decreasePage = () => {
        console.log(pageNumber);

        if (pageNumber >= 1) {
            setPageNumber(pageNumber - 1);
        } else {
            setPageNumber(0);
        }

        if (pageNumber >= 0) {
            postData()
        }

        console.log(pageNumber);
    };

    return (
        <div>
            <div className="row mb-5">
                <div className="col ps-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Secarch....." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col  ">
                    <nav aria-label="" className=' '>

                        <ul className="pagination d-flex justify-content-end ">
                            <li className="page-item ">
                                <button className="page-link" onClick={decreasePage} aria-disabled="true" >Previous</button>
                            </li>

                            <li className="page-item">

                                <button className="page-link" onClick={increasePage} aria-disabled="true">Next</button>
                            </li>
                        </ul>


                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul> {
                        posts.content ?

                            posts.content.map((e, index) => {

                                return (

                                    <li key={index}>

                                        {/* {myList} */}

                                        <div className="row ">
                                            <div className="col-1 ">
                                                <div className="box">
                                                    <img className="card-img-top picture" src={`http://localhost:8080/api/post/image/${e.imageName}`} style={{ width: "80px", height: "80px" }} alt="post image" />
                                                </div>
                                            </div>
                                            <div className="col-11 ">
                                                <div className="mx-3">
                                                    <div className='feedHeading'>
                                                    <strong className=''>  {e.title}</strong>
                                                    </div>
                                                    <div className='feedSubHeading'>
                                                        {e.content}
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-10 ">

                                                            <strong className='me-3'>Category</strong>{e.category.categoryTitle}
                                                            <strong className='ms-3'>Author</strong> {e.user.name}

                                                        </div>
                                                        <div className="col-2 text-end mt-2"> <FaHeart className='mx-3' />
                                                            <BsFillChatLeftDotsFill className='ms-2' /></div>
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
                                Null
                            </div>





                    } </ul>
                </div>
            </div>

        </div>
    )
}
