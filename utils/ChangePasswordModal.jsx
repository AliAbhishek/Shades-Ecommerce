import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";

const ChangePasswordModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = [];

    // Old password validation
    if (!formData.oldPassword) {
      errors.push("Old password is required");
    }

    // New password validations
    else if (!formData.newPassword) {
      errors.push("New password is required");
    } else if (formData.newPassword.length < 8) {
      errors.push("Password must be at least 8 characters long");
    } else if (!/[a-z]/.test(formData.newPassword)) {
      errors.push("Password must contain at least one lowercase letter");
    } else if (!/[A-Z]/.test(formData.newPassword)) {
      errors.push("Password must contain at least one uppercase letter");
    } else if (
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(formData.newPassword)
    ) {
      errors.push("Password must contain at least one special character");
    }

    // Confirm password validations
    else if (!formData.confirmPassword) {
      errors.push("Please confirm your new password");
    } else if (formData.newPassword !== formData.confirmPassword) {
      errors.push("Passwords do not match");
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.length === 0) {
      // TODO: Implement password change logic here
      console.log("Form data:", formData);
      setLoading(true);
      let response = await dispatch(CustomerActions.changePassword(formData));
      console.log(response);
      if (response.payload.success) {
        toast.success(response.payload.message);
        handleClose();
        setLoading(false);
      } else {
        toast.error(response.payload.message);
        setLoading(false);
      }
    } else {
      errors.forEach((error) => toast.error(error));
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id="language-modal2"
      //   tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!show}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered language-modal-width">
        <div className="modal-content language-modal-content">
          <div className="modal-header">
            <h2
              className="modal-title fs-5 language-modal-title"
              id="exampleModalLabel"
            >
              Change Password
            </h2>
            <button
              type="button"
              className="btn-close language-modal-close-btn"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group new-pass-word mb-3">
                <label htmlFor="oldPassword">Old Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  placeholder="Enter your old password"
                />
              </div>
              <div className="form-group new-pass-word mb-3">
                <label htmlFor="newPassword">New Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                />
              </div>
              <div className="form-group new-pass-word mb-3">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                />
              </div>
              <div className="modal-footer language-modal-footer new-save-btn-ft">
                <button type="submit" className="btn logout-btn width-full">
                  {loading ? "Loading..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
