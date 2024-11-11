import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../Components/Layout/Layout";
import LogOutModals from "../utils/LogOutModals";
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { clearAllPersistData } from "../Redux/Reducers/PersistSlice";
import EditProfilePopUp from "../utils/EditProfilePopUp";
import Loader from "../utils/Loader";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { customerDetails } = useSelector((state) => state.login);
  const { loading } = useSelector((state) => state.logout);

  const [show, setShow] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEditProfile = () => setShowEditProfile(false);
  const handleShowEditProfile = () => setShowEditProfile(true);

  const handleLogOut = async () => {
    let res = await dispatch(CustomerActions.logOut());
    if (res.payload.success) {
      dispatch(clearAllPersistData());
      navigate("/");
    }
  };

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="create-a-post-page best-profile">
              <h2>Profile</h2>
              <div className="profile-setting-btn ">
                <button onClick={() => navigate("/settings")}>Settings</button>
                <button onClick={() => setShow(true)}>Log out</button>
              </div>
            </div>

            <div className="profile-with-follower ">
              <div className="profile-pic-edit">
                <div className="add-image profile-change-pw">
                  <img
                    src={
                      customerDetails?.profile_image
                        ? `${BASE_URL}/${customerDetails?.profile_image}`
                        : require("../Assets/Images/user-profile-image.svg")
                            .default
                    }
                    alt="profile"
                  />
                  {/* <div className="add-icon">
                    <img
                      src={require("../Assets/Images/add-icon.svg").default}
                    />
                  </div> */}
                </div>
                <div>
                  <div className="profile-user-name">
                    <p>
                      {customerDetails && customerDetails?.name},{" "}
                      {customerDetails && customerDetails?.age}yrs
                    </p>
                    <button onClick={handleShowEditProfile}>
                      Edit Profile
                    </button>
                  </div>
                  <div className="my-followers mt-3">
                    <div className="pro-file-following">
                      <p>
                        <span>
                          {customerDetails &&
                            customerDetails?.following?.length}
                        </span>{" "}
                        Following
                      </p>
                    </div>
                    <div className="pro-file-following">
                      <p>
                        <span>
                          {customerDetails &&
                            customerDetails?.followers?.length}
                        </span>{" "}
                        Followers
                      </p>
                    </div>
                    <div className="pro-file-following">
                      <p>
                        <span>
                          {(customerDetails && customerDetails?.likes) || 0}
                        </span>{" "}
                        Likes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="create-post-and-event">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/create-post")}
                className="add-create-post-btn"
              >
                <p>
                  <span>
                    <img
                      src={require("../Assets/Images/add-icon-btn.svg").default}
                    />
                  </span>
                  Create Post
                </p>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/create-event")}
                className="add-create-post-btn"
              >
                <p>
                  <span>
                    <img
                      src={require("../Assets/Images/add-icon-btn.svg").default}
                    />
                  </span>
                  Create Event
                </p>
              </div>
            </div>

            <div className="post-events-tab">
              <div
                style={{ cursor: "pointer" }}
                className={`tab-post ${
                  activeTab === "posts" ? "active-post" : ""
                }`}
                onClick={() => setActiveTab("posts")}
              >
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M18.048 2.80469H2.72656V18.1261H18.048V2.80469Z"
                        stroke="white"
                        stroke-width="1.70238"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.84668 2.80469V18.1261"
                        stroke="white"
                        stroke-width="1.70238"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.9277 2.80469V18.1261"
                        stroke="white"
                        stroke-width="1.70238"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.048 7.92383H2.72656"
                        stroke="white"
                        stroke-width="1.70238"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.048 13.0059H2.72656"
                        stroke="white"
                        stroke-width="1.70238"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Posts
                </p>
              </div>

              <div
                style={{ cursor: "pointer" }}
                className={`tab-post ${
                  activeTab === "events" ? "active-post" : ""
                }`}
                onClick={() => setActiveTab("events")}
              >
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.50091 3.16211L10.0001 1.66211L11.4992 3.16211C11.7478 3.41032 12.0847 3.5497 12.4359 3.54961H16.8184C17.2202 3.54961 17.6056 3.70922 17.8897 3.99334C18.1738 4.27746 18.3334 4.66281 18.3334 5.06461V16.8179C18.3334 17.2197 18.1738 17.6051 17.8897 17.8892C17.6056 18.1733 17.2202 18.3329 16.8184 18.3329H3.18175C2.77995 18.3329 2.3946 18.1733 2.11048 17.8892C1.82636 17.6051 1.66675 17.2197 1.66675 16.8179V5.06461C1.66675 4.66281 1.82636 4.27746 2.11048 3.99334C2.3946 3.70922 2.77995 3.54961 3.18175 3.54961H7.56508C7.91603 3.54948 8.2526 3.41012 8.50091 3.16211Z"
                        stroke="#8E8E8E"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.4982 18.3316V17.8299C15.4982 16.9573 15.1517 16.1203 14.5347 15.5032C13.9177 14.8861 13.0809 14.5393 12.2082 14.5391H7.91242C7.03963 14.5391 6.2026 14.8858 5.58544 15.5029C4.96829 16.1201 4.62158 16.9571 4.62158 17.8299V18.3324"
                        stroke="#8E8E8E"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0603 12.1942C11.6969 12.1942 13.0236 10.8675 13.0236 9.23091C13.0236 7.59431 11.6969 6.26758 10.0603 6.26758C8.42365 6.26758 7.09692 7.59431 7.09692 9.23091C7.09692 10.8675 8.42365 12.1942 10.0603 12.1942Z"
                        stroke="#8E8E8E"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Events
                </p>
              </div>
            </div>

            {activeTab === "posts" && (
              <div
                className={`${
                  customerDetails?.posts?.length > 0 && "post-grid pb-5"
                }`}
              >
                {customerDetails?.posts?.length > 0 ? (
                  // Render posts here when available
                  customerDetails.posts.map((post) => (
                    <div key={post.id} className="post-image-cs">
                      <img src={post.imageUrl} alt={post.title} />
                      <div className="view-number">
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="15"
                            viewBox="0 0 22 15"
                            fill="none"
                          >
                            <path
                              d="M10.8289 10.8345C12.6703 10.8345 14.1631 9.34169 14.1631 7.50025C14.1631 5.6588 12.6703 4.16602 10.8289 4.16602C8.98741 4.16602 7.49463 5.6588 7.49463 7.50025C7.49463 9.34169 8.98741 10.8345 10.8289 10.8345Z"
                              fill="white"
                            />
                            <path
                              d="M21.3254 6.5783C18.7625 3.48122 14.8829 0.5 10.8288 0.5C6.77401 0.5 2.89351 3.4833 0.332277 6.5783C-0.110759 7.11344 -0.110759 7.89032 0.332277 8.42546C0.9762 9.20359 2.32615 10.7057 4.12913 12.0181C8.66989 15.3237 12.9778 15.3309 17.5286 12.0181C19.3316 10.7057 20.6815 9.20359 21.3254 8.42546C21.7672 7.89136 21.7695 7.11519 21.3254 6.5783ZM10.8288 2.83396C13.4029 2.83396 15.4968 4.92786 15.4968 7.50188C15.4968 10.0759 13.4029 12.1698 10.8288 12.1698C8.25482 12.1698 6.16093 10.0759 6.16093 7.50188C6.16093 4.92786 8.25482 2.83396 10.8288 2.83396Z"
                              fill="white"
                            />
                          </svg>
                          {post.views}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="pb-5">
                    <div className="no-posts-container ">
                      {/* <img 
                      src={require("../Assets/Images/no-posts-icon.svg").default} 
                      alt="No posts" 
                      className="no-posts-icon"
                    /> */}
                      <h3 className="no-posts-title">No posts yet</h3>
                      <p className="no-posts-description">
                        Share your first wine experience or event!
                      </p>
                      <button
                        className="create-post-btn"
                        onClick={() => navigate("/create-post")}
                      >
                        Create Your First Post
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "events" && (
              <div className="events-grid pb-5">
                {customerDetails?.events?.length > 0 ? (
                  // Render events here when available
                  customerDetails.events.map((event) => (
                    <div key={event.id} className="event-card">
                      {/* Event card content */}
                    </div>
                  ))
                ) : (
                  <div className="no-events-container">
                    {/* <img 
          src={require("../Assets/Images/no-events-icon.svg").default} 
          alt="No events" 
          className="no-events-icon"
        /> */}
                    <h3 className="no-events-title">No events yet</h3>
                    <p className="no-events-description">
                      Create your first wine tasting event!
                    </p>
                    <button
                      className="create-event-btn"
                      onClick={() => navigate("/create-event")}
                    >
                      Create Your First Event
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {show && (
            <LogOutModals
              logOut={true}
              show={show}
              setShow={setShow}
              handleClose={handleClose}
              handleLogOut={handleLogOut}
            />
          )}

          {showEditProfile && (
            <EditProfilePopUp
              show={showEditProfile}
              setShow={setShowEditProfile}
              handleClose={handleCloseEditProfile}
            />
          )}
        </Container>
      </div>
    </Layout>
  );
}
