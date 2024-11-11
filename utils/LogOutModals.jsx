import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const LogOutModals = ({
  show,
  setShow,
  handleClose,
  handleLogOut,
  deleteAccount,
  handleDeleteAccount
}) => {
  return (
    <div className="forgot-container">
      <Modal className="forgot-modal" show={show} onHide={handleClose}>
        <div className="main-modal-cont">
          <Modal.Header closeButton>
            <div className="modal-heading-text">
              <h2>{deleteAccount ? "Delete Account" : "Log Out"}</h2>
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
              <p>
               Are you sure you want to {deleteAccount ? "delete account" : "log out"}?
              </p>
              <br />
              {/* <p>{below21 ? "Live freely, Drink responsibly" : ""}</p> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
              <Button
                className="done-btn"
                onClick={deleteAccount ? handleDeleteAccount : handleLogOut}
              >
                Yes
              </Button>
              <Button className="close-btn" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModals;
