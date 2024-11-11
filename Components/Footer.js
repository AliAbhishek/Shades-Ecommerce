import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from "../Assets/Images/logo-top.svg";
import appleStore from "../Assets/Images/apple-store-download-button.svg";
import googleStore from "../Assets/Images/store-google-download-button.svg";
import footerImage from "../Assets/Images/fotter-bott-image.svg";

const Footer = () => {
  return (
    <section className="fotter-back">
      <Container>
        <div className="fotter-section">
          <div className="fotter-flex">
            <div className="fotter-logo-side">
              <div className="fot-logo">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="fotter-links">
              <div className="links-grid">
                <div className="all-links">
                  <h2>Customer Care</h2>
                  <ul>
                    <li>
                      <Link to="#">Contact us</Link>
                    </li>
                    <li>
                      <Link to="#">Track an order</Link>
                    </li>
                  </ul>
                </div>
                <div className="all-links">
                  <h2>About FSoG</h2>
                  <ul>
                    <li>
                      <Link to="#">About us</Link>
                    </li>
                    <li>
                      <Link to="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="all-links">
                  <h2>Work with us</h2>
                  <ul>
                    <li>
                      <Link to="#">Become a partner</Link>
                    </li>
                  </ul>
                </div>
                <div className="all-links">
                  <h2>Download app</h2>
                  <div className="app-button">
                    <img src={appleStore} alt="Download on the App Store" />
                    <img src={googleStore} alt="Get it on Google Play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-line">
            <p>© 2024 Fifty Shades of Graphes, LLC. All rights reserved.</p>
          </div>
          <div className="fotter-bott-image">
            <img src={footerImage} alt="Footer Bottom" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
