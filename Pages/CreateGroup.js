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
import { Modal } from "react-bootstrap";

export default function CreateGroup() {
  const navigate = useNavigate();

  const [showPreviousOrderModal, setShowPreviousOrderModal] = useState(false); // State for previous order modal
  const handleClosePreviousOrder = () => setShowPreviousOrderModal(false); // Function to close previous order modal
  const handleShowPreviousOrder = () => setShowPreviousOrderModal(true);

  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page best-profile pink-msg">
              <h2>Message</h2>
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
                          <p>Chatgram Web was updated.</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <img
                          src={
                            require("../Assets/Images/cancel-btn-icon.svg")
                              .default
                          }
                        />
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
                          <p>Chatgram Web was updated.</p>
                        </div>
                      </div>
                      <div className="message-time">
                        <img
                          src={
                            require("../Assets/Images/cancel-btn-icon.svg")
                              .default
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message-chat-box">
                  <div className="add-group-sec">
                    <div className=" edit-profile-name">
                      <div className="add-image ">
                        <img
                          className="edit-image-modal"
                          src={
                            require("../Assets/Images/user-profile-image.svg")
                              .default
                          }
                        />
                        <div className="add-icon ">
                          <img
                            src={
                              require("../Assets/Images/add-icon.svg").default
                            }
                          />
                        </div>
                      </div>
                      <div className="group-icon">
                        <p>Upload Group Icon</p>
                      </div>
                    </div>
                    <div className="post-fields uplode-group-width">
                      <div className="pri-vate-group">
                        <p>Private Group</p>
                        <div className="toggile-button-custom">
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                          />
                        </div>
                      </div>
                      <Form>
                        <div className="form-set">
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Group Name"
                            />
                          </Form.Group>
                        </div>
                        <div className="form-set">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Description"
                              rows={5}
                            />
                          </Form.Group>
                        </div>
                      </Form>
                    </div>
                    <div className="up-save-btn">
                      <button onClick={handleShowPreviousOrder}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ........................................ */}
      <div className="forgot-container ">
        <Modal
          className="forgot-modal cart-modal"
          show={showPreviousOrderModal}
          onHide={handleClosePreviousOrder}
        >
          <div className="cart-deliver">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className="order-states">
                <h2>Private Group</h2>
                <p>Request to join Group </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="done-btn" onClick={handleClosePreviousOrder}>
                Track Order
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
