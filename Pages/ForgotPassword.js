import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.forgetPassword);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    let res = await dispatch(CustomerActions.forgotPassword({ email }));
    if (res.payload.success) {
      // toast.success(res.payload.message);
      navigate(
        "/otp-verification",
        {
          state: {
            email,
            type: "forgot",
            userId: res.payload.data._id,
          },
        },
        { replace: true }
      );
    }

    // TODO: Add API call to send reset password email
    console.log("Sending reset password email to:", email);

    // Navigate after a short delay
  };

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className=" sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box center-align-height">
              {/* <div className="left-login-banner">
                <img src={require("../Assets/Images/login-logo.png")} />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap">
                    <div className="login-logo">
                      <h2>Forgot Password </h2>
                    </div>
                    <div className="for-got-text">
                      <p>
                        Don’t worry! It occurs. Please enter the email address
                        linked with your account.
                      </p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // isInvalid={!!error}
                          />
                        </Form.Group>
                      </div>

                      <button
                        variant="primary"
                        type="submit"
                        className="submit"
                      >
                        {loading ? "Sending..." : "Send Code"}
                      </button>
                    </Form>
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
