import React from 'react'
import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState();
  const [bio, setBio] = useState();
  const [userType, setUserType] = useState("student");
  const [address, setAddress] = useState();
  const [disabled, setDisabled] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [count, setCount] = useState(0);
  const [collageFields, setCollageFields] = useState([{ name1: "kumar", email1: "ap@gmail.com" }]);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setEmail();
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('userId'))
    console.log(localStorage.getItem('user_profile_name'))
    console.log(localStorage.getItem('user_address'))
    console.log(localStorage.getItem('user_bio'))
    console.log(localStorage.getItem('email'))

    setEmail(localStorage.getItem('email'))
    setDob(localStorage.getItem('dob'))
    setFullName(localStorage.getItem('user_profile_name'))
    setUserType(localStorage.getItem('user_type'))
    setAddress(localStorage.getItem('user_address'))
    setBio(localStorage.getItem('user_bio'))


  }, []);



  async function sendUpdateProfileImage() {
    setDisabled(true)

    console.log(localStorage.getItem('token'));

    let formdata = new FormData()
    formdata.append('image', profileImage)


    try {


      const res = await axios.post(`http://localhost:8080/api/users/image/${localStorage.getItem('userId')}`,
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
          localStorage.setItem('profile_url', res.data.profileUrl)
          //alert("Post Created Successfully")
          setProfileImage("")

        })
        .catch(err => {
          alert(err)
          setDisabled(false)
        });
    } catch (error) {
      console.log(error)
      setDisabled(false)
    } finally {

      setDisabled(false)
    }

  }
  async function sendUpdateProfileData() {
    setDisabled(true)

    console.log(localStorage.getItem('token'));

    const updatedData = {
      name: fullName, dob, email, userType, address, bio
    }

    try {

      const res = await axios.post(`http://localhost:8080/api/users/${localStorage.getItem('userId')}`,
        updatedData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,

          'Content-Type': 'application/json',

        }
      })
        .then(res => {
          console.log(res)
          setDisabled(false)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data.data.id)
          localStorage.setItem('user_profile_name', res.data.data.name)
          localStorage.setItem('user_address', res.data.data.address)
          localStorage.setItem('user_bio', res.data.data.bio)
          localStorage.setItem('profile_url', res.data.data.profileUrl)
          localStorage.setItem('email', res.data.data.email)
          localStorage.setItem('dob', res.data.data.dob)
          localStorage.setItem('user_type', res.data.data.userType)

          alert("Profile Updated Successfully")


        })
        .catch(err => {
          alert("Something went wrong!")
          setDisabled(false)
        });
    } catch (error) {
      console.log(error)
      alert("Something went wrong!")
      setDisabled(false)
    } finally {

      setDisabled(false)
    }

  }



  const selectImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => { setProfileImage(); };

  const updateProfilePic = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify({ email, password, fullName, dob, userType }))
    sendUpdateProfileImage();
  }

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify({ email, password, fullName, dob, userType }))
    sendUpdateProfileData()
  }




  const handleChange = (i, e) => {
    let formValues = collageFields
    formValues[i][e.target.name] = e.target.value;
    setCollageFields(formValues)
  }
  const addFormFields = () => {
    setCount(count + 1)
    setCollageFields((prevState) => ([...prevState, { name1: `pradeep${count}`, email1: `pradeep${count}@gmail.com` }]))

  }
  const removeFormFields = (e, i) => {

    let formValues = [...collageFields]

    formValues.splice(i, 1);

    setCollageFields(formValues);


  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(collageFields));
  }

  return (
    <div className='container  px-5 mt-3'>

      <div className="row">
        <div className="col-3">
          <div className="container ">

            <div className=" text-center mt-3">

              {profileImage
                ? (
                  <div className='row'>
                    <div className="col">
                      <img className="circuler-img bg"
                        src={URL.createObjectURL(profileImage)}
                        alt="Thumb"
                      />
                    </div>
                    <div className="col">

                      <button className='btn btn-primary mt-3 ' style={{ width: "160px" }} onClick={updateProfilePic}>
                        Update
                      </button>
                      <br />
                      <button className='btn btn-danger mt-3' style={{ width: "160px" }} onClick={removeSelectedImage}>
                        Remove
                      </button>
                    </div>
                  </div>
                ) :
                <div className='row'>
                  <div className="col">
                    {

                     
                      <img className="circuler-img border" src={`http://localhost:8080/api/post/image/${localStorage.getItem('profile_url')}`} alt="profile imge" />
                      
                     // <img className="circuler-img border" src={require('../images/avatar.png')} alt="profile imge" />

                    }
                  </div>
                  <div className="col">
                    <label htmlFor="files" className='btn btn-primary mt-3 ' style={{ width: "160px" }}>Change Profile</label>
                    <input accept="image/*" type="file" id="files" onChange={selectImage} className=" hidden mt-3 " style={{ display: "none" }} />

                  </div>
                </div>
              }

            </div>
          </div>
        </div>

        <div className='col-9'>
          <h3>Update Profile</h3>
          <div className="row">
            <div className="col">
              <form className='' onSubmit={submitForm}>


                <div className="row my-3">
                  <div className="col mb-3">

                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control rounded-1" id="fullName" placeholder="Enter your name"
                      value={fullName} disabled={disabled} required
                      onChange={(e) => setFullName(e.target.value)}
                    />

                  </div>
                  <div className="col mb-3">

                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control rounded-1" id="email" aria-describedby="emailHelp" placeholder="Enter your email"
                      value={email} required
                     onChange={(e) => setEmail(e.target.value)}
                    />

                  </div>

                </div>


                <div className="row">
                  <div className="col mb-3">

                    <label htmlFor="dob" className="form-label">Date of birth</label>
                    <input type="date" className="form-control rounded-1" id="dob" min="01-01-1950" max={new Date().toLocaleDateString('en-ca')}
                      value={dob} disabled={disabled} required
                      onChange={(e) => setDob(e.target.value)}
                    />

                  </div>
                  <div className="col">

                    {/* empty */}

                  </div>
                </div>

                <div className="row">
                  <p>Select User type    </p>

                  <div className="col mb-3 userType">

                    <input className="form-check-input" type="radio" name="userType" id="rStudent"

                      checked={userType == 'student' ? true : false}
                      value={"student"} disabled={disabled} required
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="rStudent">
                      Student
                    </label>

                    <input className="form-check-input" type="radio" name="userType" id="rTeacher"
                      checked={userType == 'teacher' ? true : false}
                      value={"teacher"} disabled={disabled} required
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="rTeacher">
                      Teacher
                    </label>

                  </div>
                </div>


                <div className="row">
                  <div className="col mb-3">

                    <label htmlFor="boi" className="form-label">Bio</label>
                    <textarea className="form-control rounded-1" id="boi" placeholder="Enter somthing about you!"
                      value={bio} disabled={disabled} rows="3"
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </div>

                <hr />
                <div className="mb-3">
                  <div className="row">
                    <div className="col"> <button type="submit" className="btn btn-primary rounded-1  w-100">{disabled ? < AiOutlineLoading3Quarters /> : ""} Update Profile</button></div>

                    <div className="col "> </div>
                    <div className="col "> </div>
                  </div>
                </div>

              </form>
              <hr></hr>
            </div>
          </div>


          <div className="row">
            <div className="col"> <h5>Add College</h5></div>
            <div className="col text-end">

              <button className="btn btn-primary " type="button" onClick={(e) => addFormFields()}>Add</button>


            </div>


          </div>


          <div className="row">
            <div className="col">
              {

                collageFields.map((e, index) =>
                  <div className="row my-4" key={index}  >
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col"> <label htmlFor="searchCollege" className="form-label">Search college</label></div>
                            <div className="col text-end">
                              {
                                index ?
                                  <button type="button" className="btn btn-danger" onClick={(e) => removeFormFields(e, index)}>Remove</button>
                                  : null
                              }
                            </div>
                          </div>

                          <input type="text" className="form-control rounded-1 mt-3" id="searchCollege" placeholder="Enter your school/college name"
                            value={""} disabled={disabled}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col">
                          <label htmlFor="dob" className="form-label">Join Date</label>
                          <input type="date" className="form-control rounded-1" id="dob" min="01-01-1950" max={new Date().toLocaleDateString('en-ca')}
                            value={""} disabled={disabled} required
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="dob" className="form-label">Last Date</label>
                          <input type="date" className="form-control rounded-1" id="dob" min="01-01-1950" max={new Date().toLocaleDateString('en-ca')}
                            value={""} disabled={disabled} required
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>

                      </div>
                      <div className="row mt-3">
                        <div className="col"><div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Please check, if you <b>presently</b> working/joined here
                          </label>
                        </div></div>
                      </div>
                    </div>
                  </div>
                )

              }

            </div>

            <div className="row">
              <div className="col">

                <hr />
                <div className="mb-3">
                  <div className="row">
                    <div className="col"> <button type="submit" className="btn btn-primary rounded-1  w-100">{disabled ? < AiOutlineLoading3Quarters /> : ""} Update College</button></div>
                    <div className="col "> </div>
                    <div className="col "> </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div >

  )
}
