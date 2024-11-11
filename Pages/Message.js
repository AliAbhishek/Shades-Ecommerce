import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../Components/Layout/Layout";
import Form from "react-bootstrap/Form";

export default function Message() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page best-profile">
              <h2>Message</h2>
              <div className="create-group-btn">
                <button onClick={() => navigate("/create-group")}>
                  <span>
                    <img
                      src={
                        require("../Assets/Images/add-white-icon.svg").default
                      }
                    />
                  </span>
                  Create Group
                </button>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <div className="message-page">
              <div className="message-chart">
                <div className="user-chat-option">
                  <div className="chat-search">
                    <Form>
                      <div className="form-set ">
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Search here" />
                        </Form.Group>
                      </div>
                    </Form>
                  </div>
                  <div className="left-side-scroll">
                    <div className="user-message">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message active-user-msg">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message ">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message ">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="user-message ">
                      <div className="user-name-and-profile-pic">
                        <div className="mg-us-profile">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="name-and-user-mg">
                          <h2>Lorem Ipsum</h2>
                          <p>Hi, how are you?</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <p>03:00 PM</p>
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message-chat-box">
                  <div className="right-chating-box">
                    <div className="user-full-chat">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="user-name-and-profile-pic">
                          <div className="mg-us-profile">
                            <img
                              src={
                                require("../Assets/Images/user-mg-pic.svg")
                                  .default
                              }
                            />
                          </div>
                          <div className="name-and-user-mg">
                            <h2>Lorem Ipsum</h2>
                            <p>California, USA</p>
                          </div>
                        </div>

                        <div className="edit-message-icon">
                          <img
                            src={
                              require("../Assets/Images/edit-icon-message.svg")
                                .default
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="update-time-msg">
                      <p>Today</p>
                    </div>

                    <div className="chating-section">
                      <div className="your-msg">
                        <h4>hi how are you</h4>
                        <p>09:33 am</p>
                      </div>

                      <div className="other-msg">
                        <div className="other-image">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="other-chat-and-time">
                          <h4>i’m good . how you doing </h4>
                          <p>09:33 am</p>
                        </div>
                      </div>

                      <div className="your-msg">
                        <h4>hi how are you</h4>
                        <p>09:33 am</p>
                      </div>

                      <div className="other-msg">
                        <div className="other-image">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="other-chat-and-time">
                          <h4>i’m good . how you doing </h4>
                          <p>09:33 am</p>
                        </div>
                      </div>

                      <div className="your-msg">
                        <h4>hi how are you</h4>
                        <p>09:33 am</p>
                      </div>

                      <div className="other-msg">
                        <div className="other-image">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="other-chat-and-time">
                          <h4>i’m good . how you doing </h4>
                          <p>09:33 am</p>
                        </div>
                      </div>

                      <div className="your-msg">
                        <h4>hi how are you</h4>
                        <p>09:33 am</p>
                      </div>

                      <div className="other-msg">
                        <div className="other-image">
                          <img
                            src={
                              require("../Assets/Images/user-mg-pic.svg")
                                .default
                            }
                          />
                        </div>
                        <div className="other-chat-and-time">
                          <h4>i’m good . how you doing </h4>
                          <p>09:33 am</p>
                        </div>
                      </div>
                    </div>

                    <div className="chat-search sned-box">
                      <Form>
                        <div className="form-set ">
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Search here"
                            />
                          </Form.Group>
                        </div>
                      </Form>
                      <div className="send-btn">
                        <img
                          src={require("../Assets/Images/send-btn.svg").default}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
