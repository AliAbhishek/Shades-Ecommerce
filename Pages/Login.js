import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { ContactInfo, createProfileData, IdProof, UserId } from "../Redux/Reducers/PersistSlice";
import eyeOpenIcon from "../Assets/Images/eye-fill.svg";
import eyeClosedIcon from "../Assets/Images/eye-off-fill.svg";
import GoogleLogin from "../utils/GooglrLogin";
import Header from "../Components/Header";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.login);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setRememberMe(checked);
      if (!checked) {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    formData.role = 0;

    const response = await dispatch(CustomerActions.loginCustomer(formData));
    console.log(response, "response");
    if (response?.payload?.success) {
      if (rememberMe) {
        // localStorage.setItem("token", response?.payload?.data?.token);
        // localStorage.setItem("userId", response?.payload?.data?._id);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
      }
      dispatch(UserId(response?.payload?.data?._id));
      if (response?.payload?.data?.email_verified == 0) {
        navigate("/otp-verification", {
          state: {
            userId: response?.payload?.data?._id,
            email: formData.email,
          },
          replace: true,
        });
      } else if (response?.payload?.data?.is_profile_completed == 0) {
        dispatch(createProfileData(null))
        dispatch(IdProof(null))
        dispatch(ContactInfo(null))
        navigate("/create-profile");
        sessionStorage.setItem("token", response?.payload?.data?.token);
      } else {
        navigate("/");
        sessionStorage.setItem("token", response?.payload?.data?.token);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setFormData({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      });
      setRememberMe(true);
    }
  }, [rememberMe]);

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className="sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box">
              {/* <div className="left-login-banner">
                <img
                  src={require("../Assets/Images/login-logo.png")}
                  alt="Login Logo"
                />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap login-create-account">
                    <div className="login-logo">
                      <h2>Welcome back!</h2>
                      <h2>Glad to see you, Again!</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address:</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter here"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-2 pass-eys"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password:</Form.Label>
                          <div className="password-input-wrapper">
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter here"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                            <img
                              src={showPassword ? eyeClosedIcon : eyeOpenIcon}
                              alt="Toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle-icon"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="pass-rember-line mt-3">
                        <div className="remember-check">
                          <input
                            type="checkbox"
                            className="red"
                            id="filled-in-box"
                            checked={rememberMe}
                            onChange={handleInputChange}
                            name="rememberMe"
                          />
                          <p>Remember Password</p>
                        </div>
                        <Link to="/forgot-password" className="forgot">
                          Forgot Password?
                        </Link>
                      </div>

                      <button
                        type="submit"
                        className="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing In..." : "Sign In"}
                      </button>
                    </Form>
                    <GoogleLogin />
                    {/* <div className="with-google">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/google-icon.svg")
                                .default
                            }
                            alt="Google icon"
                          />
                        </span>
                        Sign in with Google
                      </p>
                    </div> */}

                    <div className="register-now">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/create-account">Register Now</Link>
                      </p>
                    </div>
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
