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

export default function ContributorPoint() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-search-container pb-5">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page best-profile">
              <h2>Contributor Point</h2>
              <div className="number-of-contributor">
                <p>
                  <img
                    src={
                      require("../Assets/Images/contributor-icon.svg").default
                    }
                  />
                  65
                </p>
              </div>
            </div>
          </div>

          <div className="to-earn">
            <p>How to earn a top contributor badge</p>
          </div>

          <div className="earning-disp ">
            <p>
              You can earn points and increase your chances of earning the top
              contributor badge in a group by:
            </p>
            <div className="earning-list">
              <ul>
                <li>Receiving replies and/or reactions on your posts</li>
                <li>Receiving replies and/or reactions on your comments</li>
                <li>
                  Being an admin or moderator (If you want to become an admin or
                  moderator, you can send a message to a current admin and ask
                  them to invite you to become an admin or moderator.)
                </li>
                <li>
                  Being a group expert (If you want to become a group expert,
                  you can send a message to a current admin and ask them to
                  invite you to become a group expert.)
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
