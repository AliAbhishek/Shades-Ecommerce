import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { FaFilePdf } from "react-icons/fa"; // Make sure to install react-icons if you haven't
import { IdProof } from "../Redux/Reducers/PersistSlice";
import Header from "../Components/Header";

export default function VerifyIdentity() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { idproof } = useSelector((state) => state.persist);
  console.log(idproof, "idproof");
  const [idProof, setIdProof] = useState(null);
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    if (idproof) {
      setIdProof(idproof);
    }
  }, [idproof]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      // 5MB limit
      setIdProof(file);
      setFileType(file.type);
    } else {
      toast.error("File size should not exceed 5MB");
    }
  };

  const validateForm = () => {
    if (!idProof) {
      toast.error("Please upload an ID proof");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(IdProof(idProof));
    navigate("/contact-information");

    // try {
    //   const formData = new FormData();
    //   formData.append("userId", userId);
    //   formData.append("idProof", idProof);

    //   const response = await dispatch(CustomerActions.verifyIdentity(formData));

    //   if (response.payload.success) {
    //     toast.success(response.payload.message);
    //     navigate("/contact-information");
    //   } else {
    //     toast.error(response.payload.message);
    //   }
    // } catch (error) {
    //   console.error("Error verifying identity:", error);
    //   toast.error("Something went wrong");
    // }
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
                  <div className="login-box-inner-wrap">
                    <div className="login-logo">
                      <h2>Verify Identity</h2>
                    </div>

                    <Form onSubmit={handleSubmit}>
                      <div className="upload-id">
                        <div className="label-name mt-5">
                          <p>Upload Id:</p>
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            document.getElementById("idProof").click()
                          }
                          className="click-to-upload"
                        >
                          {idProof ? (
                            <div className="full-width-image">
                              {typeof idProof === "string" ? (
                                <img
                                  onClick={() =>
                                    document.getElementById("idProof").click()
                                  }
                                  // style={{
                                  //   width: "100%",
                                  //   height: "100%",
                                  //   objectFit: "cover",
                                  // }}
                                  src={idProof}
                                  alt="ID Proof"
                                />
                              ) : idProof instanceof File ? (
                                idProof.type.startsWith("image/") ? (
                                  <img
                                    onClick={() =>
                                      document.getElementById("idProof").click()
                                    }
                                    // style={{
                                    //   width: "100%",
                                    //   height: "100%",
                                    //   objectFit: "cover",
                                    // }}
                                    src={URL.createObjectURL(idProof)}
                                    alt="ID Proof"
                                  />
                                ) : (
                                  <div
                                    onClick={() =>
                                      document.getElementById("idProof").click()
                                    }
                                    // style={{
                                    //   width: "100%",
                                    //   height: "100%",
                                    //   display: "flex",
                                    //   flexDirection: "column",
                                    //   justifyContent: "center",
                                    //   alignItems: "center",
                                    //   backgroundColor: "#f0f0f0",
                                    //   padding: "20px",
                                    // }}
                                  >
                                    <FaFilePdf size={50} color="#ff0000" />
                                    <p
                                      style={{
                                        marginTop: "10px",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      {idProof.name}
                                    </p>
                                  </div>
                                )
                              ) : null}
                              {/* <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  // background: 'rgba(0,0,0,0.5)',
                                  color: "white",
                                  cursor: "pointer",
                                }}
                              ></div> */}
                            </div>
                          ) : (
                            <label htmlFor="idProof">
                              <p>Click to Upload</p>
                              <span> (Max. File size: 5 MB)</span>
                            </label>
                          )}

                          <input
                            type="file"
                            id="idProof"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            accept="image/*,.pdf"
                          />
                        </div>
                      </div>
                      <div className="valid-id">
                        <p>
                          *you can upload Driving license or any Valid ID proof
                        </p>
                      </div>
                      {idProof && (
                        <p className="mt-2">Selected file: {idProof.name}</p>
                      )}
                      <button type="submit" className="submit">
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
