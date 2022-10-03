import React from 'react'
import FeedList from '../components/FeedList'
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import api from "../api/api";
import axios from 'axios';
export default function Post() {

    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [image, setImage] = useState();
    const [category, setCategory] = useState(1);


    async function sendPostData() {
        setDisabled(true)

        console.log(localStorage.getItem('token'));

        let formdata = new FormData()
        formdata.append('image', image)
        formdata.append('title', postTitle)
        formdata.append('desc', postDescription)

        formdata.append('category', category)

        try {

            
            const res = await axios.post(`http://localhost:8080/api/user/${localStorage.getItem('userId')}/posts`,
            formdata, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(res => {
                    console.log(res)
                    setDisabled(false)
                    alert("Post Created Successfully")
                    setPostTitle("")
                    setPostDescription("")
                    setImage("")

                })
                .catch(err => {
                    alert(err)
                    setDisabled(false)
                });
        } catch (error) {
            console.log(error)
            setDisabled(false)
        }finally{
       
            setDisabled(false)
        }
    }
    const selectImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => { setImage(); };

    const submitForm = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify({ email, password, fullName, dob, userType }))
        sendPostData();
    }

    return (
        <div>
            <div className='row'>
                <div className="col-3"></div>
                <div className='col-9  px-3 mt-3'>
                    <h3>Write Post </h3>
                    <form  id='postForm' className='' onSubmit={submitForm}>
                        <div className="row">
                            <div className="row my-3">

                                <div className="col">

                                    <label htmlFor="posttitle" className="form-label">Post title</label>
                                    <input type="text" className="form-control rounded-1" id="posttitle" placeholder="Enter post title!"
                                        value={postTitle} disabled={disabled} required autocomplete="off"
                                        onChange={(e) => setPostTitle(e.target.value)}
                                    />

                                </div>

                            </div>
                            <div className="row">

                                <div className="col mb-3">

                                    <label htmlFor="postdesc" className="form-label">Post description</label>

                                    <textarea className="form-control rounded-1" id="postdesc" placeholder="Post description....."
                                        value={postDescription} disabled={disabled} rows="4"
                                        onChange={(e) => setPostDescription(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="row ">
                                <div className="col">
                                    <label htmlFor="category" className="form-label">Slect post category</label>
                                    <select class="form-select" aria-label="Default select example" id="category" onChange={(e) => setCategory(e.target.value)}>
                                        <option selected value="1">Story</option>
                                        <option value="2">Event</option>
                                        <option value="3">Placement</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {
                                        image ?
                                            <div className='row'>
                                                <div className="col">
                                                    <img className="circuler-img bg" style={{ width: "160px", height: "80px" }}
                                                        src={URL.createObjectURL(image)}
                                                        alt="Thumb"
                                                    />
                                                </div>
                                                <div className="col">

                                                    <button className='btn btn-danger mt-3' style={{ width: "160px" }} onClick={removeSelectedImage}>
                                                        Remove
                                                    </button>
                                                </div>


                                            </div>
                                            :
                                            <div className='row'>
                                                <div className="col">
                                                    <img className="circuler-img border" style={{ width: "160px", height: "80px" }} src={require('../images/no_image.jpg')} alt="profile imge" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="files" className='btn btn-primary mt-3 ' style={{ width: "160px" }}>Select image</label>
                                                    <input accept="image/*"   type="file" id="files" onChange={selectImage} className=" hidden mt-3 " style={{ display: "none" }} />

                                                </div>
                                            </div>
                                    }


                                </div>
                            </div>
                            <hr className='mt-5' />
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col"> <button type="submit" className="btn btn-primary rounded-1  w-100">{disabled ? < AiOutlineLoading3Quarters /> : ""} Post</button></div>
                                    <div className="col "> </div>
                                    <div className="col "> </div>
                                    <div className="col "> </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>




        </div>
    )
}
