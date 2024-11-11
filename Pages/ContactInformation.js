import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ContactInfo } from "../Redux/Reducers/PersistSlice";
import Header from "../Components/Header";

export default function ContactInformation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contactInfo } = useSelector((state) => state.persist);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    countryCode: "",
    address: "",
    country: "",
  });

  useEffect(() => {
    if (contactInfo) {
      setFormData(contactInfo);
    }
  }, [contactInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value.slice(country.dialCode.length),
      countryCode: `+${country.dialCode}`,
      country: country.name,
    }));
  };

  const validateForm = () => {
    if (!formData.phoneNumber.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    if (!formData.address.trim()) {
      toast.error("Address is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData, "formData");
    dispatch(ContactInfo(formData));
    navigate("/membership-plan");

    // try {
    //   const response = await dispatch(CustomerActions.updateContactInfo({
    //     userId,
    //     ...formData
    //   }));

    //   if (response.payload.success) {
    //     toast.success(response.payload.message);
    //     navigate("/membership-plan");
    //   } else {
    //     toast.error(response.payload.message);
    //   }
    // } catch (error) {
    //   console.error("Error updating contact information:", error);
    //   toast.error("Something went wrong");
    // }
    // setLoading(false);
  };

  return (
    <div>
      <Header />
      <Container fluid className="g-0">
        <div className="sign-banner-part">
          <div className="inner-login-box">
            <div className="center-align-box center-align-height">
              {/* <div className="left-login-banner">
                <img src={require("../Assets/Images/login-logo.png")} alt="Login Logo" />
              </div> */}
              <div className="right-banner-part">
                <div className="login-cmn-box">
                  <div className="login-box-inner-wrap">
                    <div className="login-logo">
                      <h2>Contact Information</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <div className="form-set">
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <Form.Label>Phone Number</Form.Label>
                          <PhoneInput
                            country={"us"}
                            value={`${formData.countryCode}${formData.phoneNumber}`}
                            onChange={handlePhoneChange}
                            inputProps={{
                              name: "phoneNumber",
                              required: true,
                              className: "form-control",
                            }}
                            containerClass="phone-input-container"
                            buttonClass="country-dropdown"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicAddress"
                        >
                          <Form.Label>Address:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter here"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCountry"
                        >
                          <Form.Label>Country:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter here"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            readOnly
                          />
                        </Form.Group>
                      </div>

                      <button
                        type="submit"
                        className="submit"
                        // disabled={loading}
                      >
                        Save
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
