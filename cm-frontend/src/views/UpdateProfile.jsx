import React from 'react'
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [userType, setUserType] = useState("student");
  const [disabled, setDisabled] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [count, setCount] = useState(0);
  const [collageFields, setCollageFields] = useState([{ name1: "kumar", email1: "ap@gmail.com" }]);

  const navigate = useNavigate();


  const submitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email, password, fullName, dob, userType }))
    //postData();
  }
  const selectImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => { setProfileImage(); };

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
      <form className='' onSubmit={submitForm}>
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

                        <button className='btn btn-primary mt-3 ' style={{width:"160px"}} onClick={removeSelectedImage}>
                          Update
                        </button>
                        <br/>
                        <button className='btn btn-danger mt-3'style={{width:"160px"}} onClick={removeSelectedImage}>
                          Remove
                        </button>
                      </div>


                    </div>
                  ) :
                  <div className='row'>
                    <div className="col">
                      <img className="circuler-img border" src={require('../logo.svg')} alt="profile imge" />
                    </div>
                    <div className="col">
                      <label htmlFor="files" className='btn btn-primary mt-3 ' style={{width:"160px"}}>Change Profile</label>
                      <input accept="image/*" type="file" id="files" onChange={selectImage} className=" hidden mt-3 " style={{ display: "none" }} />

                    </div>
                  </div>
                }

              </div>
            </div>
          </div>

          <div className='col-9'>
            <h3>Update Profile</h3>
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
                  value={email} disabled={disabled} required
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

                <input className="form-check-input" type="radio" name="userType" id="rStudent" checked
                  value={"student"} disabled={disabled} required
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="rStudent">
                  Student
                </label>

                <input className="form-check-input" type="radio" name="userType" id="rTeacher"
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
                  value={fullName} disabled={disabled} rows="3"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <hr></hr>
            <div className="row">
              <div className="col"> <h5>Add College</h5></div>
              <div className="col text-end">

                <button className="btn btn-primary " type="button" onClick={(e) => addFormFields()}>Add</button>


              </div>
            </div>


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
                      <div className="col"><div class="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Please check, if you <b>presently</b> working/joined here
                          </label>
                      </div></div>
                    </div>
                  </div>
                </div>
              )

            }

            <hr />
            <div className="mb-3">
              <div className="row">
                <div className="col"> <button type="submit" className="btn btn-primary rounded-1  w-100">{disabled ? < AiOutlineLoading3Quarters /> : ""} Update</button></div>
                <div className="col "> </div>
                <div className="col "> </div>
                <div className="col "> </div>
              </div>
            </div>





          </div>
        </div>

      </form >
    </div >

  )
}
