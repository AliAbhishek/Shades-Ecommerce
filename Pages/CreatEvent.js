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

export default function CreatEvent() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page">
              <h2>Create a Event</h2>
            </div>

            <div className="select-file-sec mt-5">
              <div className="event-create-ps">
                <div className="add-file-event-ps">
                  <p>
                    <img
                      src={require("../Assets/Images/add-button.svg").default}
                    />
                    Select File
                  </p>
                </div>

                <div className="event-text-area mt-4">
                  <Form>
                    <div className="form-set">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Enter here"
                          rows={5}
                        />
                      </Form.Group>
                    </div>
                  </Form>
                </div>

                <div className="full-post-btn mt-5">
                  <button>Post</button>
                </div>
              </div>
              <div className="post-fields">
                <Form>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Add Event Title</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Add Event Date</Form.Label>
                      <Form.Control type="text" placeholder="dd/mm/yyyy" />
                    </Form.Group>
                  </div>

                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Add Event Time</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>

                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>

                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Ticket Price</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>

                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Ticket Link</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>

                  <div className="last-input-field">
                    <div className="form-set">
                      <Form.Group className="mb-3">
                        <Form.Label>Wine name</Form.Label>
                        <Form.Control type="text" placeholder="Enter here" />
                      </Form.Group>
                    </div>
                    <div className="add-plus-icon">
                      <img
                        src={
                          require("../Assets/Images/plus-add-icon.svg").default
                        }
                      />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
