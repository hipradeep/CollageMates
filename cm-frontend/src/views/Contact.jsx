import React from 'react'

export default function Contact() {
    return (
        <div>
            <div
                style={{ paddingLeft: "15%", paddingRight: "15%", paddingTop: "2%" }}
            >
                <h1>Contact Us</h1>
                <div>
                    <form action="" method="post">
                        <div style={{ fontSize: "15px", paddingTop: "3%", color: "black" }}>
                            <div>
                                <label htmlFor="">Full Name</label>
                                <div style={{ paddingTop: "10px" }}>
                                    <input
                                        type="text"
                                        name="name"
                                        id=""
                                        placeholder="What's Your Full Name"
                                        style={{
                                            width: "350px",
                                            height: "55px",
                                            borderRadius: "10px",
                                            border: "1px solid lightgray",
                                            fontSize: "16px",
                                            paddingLeft:"12px"
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ paddingTop: "15px" }}>
                                <label htmlFor="">Email Address</label>
                                <div style={{ paddingTop: "10px" }}>
                                    <input
                                        type="email"
                                        name="name"
                                        id=""
                                        placeholder="yourmail@example.com"
                                        style={{
                                            width: "350px",
                                            height: "55px",
                                            borderRadius: "10px",
                                            border: "1px solid lightgray",
                                            fontSize: "16px",
                                            paddingLeft:"12px"
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ paddingTop: "15px" }}>
                                <label htmlFor="">Message</label>
                                <div style={{ paddingTop: "10px" }}>
                                    <textarea rows="3"
                                        name="message"
                                        id=""
                                        cols="42"

                                
                                        placeholder="Write your Message Here"
                                        style={{
                                            borderRadius: "10px",
                                            border: "1px solid lightgray",
                                            resize: "none",
                                            fontSize: "16px",
                                            padding:"12px"
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='P-5' style={{ paddingTop: "20px" }}>
                                <button
                                    type="submit" className='btn btn-primary'
                                    style={{
                                        width: "350px"
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        style={{
                            marginTop: "-550px",
                            marginLeft: "500px",
                        }}
                    >
                        <img
                            src={"https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a.jpg"}
                            alt=""
                            style={{ height: "590px" }}
                        />
                    </div>
                </div>
            </div>
            {/* <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
            <h1 className="size__xxxl___2Ok9K fontSize-xxl lineHeight-title breakPointM-fontSize-xxxl color__black___2f0FY c-black weight__bold___hnlF6 fontWeight-6 h1">
              Drop us a line
            </h1>
            <div className="marginTopBottom-undefined breakPointM-marginTopBottom-l">
              <div
                className="display__block___37v4_ display-block"
                style={{ maxWidth: "400px" }}
              >
                <form novalidate="" method="post" data-reactid="429">
                  <div className="marginTop-m" data-reactid="430">
                    <div className="position-relative" data-reactid="431">
                      <div className="marginBottom-xxs" data-reactid="432">
                        <div
                          className="type__relative___WuFPs position-relative "
                          data-reactid="433"
                        >
                          <div data-reactid="434">
                            <label
                              className="general__label___2rwHd fontSize-m lineHeight-s verticalAlign-middle weight__regular___1p5fh fontWeight-4"
                              for="name"
                              data-reactid="435"
                            >
                              Full Name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="type__relative___WuFPs position-relative "
                        data-reactid="436"
                      >
                        <input
                          type="text"
                          className="general__input___3ZFYB appearance-none borderWidth-0 outlineStyle-none transitionDuration-s transitionProperty-all transitionTimingFunction-ease-in-out verticalAlign-middle position__position-solo--large___11JzW borderRadius-m size__large___3bO4o fontSize-m type__default___3KlrT bg-white boxShadow-marvel--focus boxShadow-smoke--xd--hover boxShadow-smoke c-slate width-100"
                          style="height:50px;"
                          id="name"
                          name="name"
                          placeholder="What's your full name?"
                          value=""
                          data-reactid="437"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="marginTop-m" data-reactid="438">
                    <div className="position-relative" data-reactid="439">
                      <div className="marginBottom-xxs" data-reactid="440">
                        <div
                          className="type__relative___WuFPs position-relative "
                          data-reactid="441"
                        >
                          <div data-reactid="442">
                            <label
                              className="general__label___2rwHd fontSize-m lineHeight-s verticalAlign-middle weight__regular___1p5fh fontWeight-4"
                              for="email"
                              data-reactid="443"
                            >
                              Email address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="type__relative___WuFPs position-relative "
                        data-reactid="444"
                      >
                        <input
                          type="email"
                          className="general__input___3ZFYB appearance-none borderWidth-0 outlineStyle-none transitionDuration-s transitionProperty-all transitionTimingFunction-ease-in-out verticalAlign-middle position__position-solo--large___11JzW borderRadius-m size__large___3bO4o fontSize-m type__default___3KlrT bg-white boxShadow-marvel--focus boxShadow-smoke--xd--hover boxShadow-smoke c-slate width-100"
                          style="height:50px;"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          value=""
                          data-reactid="445"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="marginTop-m" data-reactid="446">
                    <div className="position-relative" data-reactid="447">
                      <div className="marginBottom-xxs" data-reactid="448">
                        <div
                          className="type__relative___WuFPs position-relative "
                          data-reactid="449"
                        >
                          <div data-reactid="450">
                            <label
                              className="general__label___2rwHd fontSize-m lineHeight-s verticalAlign-middle weight__regular___1p5fh fontWeight-4"
                              for="message"
                              data-reactid="451"
                            >
                              Message
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="type__relative___WuFPs position-relative "
                        data-reactid="452"
                      >
                        <textarea
                          className="general__textarea___p1UnY appearance-none borderWidth-0 outlineStyle-none transitionDuration-s transitionProperty-all transitionTimingFunction-ease-in-out verticalAlign-middle position__position-solo--large___1BAQK borderRadius-m size__large___3TUeF fontSize-m type__default___1lMuc bg-white boxShadow-marvel--focus boxShadow-smoke--xd--hover boxShadow-smoke c-slate width-100"
                          style="min-height:120px;"
                          id="message"
                          name="message"
                          placeholder="Write your message for the team here"
                          type="text"
                          data-reactid="453"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="paddingTop-m" data-reactid="454">
                    <button
                      className="general__button___wSxMU appearance-none borderWidth-0 boxSizing-borderBox cursor-pointer display-inlineBlock fontWeight-5 outlineStyle-none position-relative textAlign-center textDecoration-none tp-none--active userSelect-none verticalAlign-middle whiteSpace-nowrap hover__blue___1LFBX c-white--hover bg-blue--hover positionSize__solo-large___106DU borderRadius-m size__large___1JdKh fontSize-m color__white___1yq05 c-white background__blue___1KG0e bg-blue general__fullWidth___LBxsw width-100 general__linearTransition___Q5OfR transitionDuration-s transitionProperty-all transitionTimingFunction-linear iconColor__extraDarkSmoke___1V_XT fill-smoke--xd style__flat___3QWdI boxShadow-deboss--active boxShadow-emboss--hover"
                      style="height:50px;line-height:50px;min-width:110px;padding-left:25px;padding-right:25px;"
                      type="submit"
                      data-reactid="455"
                    >
                      <div
                        className="general__container___njUoC overflow-hidden"
                        data-reactid="456"
                      >
                        <div
                          className="general__iconWrap___5Wcl8 fill-white pinCenter position-absolute"
                          data-reactid="457"
                        >
                          <div
                            className="general__icon___2TuL8 transitionDuration-xxl transitionProperty-all transitionTimingFunction-cb--scaleUp general__iconHidden___cY1gL"
                            data-reactid="458"
                          ></div>
                        </div>
                        <div
                          className="general__circularTransition___2qag7 transitionDuration-xxl transitionTimingFunction-cv-easeOutCircular"
                          data-reactid="459"
                        >
                          <div
                            className="general__extraElementWrap___1wZXn pinTL position-absolute"
                            style="width:50px;height:50px;"
                            data-reactid="460"
                          >
                            <div
                              className="general__extraElement___1Wa2u pinCenter position-absolute"
                              data-reactid="461"
                            ></div>
                          </div>
                          <div data-reactid="462">Submit</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div> 
          </div> */}
        </div>
    );
}
