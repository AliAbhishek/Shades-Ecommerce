import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// Assume we have an action to update the profile
// import { updateProfile } from "../redux/actions/profileActions";
import toast from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import Loader from "./Loader";
import { setCustomer } from "../Redux/Reducers/loginSlice";

const EditProfilePopUp = ({ show, setShow, handleClose }) => {
  const dispatch = useDispatch();
  const { customerDetails } = useSelector((state) => state.login);
  const { createCustomerProfileLoading } = useSelector(
    (state) => state.createCustomerProfile
  );
  const BASE_URL = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    bio: "",
    isVintageWineStorageMember: false,
    lockerNumber: "",
    profileImage: null,
  });

  useEffect(() => {
    if (customerDetails) {
      setFormData({
        bio: customerDetails.about_me || "",
        isVintageWineStorageMember:
          customerDetails.is_vintage_member == 1 ? true : false,
        lockerNumber: customerDetails.locker_number || "",
        profileImage: customerDetails?.profile_image || null,
      });
    }
  }, [customerDetails]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    if (formData.bio == "") {
      toast.error("Please enter your bio");
      return false;
    } else if (formData.bio.length > 200) {
      toast.error("Bio should not exceed 200 characters");
      
      return false;
    } else if (formData.isVintageWineStorageMember && !formData.lockerNumber) {
      toast.error("Please enter your locker number");
      return false;
    } else if (formData.isVintageWineStorageMember && !/^\d+$/.test(formData.lockerNumber)) {
      // New validation: Check if locker number is a valid number
      toast.error("Locker number must be a valid number");
      return false;
    } else if (
      formData.profileImage &&
      formData.profileImage.size > 5 * 1024 * 1024
    ) {
      toast.error("Profile image should not exceed 5MB");
      return false;
    }
    return true;
  };
  console.log(
    formData.isVintageWineStorageMember,
    "isVintageWineStorageMember"
  );

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        let formDataToSend = new FormData();
        formData.bio && formDataToSend.append("about_me", formData.bio);
       ( formData.isVintageWineStorageMember==false || formData.isVintageWineStorageMember==true) &&
          formDataToSend.append(
            "is_vintage_member",
            formData.isVintageWineStorageMember ? 1 : 0
          );
        formData.lockerNumber &&
          formDataToSend.append(
            "locker_number",
            formData.isVintageWineStorageMember ? formData.lockerNumber : ""
          );
        formData.profileImage &&
          formDataToSend.append("profile_image", formData.profileImage);
        // await dispatch(updateProfile(formData));
        let res=await dispatch(CustomerActions.createProfile(formDataToSend));
        console.log(res,"res");
        // toast.success("Profile updated successfully");
        if(res.payload.success){
          handleClose();
         let res= await dispatch(CustomerActions.getCustomer());
         dispatch(setCustomer(res?.payload?.data));
        }
      } catch (error) {
        toast.error("Failed to update profile");
      }
    }
  };

  return (
    <div className="forgot-container">
      <Modal className="forgot-modal" show={show} onHide={handleClose}>
        <div className="main-modal-cont">
          <Modal.Header closeButton>
            <div className="modal-heading-text">
              <h2>Edit Profile</h2>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className="content-box">
              <div className="edit-profile-name">
                <div className="add-image">
                  <img
                    className="edit-image-modal"
                    src={
                      formData?.profileImage
                        ? formData.profileImage instanceof File
                          ? URL.createObjectURL(formData.profileImage)
                          : `${BASE_URL}/${customerDetails?.profile_image}`
                        : require("../Assets/Images/user-profile-image.svg")
                            .default
                    }
                    alt="user-profile"
                  />
                  <div className="add-icon">
                    <label htmlFor="profileImage">
                      <img
                        src={require("../Assets/Images/add-icon.svg").default}
                        alt="add-icon"
                      />
                    </label>
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      onChange={handleInputChange}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <p>Upload a photo</p>
                <div className="mt-2">
                  <h2>
                    {customerDetails?.name}, {customerDetails?.age}yrs
                  </h2>
                </div>
              </div>

              <div className="mt-4 edit-profile-form">
                <Form>
                  <div className="form-set">
                    <Form.Group className="mb-3" controlId="formBio">
                      <Form.Label>Add Bio:</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter here"
                        rows={4}
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </div>

                  <div className="member-of-vintage wine-storage">
                    <div>
                      <p>Are you member of vintage wine storage</p>
                    </div>
                    <div className="toggile-button-custom">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        name="isVintageWineStorageMember"
                        checked={formData.isVintageWineStorageMember}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {formData.isVintageWineStorageMember && (
                    <div className="form-set">
                      <Form.Group className="mb-3">
                        <Form.Label>Locker Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter here"
                          name="lockerNumber"
                          value={formData.lockerNumber}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="less-padding">
            <Button className="done-btn full-done-btn" onClick={handleSubmit}>
              {createCustomerProfileLoading ? "Saving..." : "Save"}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfilePopUp;
