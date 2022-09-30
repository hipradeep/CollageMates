import React from "react";
import reactstrap from "reactstrap";
export default function Contact() {
  return (
    <div>
      <section className="hero">
        <div className="bg">
          <img
            src="https://web-assets.zendesk.com/images/p-contact-us/hero.jpg"
            style={{
              float: "right",
              width: "600px",
              height: "613px",
            }}
          ></img>
        </div>
        <div className="grid container">
          <div className="row">
            <div>
              <h1
                className="strong katamari-field"
                data-katamari-field-id="1"
                style={{ fontSize: "70px", marginTop: "40px" }}
              >
                Contact us
              </h1>
            </div>
            <div className="col col-small-6"></div>
          </div>
          <div className="row">
            <div style={{ marginTop: "30px", width: "400px" }}>
              <div className="card" style={{ height: "200px" }}>
                <img
                  src="https://web-assets.zendesk.com/images/p-contact-us/avatar1.svg"
                  alt=""
                  style={{
                    display: "block",
                    borderRadius: "50%",
                    position: "absolute",
                    marginLeft: "150px",
                    marginTop: "20px",
                    border: "4px solid $white",
                  }}
                />
                <h3
                  className="katamari-field center"
                  data-katamari-field-id="2"
                  style={{
                    marginTop: "100px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginLeft: "30px",
                    marginRight: "10px",
                  }}
                >
                  Talk to a member of our Sales team
                </h3>
                <p className="katamari-field center" data-katamari-field-id="3">
                  We will help you find the right products and pricing for your
                  business.
                </p>
                <a
                  href="#"
                  className="katamari-field js-open-modal button button-medium button-primary button-default"
                  data-modal-id="contact-form-modal"
                  aria-haspopup="dialog"
                  data-katamari-field-id="4"
                  target=""
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
            <div style={{ marginTop: "30px", width: "400px" }}>
              <div className="card" style={{ height: "200px" }}>
                <img
                  src="https://web-assets.zendesk.com/images/p-contact-us/avatar1.svg"
                  alt=""
                  style={{
                    display: "block",
                    borderRadius: "50%",
                    position: "absolute",
                    marginLeft: "150px",
                    marginTop: "20px",
                    border: "4px solid $white",
                  }}
                />
                <h3
                  className="katamari-field center"
                  data-katamari-field-id="2"
                  style={{
                    marginTop: "100px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginLeft: "30px",
                    marginRight: "10px",
                  }}
                >
                  Talk to a member of our Sales team
                </h3>
                <p className="katamari-field center" data-katamari-field-id="3">
                  We will help you find the right products and pricing for your
                  business.
                </p>
                <a
                  href="#"
                  className="katamari-field js-open-modal button button-medium button-primary button-default"
                  data-modal-id="contact-form-modal"
                  aria-haspopup="dialog"
                  data-katamari-field-id="4"
                  target=""
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
