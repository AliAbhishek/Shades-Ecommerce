// src/components/GoogleLogin.js
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "./fireBaseConfig";
import Modals from "./Modal";
import customerApi from "../Services/customerApi";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { UserId } from "../Redux/Reducers/PersistSlice";
import { useLocation, useNavigate } from "react-router-dom";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "./Firebase";
// import { socialLogin } from "../Redux/Actions/userActions"; // Adjust the path as needed
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { Userdata } from "../Redux/Reducers/registrationSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { coachsocialLogin } from "../Redux/Actions/coachAction";
const GoogleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [path, setPath] = useState("");
  console.log(location, "location");

  useEffect(() => {
    if (location) {
      setPath(location?.pathname);
    }
  }, [location]);


  // ===========================================POST DATA USING REACT QUERY==================================

  //   const { isPending, mutate } = useMutation({
  //     mutationFn: userrole == "user" ? socialLogin : coachsocialLogin,
  //     onSuccess: (res) => {
  //       console.log(res, "social");
  //       if (res?.success) {
  //         sessionStorage.setItem("token", res?.data?.token);
  //         dispatch(Userdata(res?.data));
  //         toast.success(res?.message);
  //         if (res?.success || res.message == "Please verify your account first") {
  //           // res?.data?.role== 0 ?  navigate("/get-started") : ""

  //           if (res?.data?.email_verified == 0) {
  //             navigate("/verify-email");
  //           } else {
  //             toast.success(res?.message);
  //             if (userrole == "coach" && res?.data?.profile_status == 0) {
  //                window.location.href ="/create-profile";
  //             } else if(userrole == "coach" && res?.data?.profile_status == 1){
  //               window.location.href ="/get-started-coach";
  //             }
  //             else {
  //               window.location.href = "/get-started";
  //             }
  //           }
  //         } else {
  //           toast.error(res?.message);
  //         }
  //       } else {
  //         toast.error(res?.message);
  //       }
  //     },
  //     onError: (res) => {
  //       toast.error(res?.message);
  //     },
  //   });

  const handleLogin = async (e) => {
    // e.preventDefault();
    console.log("hii");
    try {
      console.log("first");
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info: ", result?.user);
      if (result?.user) {
        let res = await dispatch(
          CustomerActions.googleLogin({
            social_token: result?.user?.accessToken,
            type: "1",
            device_token: result?.user?.accessToken,
            device_type: "0",
            role: "0",
          })
        );
        console.log(res, "res");
        if (res?.payload?.success) {
          //   toast.success(res?.payload?.message);
          sessionStorage.setItem("token", res?.payload?.data?.token);
          dispatch(UserId(res?.payload?.data?._id));
          if (res?.payload?.data?.email_verified == 0) {
            navigate("/social-login-age-verification");
          } else if (res?.payload?.data?.is_profile_completed == 0) {
            navigate("/create-profile");
          } else {
            navigate("/");
          }
        } else {
          toast.error(res?.payload?.message);
        }
      }
    } catch (error) {
      console.error("Error during login: ", error.message);
      toast.error(error?.message || "Something went wrong");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
        className="with-google"
      >
        <p>
          <span>
            <img
              src={require("../Assets/Images/google-icon.svg").default}
              alt="Google icon"
            />
          </span>
          {path == "/create-account"
            ? "Sign Up with Google"
            : "Sign in with Google"}
        </p>
      </div>

      {/* {show && (
        <Modals
          ageVerification={true}
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleLogin={handleLogin}

        />
      )} */}
    </>
  );
};

export default GoogleLogin;
