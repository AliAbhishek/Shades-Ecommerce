import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ProtectedRoutesModals = ({ show, setShow, handleClose }) => {
  const navigate = useNavigate();
  return (
    <div className="forgot-container">
      <Modal className="forgot-modal" show={show} onHide={() => setShow(false)}>
        <div className="main-modal-cont">
          <Modal.Header closeButton>
            <div className="modal-heading-text">
              {/* <h2>{deleteAccount ? "Delete Account" : "Log Out"}</h2> */}
            </div>
          </Modal.Header>
          {/* {!below21 && (
            <Modal.Footer>
              <Button
                className="done-btn"
                onClick={() => {
                  ageVerification && handleLogin();
                }}
              >
                Yes
              </Button>
              <Button className="close-btn" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          )} */}

          <Modal.Body>
            <div className="content-box">
              <p>To continue please login.</p>
              <br />
              {/* <p>{below21 ? "Live freely, Drink responsibly" : ""}</p> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="done-btn" onClick={() => navigate("/login")}>
              Sign in
            </Button>
            <Button className="close-btn" onClick={() => setShow(false)}>
              No
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default ProtectedRoutesModals;
