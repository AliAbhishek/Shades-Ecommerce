import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import moment from "moment";
import Modals from "../utils/Modal";
import Header from "../Components/Header";

export default function SocialLoginAgeVerification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.persist);
  const [formData, setFormData] = useState({
    username: "",
    dateOfBirth: "",
  });
  const [age, setAge] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "dateOfBirth") {
      calculateAge(value);
    }
  };

  const calculateAge = (value) => {
    const birthDate = moment(value);
    const age = moment().diff(birthDate, "years");
    setAge(age);
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      toast.error("Username is required");
      return false;
    }
    if (!formData.dateOfBirth) {
      toast.error("Date of birth is required");
      return false;
    }

    if (age < 21) {
      // toast.error("You must be at least 21 years old to create an account.");
      handleShow();
      return;
    }
    return true;
  };

  console.log(age, "agestate");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await dispatch(
        CustomerActions.verifyAge({
          userId,
          name: formData.username,
          age: age,
        })
      );

      if (response.payload.success) {
        toast.success(response.payload.message);
        navigate("/create-profile", { replace: true });
      } else {
        toast.error(response.payload.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className="sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box center-align-height">
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
                      <h2>Enter Some Details </h2>
                    </div>

                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicUsername"
                        >
                          <Form.Label>Username:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter here"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
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
                      </div>

                      <button
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

        {show && (
          <Modals
            below21={true}
            show={show}
            setShow={setShow}
            handleClose={handleClose}
          />
        )}
      </Container>
    </div>
  );
}
