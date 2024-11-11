import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { createProfileData } from "../Redux/Reducers/PersistSlice";
import Header from "../Components/Header";

export default function CreateProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, createProfiledata } = useSelector((state) => state.persist);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profileImage: null,
  });

  const [age, setAge] = useState(null);

  console.log(formData, "formData");

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(CustomerActions.getCustomer());
      if (response.payload.success) {
        setAge(response.payload.data.age);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if (createProfiledata) {
      setFormData((prevData) => ({
        ...prevData,
        bio: createProfiledata.bio || "",
        profileImage: createProfiledata.profileImage || null,
        name: createProfiledata.name || "",
      }));
    }
  }, [createProfileData]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.bio.trim()) {
      toast.error("Please add a bio");
      return false;
    }
    if (formData.bio.length > 200) {
      toast.error("Bio should not exceed 200 characters");
      return false;
    }
    if (!formData.profileImage) {
      toast.error("Please upload a profile image");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(createProfileData(formData));
    navigate("/verify-identity");
    //   try {
    //     const formDataToSend = new FormData();
    //     // formDataToSend.append("userId", userId);
    //     formDataToSend.append("bio", formData.bio);
    //     formDataToSend.append("profileImage", formData.profileImage);

    //     // const response = await dispatch(CustomerActions.updateProfile(formDataToSend));

    //     // if (response.payload.success) {
    //     //   toast.success(response.payload.message);
    //     //   navigate("/verify-identity");
    //     // } else {
    //     //   toast.error(response.payload.message);
    //     // }
    //   } catch (error) {
    //     console.error("Error updating profile:", error);
    //     toast.error("Something went wrong");
    //   }
    //   setLoading(false);
  };

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
                      <h2>Tell Us More About You</h2>
                    </div>
                    <div className="user-profile-image">
                      <div className="add-image">
                        <img
                          src={
                            formData.profileImage &&
                            typeof formData.profileImage !== "object"
                              ? formData.profileImage
                              : formData.profileImage instanceof File
                              ? URL.createObjectURL(formData.profileImage)
                              : require("../Assets/Images/user-profile-image.svg")
                                  .default
                          }
                          alt="Profile"
                        />
                        <div className="add-icon">
                          <label htmlFor="profileImage">
                            <img
                              src={
                                require("../Assets/Images/add-icon.svg").default
                              }
                              alt="Add"
                            />
                          </label>
                          <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={handleInputChange}
                            style={{ display: "none" }}
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <p>Upload a photo</p>
                      <h2>{/* {name && name} , {age && age}yrs */}</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Name:</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter here"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicBio">
                          <Form.Label>Add Bio:</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Enter here"
                            rows={5}
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </div>

                      <button type="submit" className="submit">
                        Next
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
