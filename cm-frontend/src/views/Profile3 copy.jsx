import React from "react";
import { Link, renderMatches } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
export default function Profile3() {
  return (
    <div className="row">
      <div className="col-3">
        Side Menu
        <Link to="/home">Back</Link>
      </div>
      <div className="col-9">
        Profile Details
        <div>
          <img
            src={require("../logo.svg")}
            style={{
              width: "70px",
              height: "70px",
              border: "2px solid black",
              borderRadius: "50%",
            }}
            alt="Image"
          ></img>
        </div>
        <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
          <h5>College Name</h5>
          <h6 style={{ color: "gray" }}>Teacher</h6>

          <div style={{ color: "gray", marginTop: "30px" }}>
            <h6>Email</h6>
            <h6>city</h6>
            <h6>State</h6>
            <h6>Country</h6>
            <h6>Phone</h6>
            <h6>Website</h6>
          </div>
          <div style={{ marginTop: "-160px", marginLeft: "130px" }}>
            <h6>College@gmail.com</h6>
            <h6>Lucknow</h6>
            <h6>UP</h6>
            <h6>India</h6>
            <h6>1234567890</h6>
            <h6>www.collegename.com</h6>
          </div>
        </div>
        <div>
          <button
            style={{
              marginLeft: "450px",
              borderRadius: "25px",
              padding: "10px 25px",
              fontSize: "15px",
            }}
          >
            Give FeedBack
          </button>
          {/* <button
            style={{
              marginLeft: "20px",
              borderRadius: "25px",
              padding: "10px 25px",
              fontSize: "15px",
            }}
          >
            Give FeedBack
          </button> */}
        </div>
        <div style={{ marginTop: "-250px", marginLeft: "450px" }}>
          <button
            style={{
              padding: "5px",
              borderRadius: "25px",
            }}
          >
            <BsPencil style={{ marginRight: "65px" }} />
            <h6
              style={{
                fontSize: "20px",
                color: "white",
                marginTop: "-22px",
                paddingLeft: "10px",
              }}
            >
              Edit
            </h6>
          </button>
        </div>
        <hr
          style={{
            width: "80%",
            height: "2px",
            borderWidth: "5",
            marginTop: "220px",
            color: "black",
            backgroundColor: "black",
          }}
        />
        <div>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Activity
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Members
          </a>
        </div>
        <div style={{ marginTop: "150px" }}>
          <div style={{ marginTop: "-180px", marginLeft: "550px" }}>
            <button
              style={{
                padding: "5px",
                borderRadius: "25px",
              }}
            >
              <BsPencil style={{ marginRight: "65px" }} />
              <h6
                style={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "-22px",
                  paddingLeft: "10px",
                }}
              >
                Edit
              </h6>
            </button>
          </div>
          <div>
            <div style={{ marginTop: "20px" }}>
              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "70px",
                    height: "70px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
                <h5>Activity 1</h5>
                <div style={{ width: "600px" }}>
                  <h6 style={{ color: "gray" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do am et sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h6>
                </div>
                <hr
                  style={{
                    width: "75%",
                    height: "2px",
                    borderWidth: "5",
                    color: "black",
                    backgroundColor: "black",
                  }}
                />
              </div>

              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "70px",
                    height: "70px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
                <h5>Activity 2</h5>
                <div style={{ width: "600px" }}>
                  <h6 style={{ color: "gray" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do am et sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h6>
                </div>
                <hr
                  style={{
                    width: "75%",
                    height: "2px",
                    borderWidth: "5",
                    color: "black",
                    backgroundColor: "black",
                  }}
                />
              </div>

              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "70px",
                    height: "70px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
                <h5>Activity 3</h5>
                <div style={{ width: "600px" }}>
                  <h6 style={{ color: "gray" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do am et sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "80%",
            height: "2px",
            borderWidth: "5",
            color: "black",
            backgroundColor: "black",
          }}
        />
        <div>
          <h5>FeedBack</h5>
          <div style={{ marginTop: "20px" }}>
            <div>
              <img
                src={require("../logo.svg")}
                style={{
                  width: "70px",
                  height: "70px",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
                alt="Image"
              ></img>
            </div>
            <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
              <h5>Reviewer Name(Student)</h5>
              <div style={{ width: "600px" }}>
                <h6 style={{ color: "gray" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  am et sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h6>
              </div>
              <hr
                style={{
                  width: "75%",
                  height: "2px",
                  borderWidth: "5",
                  color: "black",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div>
              <img
                src={require("../logo.svg")}
                style={{
                  width: "70px",
                  height: "70px",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
                alt="Image"
              ></img>
            </div>
            <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
              <h5>Reviewer Name(Student)</h5>
              <div style={{ width: "600px" }}>
                <h6 style={{ color: "gray" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  am et sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h6>
              </div>
              <hr
                style={{
                  width: "75%",
                  height: "2px",
                  borderWidth: "5",
                  color: "black",
                  backgroundColor: "black",
                }}
              />
            </div>

            <div>
              <img
                src={require("../logo.svg")}
                style={{
                  width: "70px",
                  height: "70px",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
                alt="Image"
              ></img>
            </div>
            <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
              <h5>Reviewer Name(Student)</h5>
              <div style={{ width: "600px" }}>
                <h6 style={{ color: "gray" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  am et sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h6>
              </div>
              <hr
                style={{
                  width: "75%",
                  height: "2px",
                  borderWidth: "5",
                  color: "black",
                  backgroundColor: "black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
