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

export default function BadgesEarned() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container pb-5">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page best-profile">
              <h2>Badges Earned</h2>
              <div className="number-of-contributor">
                <p>
                  <img
                    src={require("../Assets/Images/badges-icon.svg").default}
                  />
                  65
                </p>
              </div>
            </div>
          </div>

          <div className=" badges-points mt-5">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
          <div className=" badges-points mt-3">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
          <div className=" badges-points mt-3">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
          <div className=" badges-points mt-3">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
          <div className=" badges-points mt-3">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
          <div className=" badges-points mt-3">
            <p>A virtual evening of smooth jazz</p>
            <p>15 Points</p>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
