import { Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";
import { Form, Link, useNavigate } from "react-router-dom";
// import TermsService from "./TermsService";
import { useState } from "react";
import LogOutModals from "../utils/LogOutModals";
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { clearAllPersistData } from "../Redux/Reducers/PersistSlice";
import Loader from "../utils/Loader";
import ChangePasswordModal from "../utils/ChangePasswordModal";

export default function Settings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deleteAccountLoading, loading } = useSelector(
    (state) => state.logout
  );
  const { customerDetails } = useSelector((state) => state.login);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowDeleteAccount = () => setShowDeleteAccount(true);
  const handleCloseDeleteAccount = () => setShowDeleteAccount(false);

  const handleDeleteAccount = async () => {
    console.log("delete account");
    let response = await dispatch(CustomerActions.deleteAccount());
    if (response.payload.success) {
      dispatch(clearAllPersistData());
      handleCloseDeleteAccount();

      navigate("/");
    }
  };

  const handleLogOut = async () => {
    let res = await dispatch(CustomerActions.logOut());
    if (res.payload.success) {
      dispatch(clearAllPersistData());
      handleClose();
      navigate("/");
    }
  };

  return (
    <Layout>
      {(deleteAccountLoading || loading) && <Loader />}
      <div className="settings-page">
        <Container>
          <Row>
            <Col className="heading-wrap">
              <div className="settings-heading">
                <h2>Settings</h2>
              </div>
              <div>
                <button onClick={() => setShow(true)} className="logout-btn">
                  Log out
                </button>
              </div>
            </Col>
          </Row>
          <div className="py-5  grid-setting">
            <div>
              <button className="settings-btn">
                <div class="form-check form-switch settings-notification">
                  <label class="form-check-label" for="notificationswitch">
                    Notification
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="notificationswitch"
                  />
                </div>
              </button>
              <button className="settings-btn">
                <div class="form-check form-switch settings-notification">
                  <label class="form-check-label" for="locationswitch">
                    Location
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="locationswitch"
                  />
                </div>
              </button>
              <Link to="/subscription">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Subscription</label>
                  </div>
                </button>
              </Link>
              <Link to="/support">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Support</label>
                  </div>
                </button>
              </Link>

              {customerDetails?.login_type !== 1 && (
                <button
                  className="settings-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#language-modal2"
                >
                  <div
                    onClick={() => setChangePasswordModal(true)}
                    class="form-check form-switch settings-notification"
                  >
                    <label class="form-check-label">Password Change</label>
                  </div>
                </button>
              )}
            </div>

            <div>
              <button
                className="settings-btn"
                data-bs-toggle="modal"
                data-bs-target="#language-modal"
              >
                <div class="form-check form-switch settings-notification">
                  <label class="form-check-label">Language</label>
                </div>
              </button>
              <Link to="/results">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Contact Information</label>
                  </div>
                </button>
              </Link>
              <Link to="/history-wine">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">
                      Documents verification
                    </label>
                  </div>
                </button>
              </Link>
              <Link to="/refer-friend">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Refer a Friend</label>
                  </div>
                </button>
              </Link>
              <button
                onClick={() => handleShowDeleteAccount()}
                className="settings-btn"
              >
                <div class="form-check form-switch settings-notification">
                  <label class="form-check-label">Delete account</label>
                </div>
              </button>
            </div>

            <div>
              <Link to="/saved-post">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Saved Posts</label>
                  </div>
                </button>
              </Link>
              <Link to="/wine-education">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Wine education</label>
                  </div>
                </button>
              </Link>
              <Link to="/transactions">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Transactions</label>
                  </div>
                </button>
              </Link>
              <Link to="/terms-service">
                <button className="settings-btn">
                  <div class="form-check form-switch settings-notification">
                    <label class="form-check-label">Terms & services</label>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </Container>

        {showDeleteAccount && (
          <LogOutModals
            deleteAccount={true}
            show={showDeleteAccount}
            setShow={setShowDeleteAccount}
            handleClose={handleCloseDeleteAccount}
            handleDeleteAccount={handleDeleteAccount}
          />
        )}

        {show && (
          <LogOutModals
            logOut={true}
            show={show}
            setShow={setShow}
            handleClose={handleClose}
            handleLogOut={handleLogOut}
          />
        )}

        {changePasswordModal && (
          <ChangePasswordModal
            show={changePasswordModal}
            handleClose={() => setChangePasswordModal(false)}
          />
        )}
      </div>
    </Layout>
  );
}
