import React from 'react'
import "../App.css";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundColor: "rgba(33,37,49,255)",
        borderRadius: "25px",
      }}
    >
      <div className="container p-a-0 pos-rel z-index-3">
        <div className="d-flex flex-column main-hero-box">
          <div className="d-flex flex-items-xxs-center flex-column">
            <h1
              className="text-xxxl my-sm text-center text-normal p-a-0"
              style={{ color: "white", marginTop: "50px" }}
            >
              <p>
                We Are{" "}
                <span style={{ color: "blueviolet" }}>College Mates </span>
              </p>
            </h1>
            <h3
              className="text-sm mb-xxl text-center"
              style={{ color: "white" }}
            >
              <p>Providing you place to connect with alumni and mates.</p>
            </h3>
          </div>
          <div className="d-flex d-flex flex-items-xxs-center flex-items-lg-left flex-column flex-md-row p-a-0">
            <div className="col-12 col-md-6 d-flex flex-items-xxs-center flex-items-md-right">
              <div className="img-box">
                <img
                  alt="mountain with apptopia flag on top"
                  title="Providing you with the most actionable App Store data"
                  className="img-fluid"
                  loading="lazy"
                  src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDUvMDUvMDUvNTUvNTMvNDAyZDVhOTEtZTMwMy00MTc0LTkyMTAtN2Q3YmQxMDM4ZmI1L0dyb3VwIDRAMngucG5nIl1d/9695760c59b32b16/Group%204%402x.png?name=Group+4%402x"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-start flex-column text-white">
              <div className="text-xs fs-5 text-box">
                <p>
                  College Mate is an online web-based social application. The application's goal is to create  single platform
                  through which the process of knowledge sharing between various user get simplified & one can reach with their
                  college mates, faculty as well as alumina of their respected college

                </p>
                <p>&nbsp;</p>
                <p>
                  The app's gives student privilege to share their views about college through post
                  At same time teachers will able to monitor the students simply by reading his or her reviews on this
                  platform in this way teacher will get insight of students review so that this will help both faculty &
                  student in order to make education system at its best and In most of cases its often seen that
                  student have fear to communicate directly with faculty so this platform act as mediator
                </p>
                <p>&nbsp;</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
