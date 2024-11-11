import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function PasswordChangeSuccessfully() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className=" sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box center-align-height ">
              {/* <div className="left-login-banner">
                <img src={require("../Assets/Images/login-logo.png")} />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap">
                    <div className="conformation-cion">
                      <img
                        src={
                          require("../Assets/Images/conformation-icon.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="login-logo">
                      <h3>Password Changed </h3>
                    </div>
                    <div className="success-fully">
                      <p>Your Password has been changed successfully!</p>
                    </div>
                    <button
                      variant="primary"
                      type="submit"
                      className="submit mt-5"
                      onClick={() => navigate("/login")}
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
