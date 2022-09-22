import React from "react";
import { Link, renderMatches } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
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
          <div className="d-flex justify-content-end">
            <div className="btn btn-secondary">
              <BsPencil />
              <button type="button" className="btn btn-secondary">
                Edit
              </button>
            </div>
          </div>
          <br />
          <div>
            <img
              src={require("../img.jpg")}
              className="img-fluid"
              alt="Image"
            ></img>
            <img
              src={require("../logo.svg")}
              style={{
                width: "100px",
                height: "100px",
                border: "2px solid black",
                marginTop: "-100px",
                marginLeft: "10px",
              }}
              alt="Image"
            ></img>
            <div
              style={{
                marginLeft: "130px",
                marginTop: "-100px",
                color: "white",
              }}
            >
              <h5>College Name</h5>

              <div>
                <h6>Address</h6>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px", overflow: "hidden" }}>
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "block",
                float: "left",
                fontSize: "20px",
              }}
            >
              100 Following 183 Mates 50 Teachers
            </div>
            <button
              style={{
                borderRadius: "25px",
                fontSize: "20px",
                padding: "0 20px",
                float: "right",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Join
            </button>
          </div>
        </div>
        <hr
          style={{
            height: "2px",
            borderWidth: "5",
            color: "black",
            backgroundColor: "black",
          }}
        />
        <div>
          <h5>Departments</h5>
          <br />
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "aqua",
              color: "white",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Computer Science
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "aqua",
              color: "white",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Mechanical
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "aqua",
              color: "white",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Electronics
          </a>
        </div>
        <br />
        <hr
          style={{
            height: "2px",
            borderWidth: "5",
            color: "black",
            backgroundColor: "black",
          }}
        />
        <div>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            All
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
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
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Placements
          </a>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
              margin: "5px",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "25px",
            }}
          >
            Events
          </a>
          <div style={{ marginTop: "-30px" }}>
            <button
              style={{
                borderRadius: "25px",
                fontSize: "15px",
                padding: "5px 20px",
                float: "right",
                backgroundColor: "aqua",
                color: "white",
              }}
            >
              Add Story
              <BsPencil style={{ color: "black", marginLeft: "10px" }} />
            </button>
          </div>
        </div>
        <div>
          <div style={{ marginTop: "75px" }}>
            <div>
              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-100px" }}>
                <h6>
                  Hello Boys, I am happy announce that i placed at abc company,
                  thanks to all
                </h6>
                <div style={{ width: "600px", marginTop: "50px" }}>
                  <h6 style={{ color: "gray" }}>26 July,2022</h6>
                  <div style={{ marginTop: "-30px", float: "right" }}>
                    <span style={{ paddingRight: "10px" }}>
                      <AiOutlineLike /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BiComment /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BsShare /> 210
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ wordSpacing: "50px", marginTop: "20px" }}>
                <h5>#placement #events</h5>
              </div>
              <hr
                style={{
                  width: "100%",
                  height: "2px",
                  borderWidth: "5",
                  color: "black",
                  backgroundColor: "black",
                }}
              />
              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-100px" }}>
                <h6>
                  Hello Boys, I am happy announce that i placed at abc company,
                  thanks to all
                </h6>
                <div style={{ width: "600px", marginTop: "50px" }}>
                  <h6 style={{ color: "gray" }}>26 July,2022</h6>
                  <div style={{ marginTop: "-30px", float: "right" }}>
                    <span style={{ paddingRight: "10px" }}>
                      <AiOutlineLike /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BiComment /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BsShare /> 210
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ wordSpacing: "50px", marginTop: "20px" }}>
                <h5>#placement #events</h5>
              </div>
              <hr
                style={{
                  width: "100%",
                  height: "2px",
                  borderWidth: "5",
                  color: "black",
                  backgroundColor: "black",
                }}
              />

              <div>
                <img
                  src={require("../logo.svg")}
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "2px solid black",
                  }}
                  alt="Image"
                ></img>
              </div>
              <div style={{ marginLeft: "130px", marginTop: "-100px" }}>
                <h6>
                  Hello Boys, I am happy announce that i placed at abc company,
                  thanks to all
                </h6>
                <div style={{ width: "600px", marginTop: "50px" }}>
                  <h6 style={{ color: "gray" }}>26 July,2022</h6>
                  <div style={{ marginTop: "-30px", float: "right" }}>
                    <span style={{ paddingRight: "10px" }}>
                      <AiOutlineLike /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BiComment /> 210
                    </span>
                    <span style={{ paddingRight: "10px" }}>
                      <BsShare /> 210
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ wordSpacing: "50px", marginTop: "20px" }}>
                <h5>#placement #events</h5>
              </div>
              <hr
                style={{
                  width: "100%",
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
