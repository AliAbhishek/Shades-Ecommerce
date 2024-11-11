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

export default function CreatCourse() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page">
              <h2>Create Educational Content</h2>
            </div>
            <div className="course-quizzer mt-5">
              <div className="sub-heading">
                <p>Course Quizzer</p>
              </div>
              <div className="add-questions">
                <button>
                  Add Question
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.4995 20C9.74884 20 9.14062 19.3918 9.14062 18.6412V1.35884C9.14062 0.608218 9.74884 0 10.4995 0C11.2501 0 11.8583 0.608218 11.8583 1.35884V18.6412C11.8583 19.3918 11.2501 20 10.4995 20Z"
                        fill="white"
                      />
                      <path
                        d="M19.1412 11.3583H1.85884C1.10822 11.3583 0.5 10.7501 0.5 9.99947C0.5 9.24884 1.10822 8.64062 1.85884 8.64062H19.1412C19.8918 8.64062 20.5 9.24884 20.5 9.99947C20.5 10.7501 19.8918 11.3583 19.1412 11.3583Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="question-one pb-5">
              <div className="number-of-que mt-4">
                <p>Question 1</p>
              </div>
              <div className="question-input mt-4">
                <Form>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>
                </Form>
              </div>

              <div className="question-option">
                <p>Option 1</p>
              </div>
              <div className="question-option mt-3">
                <p>Option 2</p>
              </div>
              <div className="question-option mt-3">
                <p>Option 3</p>
              </div>
            </div>

            <div className="question-one pb-5">
              <div className="number-of-que mt-4">
                <p>Question 2</p>
              </div>
              <div className="question-input mt-4">
                <Form>
                  <div className="form-set">
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                  </div>
                </Form>
              </div>

              <div className="question-option">
                <p>Option 1</p>
              </div>
              <div className="question-option mt-3">
                <p>Option 2</p>
              </div>
              <div className="question-option mt-3">
                <p>Option 3</p>
              </div>
            </div>

            <div className="button-next pb-5">
              <button>Next</button>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
