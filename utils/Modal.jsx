import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Modals = ({
  show,
  setShow,
  handleClose,
  below21,
  handleLogin,
  ageVerification,
}) => {
  return (
    <div className="forgot-container">
      <Modal className="forgot-modal" show={show} onHide={handleClose}>
        <div className="main-modal-cont">
          <Modal.Header closeButton>
            <div className="modal-heading-text">
              <h2>{below21 ? "You are below 21" : "Are You 21 or Older"}</h2>
            </div>
          </Modal.Header>
          {!below21 && (
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
          )}

          <Modal.Body>
            <div className="content-box">
              <p>
                {below21
                  ? "To comply with legal requirements, you must be 21 or older to use this app."
                  : "By entering this website you agree that you’re of legal age."}
              </p>
              <br />
              <p>{below21 ? "Live freely, Drink responsibly" : ""}</p>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
