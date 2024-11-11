import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import eyeOpenIcon from "../Assets/Images/eye-fill.svg";
import eyeClosedIcon from "../Assets/Images/eye-off-fill.svg";
import moment from "moment";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Modals from "../utils/Modal";
import GoogleLogin from "../utils/GooglrLogin";
import Header from "../Components/Header";

export default function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.customer.loading);
  const registrationStatus = useSelector((state) => state.customer.customer);
  console.log(registrationStatus, "registrationStatus");
  const error = useSelector((state) => state.customer.error);

  console.log(loader, registrationStatus, error);
  const [formData, setFormData] = useState({
    // name: "",
    dateOfBirth: "",
    email: "",
    password: "",
    isVintageMember: false,
    lockerNumber: "",
    acceptTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const validateForm = () => {
    let isValid = true;
    if (!formData.dateOfBirth) {
      toast.error("Date of birth is required");
      isValid = false;
    } else if (!formData.email) {
      toast.error("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email address");
      isValid = false;
    } else if (!formData?.password) {
      toast.error("Please enter password");
      isValid = false;
    } else if (formData.isVintageMember && !formData.lockerNumber) {
      toast.error("Locker number is required for vintage members");
      isValid = false;
    } else if (!formData.acceptTerms) {
      toast.error("You must accept the terms and conditions");
      isValid = false;
    } else if (passwordStrength !== "strong") {
      toast.error("Please ensure your password must be strong");
      return;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.isVintageMember === false) {
        formData.lockerNumber = null;
      }

      // Calculate age using moment
      const birthDate = moment(formData.dateOfBirth);
      const age = moment().diff(birthDate, "years");
      setAge(age);

      if (age < 21) {
        // toast.error("You must be at least 21 years old to create an account.");
        handleShow();
        return;
      } else {
        let res = await dispatch(
          CustomerActions.createCustomer({
            role: 0,
            age: age,
            is_vintage_member: formData.isVintageMember == false ? 0 : 1,
            locker_number: formData.lockerNumber,
            // name: formData.name,
            email: formData.email,
            password: formData.password,
            device_type: "0",
          })
        );
        console.log(res, "res");
        if (res?.payload?.success) {
          navigate("/otp-verification", {
            state: {
              userId: res?.payload?.data?._id,
              email: formData.email,
            },
            replace: true,
          });
        }
      }

      // Here you would typically send the data to your backend
      // navigate("/passengers");
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!formData.password) {
      setPasswordFocused(false);
    }
  };

  console.log(show, "show");

  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className=" sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box">
              {/* <div className="left-login-banner">
                <img src={require("../Assets/Images/login-logo.png")} />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap create-account">
                    <div className="login-logo">
                      <h2>Create Account to </h2>
                      <h2>Get Started</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        {/* <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Name:</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter here"
                          />
                        </Form.Group> */}

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicDateOfBirth"
                        >
                          <Form.Label>Date of Birth:</Form.Label>
                          <Form.Control
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email Address:</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter here"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-2 pass-eys"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password:</Form.Label>
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                            placeholder="Enter here"
                          />
                          <img
                            src={showPassword ? eyeClosedIcon : eyeOpenIcon}
                            onClick={togglePasswordVisibility}
                            alt={
                              showPassword ? "Hide password" : "Show password"
                            }
                            style={{ cursor: "pointer" }}
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

                            <Form.Label
                              style={{
                                width: "100%",
                                textAlign: "center",
                                marginTop: "8px",
                              }}
                            >
                              Your password is {passwordStrength}
                            </Form.Label>
                          </>
                        )}

                        <div className="member-of-vintage">
                          <div>
                            <p>Are you member of vintage wine storage</p>
                          </div>
                          <div className="toggile-button-custom">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              name="isVintageMember"
                              checked={formData.isVintageMember}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        {formData.isVintageMember && (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                          >
                            <Form.Label>Locker Number:</Form.Label>
                            <Form.Control
                              type="number"
                              name="lockerNumber"
                              value={formData.lockerNumber}
                              onChange={handleInputChange}
                              placeholder="Enter here"
                            />
                          </Form.Group>
                        )}
                      </div>

                      <div className="pass-rember-line">
                        <div className="remember-check">
                          <Form.Check
                            style={{ paddingLeft: "0px" }}
                            type="checkbox"
                            id="acceptTerms"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleInputChange}
                            label="I accept terms and conditions"
                          />
                        </div>
                      </div>

                      <button type="submit" className="submit">
                        {loader ? "Signing Up ..." : "Sign Up"}
                      </button>
                    </Form>
                    {/* <button className="submit" onClick={handleShow}>
                      Sign Up
                    </button> */}
                    {/* <div className="with-google mt-5">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/google-icon.svg")
                                .default
                            }
                          />
                        </span>
                        Sign Up with Google
                      </p>
                    </div> */}
                    <GoogleLogin />

                    <div className="register-now">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">Login Now</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <Modals
            below21={true}
            show={show}
            setShow={setShow}
            handleClose={handleClose}
          />
        )}

        {/* <div className="forgot-container">
          <Modal className="forgot-modal" show={show} onHide={handleClose}>
            <div className="main-modal-cont">
              <Modal.Header closeButton>
                <div className="modal-heading-text">
                  <h2>Are You 21 or Older</h2>
                </div>
              </Modal.Header>
              <Modal.Footer>
                <Button className="done-btn" onClick={handleClose}>
                  Yes
                </Button>
                <Button className="close-btn" onClick={handleClose}>
                  No
                </Button>
              </Modal.Footer>
              <Modal.Body>
                <div className="content-box">
                  <p>
                    By entering this website you agree that you’re of legal age.
                  </p>
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </div> */}
      </Container>
    </div>
  );
}
