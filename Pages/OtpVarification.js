import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios"; // Make sure to install axios
import { toast } from "react-hot-toast"; // Assuming you're using react-hot-toast for notifications
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { ContactInfo, createProfileData, IdProof, UserId } from "../Redux/Reducers/PersistSlice";
import Header from "../Components/Header";

export default function OtpVarification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { resendOtploading, verifyOtpLoading } = useSelector(
    (state) => state.otp
  );
  console.log(verifyOtpLoading, "verifyOtpLoading");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    // Retrieve email from location state or localStorage
    const userId = location.state?.userId;
    const email = location.state?.email;
    const type = location.state?.type;
    console.log(location.state, "location.state");
    if (userId) {
      setUserId(userId);
      setEmail(email);
      setType(type);
    }
  }, [location]);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOTP = async () => {
    // // Replace with your API endpoint
    // await axios.post("/api/resend-otp", { email });
    let res = await dispatch(CustomerActions.resendOtp({ userId }));
    console.log(res, "res");
    if (res?.payload?.success) {
      setTimer(30);
      setOtp("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP");
      return;
    }

    // Replace with your API endpoint
    let res = await dispatch(CustomerActions.verifyOtp({ userId, otp }));

    if (res?.payload?.success) {
      if (type === "forgot") {
        // sessionStorage.setItem("token", res?.payload?.data?.token);
        // dispatch(UserId(res?.payload?.data?._id));
        navigate("/reset-password", {
          state: { userId: res?.payload?.data?._id },
          replace: true,
        });
      } else {
        sessionStorage.setItem("token", res?.payload?.data?.token);
        dispatch(UserId(res?.payload?.data?._id));
        dispatch(createProfileData(null))
        dispatch(IdProof(null))
        dispatch(ContactInfo(null))

        navigate("/create-profile", { replace: true });
      }
      // toast.success(res?.payload?.message);
    }
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
                  <div className="login-box-inner-wrap ">
                    <div className="login-logo">
                      <h2>OTP Verification</h2>
                    </div>
                    <div className="for-got-text">
                      <p>
                        Enter the verification code we just sent to {email}.
                      </p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set set-otp">
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={4}
                          renderInput={(props) => <input {...props} />}
                          inputStyle="otp-input" // Add this class in your CSS
                          isInputNum={true}
                        />
                      </div>

                      <div className="reset-time">
                        {timer > 0 ? (
                          <p>
                            Resend OTP in{" "}
                            <span>{timer.toString().padStart(2, "0")}</span>{" "}
                            seconds
                          </p>
                        ) : (
                          <p>
                            Didn't receive the OTP?{" "}
                            <button
                              type="button"
                              onClick={handleResendOTP}
                              // disabled={isLoading}
                            >
                              {resendOtploading ? "Sending ..." : "Resend OTP"}
                            </button>
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="submit"
                        // disabled={isLoading || otp.length !== 4}
                      >
                        {verifyOtpLoading ? "Verifying ..." : "Verify"}
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
