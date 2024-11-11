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

export default function CreatPost() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page">
              <h2>Create a Post</h2>
            </div>

            <div className="select-file-sec mt-5">
              <div className="add-new-post-file">
                <p>
                  <img
                    src={require("../Assets/Images/add-button.svg").default}
                  />
                  Select File
                </p>
              </div>
              <div className="post-fields">
                <Form>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Add Title</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Label>Add Location</Form.Label>
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>
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
            </div>
            <div className="schedule-options">
              <button>Post Now</button>
              <button>Schedule for Later</button>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
