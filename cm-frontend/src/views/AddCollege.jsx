import React from 'react'
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';
export default function AddCollege() {

    const [collegeName, setCollegeName] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("India");
    const [disabled, setDisabled] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
       
        addCollegeData()
    }
    async function addCollegeData() {
        setDisabled(true)
    
        console.log(localStorage.getItem('token'));
    
        const updatedData = {
          name: collegeName, address, state, pincode, country
        }
    
        try {
    
          const res = await axios.post( `http://localhost:8080/api/college/`,
            updatedData, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,

              'Content-Type': 'application/json',
    
            }
          })
            .then(res => {
              console.log(res)
              setDisabled(false)
              setCollegeName("")
              setPincode("")
              setState("")
              setCountry("")
              setAddress("")
        
              alert("Collage added successfully")
    
    
            })
            .catch(err => {
                alert("Something went wrong")
              setDisabled(false)
            });
        } catch (error) {
            alert("Something went wrong")
          setDisabled(false)
        } finally {
    
          setDisabled(false)
        }
    
      }
    
    return (
        <div>
            <div className="col">
                <div className="row">
                    <div className="col p-3">
                        <img className="card-img-top picture" src={require('../images/college_wall.jpg')} alt="BigCo Inc. logo" />

                    </div>
                </div>
                <h2>Add Your College</h2>


                <div className="row px-5">
                    <div className="col ">

                        <form className='' onSubmit={submitForm}>
                            <div className="col">
                                <div className="row my-3">
                                    <div className="col mb-3">

                                        <label htmlFor="collegeName" className="form-label">College Name</label>
                                        <input type="text" className="form-control rounded-1" id="collegeName" placeholder="Enter your college name"
                                            value={collegeName} disabled={disabled} required autoComplete='off'
                                            onChange={(e) => setCollegeName(e.target.value)}
                                        />

                                    </div>


                                </div>
                                <div className="row my-3">
                                    <div className="col mb-3">
                                        <label htmlFor="pincode" className="form-label">Pincode</label>
                                        <input type="text" className="form-control rounded-1" id="pincode" aria-describedby="emailHelp" placeholder="Enter area pincode"
                                            value={pincode} required autoComplete='off'
                                            onChange={(e) => setPincode(e.target.value)}
                                        />

                                    </div>
                                    <div className="col mb-3">

                                        <label htmlFor="state" className="form-label">State</label>
                                        <input type="text" className="form-control rounded-1" id="state" placeholder="Enter state"
                                            value={state} disabled={disabled} required autoComplete='off'
                                            onChange={(e) => setState(e.target.value)}
                                        />

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col mb-3">

                                        <label htmlFor="country" className="form-label">Country</label>
                                        <input type="text" className="form-control rounded-1" id="country" aria-describedby="emailHelp" placeholder="Enter address"
                                            value={country} required autoComplete='off'
                                            onChange={(e) => setCountry(e.target.value)}
                                        />

                                    </div>
                                    <div className="col mb-3"></div>
                                   
                                </div>
                                <div className="row my-3">
                                    <div className="col mb-3">

                                        <label htmlFor="address" className="form-label">Addresss</label>
                                        <input type="text" className="form-control rounded-1" id="pincode" aria-describedby="emailHelp" placeholder="Enter address"
                                            value={address} required autoComplete='off'
                                            onChange={(e) => setAddress(e.target.value)}
                                        />

                                    </div>
                                    <button type="submit" className="btn btn-primary rounded-1 mt-3">{disabled ? < AiOutlineLoading3Quarters /> : ""}Submit</button>


                                </div>
                               
                             

                                <div className="row" style={{ height: "200px" }}> </div>

                            </div>

                        </form>

                    </div>



                </div>

            </div>






        </div>
    )
}
