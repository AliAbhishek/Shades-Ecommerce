import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import toast from "react-hot-toast";
import Header from "../Components/Header";

export default function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.forgetPassword);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [userId, setUserId] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    const userId = location.state?.userId;
    if (userId) {
      setUserId(userId);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (minLength && hasLowerCase && hasUpperCase && hasSpecialChar) {
      setPasswordStrength("strong");
    } else if (minLength && (hasLowerCase || hasUpperCase)) {
      setPasswordStrength("normal");
    } else {
      setPasswordStrength("weak");
    }

    return minLength && hasLowerCase && hasUpperCase && hasSpecialChar;
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!formData.password) {
      setPasswordFocused(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      toast.error("Please enter password");
      return;
    } else if (!formData.confirmPassword) {
      toast.error("Please enter a confirm password");
      return;
    } else if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else if (passwordStrength !== "strong") {
      toast.error("Please ensure your password meets all requirements");
      return;
    } else if (!userId) {
      toast.error(
        "User ID not found. Please try the password reset process again."
      );
      return;
    } else {
      const res = await dispatch(
        CustomerActions.resetPassword({
          userId,
          password: formData.password,
        })
      );
      // console.log("first")

      if (res.payload.success) {
        navigate("/password-change-successfully");
      }
    }
  };

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className="sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box ">
              {/* <div className="left-login-banner">
                <img
                  src={require("../Assets/Images/login-logo.png")}
                  alt="Login Logo"
                />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap">
                    <div className="login-logo">
                      <h2>Reset Password </h2>
                    </div>

                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password:</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter here"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicConfirmPassword"
                        >
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter here"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        {passwordFocused && !formData.password && (
                          <>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "10px",
                              }}
                            >
                              {[1, 2, 3].map((index) => (
                                <div
                                  key={index}
                                  style={{
                                    flex: 1,
                                    height: "4px",
                                    backgroundColor: formData.password
                                      ? (passwordStrength === "weak" &&
                                          index === 1) ||
                                        (passwordStrength === "normal" &&
                                          index <= 2) ||
                                        passwordStrength === "strong"
                                        ? "#23AE5D"
                                        : "gray"
                                      : "gray",
                                    borderRadius: "8px",
                                  }}
                                />
                              ))}
                            </div>
                            {formData.password && (
                              <Form.Label
                                style={{
                                  width: "100%",
                                  textAlign: "center",
                                  marginTop: "8px",
                                }}
                              >
                                Your password is {passwordStrength}
                              </Form.Label>
                            )}
                          </>
                        )}

                        {formData.password && (
                          <>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "10px",
                              }}
                            >
                              {[1, 2, 3].map((index) => (
                                <div
                                  key={index}
                                  style={{
                                    flex: 1,
                                    height: "4px",
                                    backgroundColor:
                                      (passwordStrength === "weak" &&
                                        index === 1) ||
                                      (passwordStrength === "normal" &&
                                        index <= 2) ||
                                      passwordStrength === "strong"
                                        ? "#23AE5D"
                                        : "gray",
                                    borderRadius: "8px",
                                  }}
                                />
                              ))}
                            </div>
                            {formData.password && (
                              <Form.Label
                                style={{
                                  width: "100%",
                                  textAlign: "center",
                                  marginTop: "8px",
                                }}
                              >
                                Your password is {passwordStrength}
                              </Form.Label>
                            )}
                          </>
                        )}
                      </div>

                      {/* <div className={`green-line ${isPasswordStrong ? 'active' : ''}`}>
                        <img src={require("../Assets/Images/green-line.svg").default} alt="Password strength" />
                        <p>{isPasswordStrong ? "Your password is strong" : "Your password is weak"}</p>
                      </div> */}
                      <div className="green-line">
                        {/* <img
                          src={
                            require("../Assets/Images/green-line.svg").default
                          }
                        /> */}
                        {/* <p>Your password is strong</p> */}
                      </div>

                      <div className="strong-pass">
                        <p>Your password must contain at-least:</p>
                        <div className="instructions">
                          <ul>
                            <li
                              className={
                                passwordStrength.length ? "active" : ""
                              }
                            >
                              8 characters
                            </li>
                            <li
                              className={
                                passwordStrength.lowercase ? "active" : ""
                              }
                            >
                              1 lower case
                            </li>
                            <li
                              className={
                                passwordStrength.uppercase ? "active" : ""
                              }
                            >
                              1 upper case
                            </li>
                            <li
                              className={
                                passwordStrength.special ? "active" : ""
                              }
                            >
                              1 special character
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button
                        variant="primary"
                        type="submit"
                        className="submit"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
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
