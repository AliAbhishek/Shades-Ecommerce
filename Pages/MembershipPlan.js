import React from "react";
import { Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { ContactInfo, createProfileData, IdProof, IsProfileCreated } from "../Redux/Reducers/PersistSlice";
import Header from "../Components/Header";

export default function MembershipPlan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contactInfo, createProfiledata, idproof } = useSelector(
    (state) => state.persist
  );
  const { createCustomerProfileLoading } = useSelector(
    (state) => state.createCustomerProfile
  );
  console.log(contactInfo, createProfiledata, idproof, "contactInfo");

  const handleSubmit = async() => {
    
    if (contactInfo && createProfiledata && idproof) {
      let formDataToSend = new FormData();
      formDataToSend.append("profile_image", createProfiledata.profileImage);
      formDataToSend.append("about_me", createProfiledata.bio);
      formDataToSend.append("name", createProfiledata.name);
      formDataToSend.append("country", contactInfo.country);
      formDataToSend.append("phone_number", contactInfo.phoneNumber);
      formDataToSend.append("country_code", contactInfo.countryCode);
      formDataToSend.append("address", contactInfo.address);
      formDataToSend.append("upload_id", idproof);
      formDataToSend.append("upload_id_date",  new Date().toISOString());
      formDataToSend.append("is_profile_completed",  1);

      let res=await dispatch(CustomerActions.createProfile(formDataToSend));
      console.log(res,"res");
      if(res.payload.success){
        dispatch(createProfileData(null));
        dispatch(IdProof(null));
        dispatch(ContactInfo(null));
        
        navigate("/");
      }
      //  formDataToSend.append("user_id",userId)
    }
  };

  return (
    <div className="member-ship-plan">
      <Header />
      {createCustomerProfileLoading && <Loader />}
      <Container fluid className="">
        <div className="member-wapper">
          <div className="top-main-heading-mp">
            <h1>Membership Plan</h1>
            <h3>Go Premium</h3>
            <p>
              Members spending over $1200 annually gain access to exclusive
              sales, discounted events, and priority status
            </p>
          </div>
          <div className="plans">
            <div className="plans-grid">
              <div className="basic-plan">
                <h2>Basic Plan</h2>
                <div className="plans-list">
                  <ul>
                    <li>First month free</li>
                    <li>Cancel anytime</li>
                  </ul>
                </div>
                <div className="basic-plan-image">
                  <img src={require("../Assets/Images/basic-plane.png")} />
                </div>
              </div>
              <div className="basic-plan best-value-plans">
                <div className="best-value">
                  <h2>Beginners Plan</h2>
                  <p>Best Value</p>
                </div>
                <div className="plans-list">
                  <ul>
                    <li>4 bottles per month</li>
                    <li>Priority event invites.</li>
                  </ul>
                </div>
                <div className="basic-plan-image">
                  <img src={require("../Assets/Images/basic-plane.png")} />
                </div>
              </div>
              <div className="basic-plan">
                <h2>Cellar Plan</h2>
                <div className="plans-list">
                  <ul>
                    <li>4 bottles per month</li>
                    <li>Priority event invites.</li>
                  </ul>
                </div>
                <div className="basic-plan-image">
                  <img src={require("../Assets/Images/basic-plane.png")} />
                </div>
              </div>
            </div>
          </div>

          <div className="pay-ment-btn">
            <button onClick={handleSubmit}>Pay $10</button>
            <p onClick={handleSubmit}>Start free trial</p>
          </div>

          <div class="table-responsive mt-5 mb-5">
            <Table size="sm" className="table-cmn">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Basic</th>
                  <th>Beginners</th>
                  <th>Cellar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Price </p>
                    </div>
                  </td>

                  <td>
                    <div className="month-price">
                      <p>$10/month</p>
                    </div>
                  </td>
                  <td>
                    <div className="month-price">
                      <p>$15/month</p>
                    </div>
                  </td>
                  <td>
                    <div className="month-price">
                      <p>$20/month</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Feature 1 </p>
                    </div>
                  </td>

                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Feature 1 </p>
                    </div>
                  </td>

                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Feature 1 </p>
                    </div>
                  </td>

                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Feature 1 </p>
                    </div>
                  </td>

                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="month-price">
                      <p>Feature 1 </p>
                    </div>
                  </td>

                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/close-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="close-fill">
                      <img
                        src={require("../Assets/Images/check-fill.svg").default}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="important-note">
            <div className="notes-heading">
              <h2>Important Note!</h2>
              <p>Subscription Details</p>
            </div>
            <div className="notes-disp">
              <ul>
                <li>
                  Once a Membership has been purchased, payment will be charged
                  to your iTunes or Google Play account.
                </li>
                <li>
                  Your subscription will automatically renew unless auto-renewal
                  is turned off at least 48 hours before the end of the current
                  subscription period.
                </li>
                <li>
                  Your account will be charged for renewal within 48 hours prior
                  to the end of the current subscription period.
                </li>
                <li>
                  Please read our terms of service and privacy policy for more
                  information.
                </li>
              </ul>
            </div>
            <div className="links-pol">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
