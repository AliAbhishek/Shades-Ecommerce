import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../Components/Layout/Layout";

export default function Community() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="main-landing-page">
        <Container fluid className="g-0 bott-left-corner">
          <div className="landing-banner">
            <Container>
              <div className="banner-text">
                <div className="heading-text">
                  <img
                    src={
                      require("../Assets/Images/Join-the-cheers.svg").default
                    }
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
                <div className="banner-btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </Container>
            <div className="side-corner">
              <img
                src={require("../Assets/Images/bott-banner-left.svg").default}
              />
            </div>
          </div>
        </Container>

        <section>
          <Container>
            <div className="community-post mt-5">
              <div className="left-post-section">
                <div className="back-ground-post  ">
                  <div className="first-new-post">
                    <div className="user-post-name">
                      <div className="name-and-prof-pic">
                        <img
                          src={require("../Assets/Images/user-avatar.png")}
                        />
                      </div>
                      <div className="comm-user-post">
                        <h2>Vishnu Kumar Agrawal</h2>
                        <p>Los Angeles, USA</p>
                      </div>
                    </div>
                    <div className="follow-button">
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className="post-image">
                    <img src={require("../Assets/Images/post-image.png")} />
                  </div>

                  <div className="comment-section">
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/licke-icon.svg").default
                            }
                          />
                        </span>
                        Like
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/comment-icon.svg")
                                .default
                            }
                          />
                        </span>
                        Comment
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/share-icon.svg").default
                            }
                          />
                        </span>
                        Share
                      </p>
                    </div>
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/save-icon.svg").default
                            }
                          />
                        </span>
                        Save
                      </p>
                    </div>
                  </div>

                  <div className="post-disp">
                    <span>2 min ago</span>
                    <h3>
                      The Macallan Lalique 55 years Old single Malt Scotch
                      Whisky
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>

                <div className="back-ground-post mt-5">
                  <div className="first-new-post">
                    <div className="user-post-name">
                      <div className="name-and-prof-pic">
                        <img
                          src={require("../Assets/Images/user-avatar.png")}
                        />
                      </div>
                      <div className="comm-user-post">
                        <h2>Vishnu Kumar Agrawal</h2>
                        <p>Los Angeles, USA</p>
                      </div>
                    </div>
                    <div className="follow-button">
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className="post-image">
                    <img src={require("../Assets/Images/post-image.png")} />

                    <div
                      className="event-view-text"
                      onClick={() => navigate("/event-view")}
                    >
                      <p>Event</p>
                    </div>
                  </div>

                  <div className="comment-section">
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/licke-icon.svg").default
                            }
                          />
                        </span>
                        Like
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/comment-icon.svg")
                                .default
                            }
                          />
                        </span>
                        Comment
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/share-icon.svg").default
                            }
                          />
                        </span>
                        Share
                      </p>
                    </div>
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/save-icon.svg").default
                            }
                          />
                        </span>
                        Save
                      </p>
                    </div>
                  </div>

                  <div className="post-disp">
                    <span>2 min ago</span>
                    <h3>
                      The Macallan Lalique 55 years Old single Malt Scotch
                      Whisky
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>

                <div className="back-ground-post mt-5 ">
                  <div className="first-new-post">
                    <div className="user-post-name">
                      <div className="name-and-prof-pic">
                        <img
                          src={require("../Assets/Images/user-avatar.png")}
                        />
                      </div>
                      <div className="comm-user-post">
                        <h2>Vishnu Kumar Agrawal</h2>
                        <p>Los Angeles, USA</p>
                      </div>
                    </div>
                    <div className="follow-button">
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className="post-image">
                    <img src={require("../Assets/Images/post-image.png")} />
                  </div>

                  <div className="comment-section">
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/licke-icon.svg").default
                            }
                          />
                        </span>
                        Like
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/comment-icon.svg")
                                .default
                            }
                          />
                        </span>
                        Comment
                      </p>
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/share-icon.svg").default
                            }
                          />
                        </span>
                        Share
                      </p>
                    </div>
                    <div className="like-and-share">
                      <p>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/save-icon.svg").default
                            }
                          />
                        </span>
                        Save
                      </p>
                    </div>
                  </div>

                  <div className="post-disp">
                    <span>2 min ago</span>
                    <h3>
                      The Macallan Lalique 55 years Old single Malt Scotch
                      Whisky
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-post-section">
                <div className="create-event">
                  <h2>Create Event</h2>
                  <div
                    className="create-event mt-4"
                    onClick={() => navigate("/create-event")}
                  >
                    <img src={require("../Assets/Images/first-event.png")} />
                    <p>Click to create an event</p>
                  </div>
                </div>
                <div className="create-event mt-4">
                  <h2>Create Post</h2>
                  <div
                    className="create-event mt-4"
                    onClick={() => navigate("/create-post")}
                  >
                    <img src={require("../Assets/Images/create-post-bg.png")} />
                    <p>Click to create a post</p>
                  </div>
                </div>
                <div className="create-event  mt-4">
                  <h2>Add resources</h2>
                  <div
                    className="create-event mt-4"
                    onClick={() => navigate("/create-course")}
                  >
                    <img src={require("../Assets/Images/create-course.png")} />
                    <p>Click to create a course</p>
                  </div>
                </div>

                <div className="famous-wine mt-5">
                  <div className="title-top-pink">
                    <h2>Famous Wines</h2>
                  </div>

                  <div className="red-wine-glass full-width">
                    <div className="glass-address">
                      <div className="glass-image cart-image">
                        <img
                          src={
                            require("../Assets/Images/wine-bottle-search.svg")
                              .default
                          }
                        />
                      </div>
                      <div className="glass-disp-address cart-wine">
                        <div className="product-name add-delete-icon">
                          <h4>
                            St.Lucia Distillers Chairman’s Reserve 1931 Wine
                          </h4>
                        </div>
                        <div className="product-location">
                          <p>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                              >
                                <path
                                  opacity="0.8"
                                  d="M5.86245 14.8535C5.83472 14.8296 5.8087 14.8044 5.78526 14.7772C4.3208 13.0877 2.98643 11.3064 1.94313 9.3256C1.47909 8.44458 1.08367 7.53438 0.87895 6.55417C0.593606 5.18801 0.806043 3.89808 1.5194 2.69911C2.21932 1.52224 3.34183 0.645185 4.65961 0.244773C5.86503 -0.121351 7.06158 -0.0754437 8.22554 0.370309C9.11674 0.711779 9.91187 1.28193 10.5143 2.01673C11.2214 2.87933 11.6185 3.85444 11.7303 4.9205C11.8195 5.7712 11.6723 6.59583 11.4015 7.40261C10.9969 8.60724 10.3974 9.7178 9.72288 10.7901C8.8274 12.2135 7.80582 13.5454 6.69561 14.8104C6.69447 14.8118 6.69304 14.8132 6.6919 14.8146C6.48146 15.049 6.10148 15.0595 5.86245 14.8535ZM6.2573 8.19635C7.78752 8.19124 9.02153 6.96025 9.01639 5.4439C9.01124 3.93945 7.74921 2.69656 6.24558 2.71469C4.71479 2.73339 3.49107 3.95532 3.49393 5.46289C3.49679 6.97017 4.74138 8.20145 6.2573 8.19635Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            Los Angeles, USA
                          </p>
                        </div>
                        <div className="product-prize">
                          <div className="bottle-size">
                            <p>Bottle(750ml)</p>
                            <span>USD 70454.99/1000ml</span>
                          </div>
                          <div className="bottle-size">
                            <p>Vintage - 2016</p>
                            <h3>USD 52,841</h3>
                          </div>
                          <span>
                            <img
                              src={
                                require("../Assets/Images/pink-stars.svg")
                                  .default
                              }
                            />{" "}
                            (230 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="red-wine-glass full-width mt-4">
                    <div className="glass-address">
                      <div className="glass-image cart-image">
                        <img
                          src={
                            require("../Assets/Images/wine-bottle-search.svg")
                              .default
                          }
                        />
                      </div>
                      <div className="glass-disp-address cart-wine">
                        <div className="product-name add-delete-icon">
                          <h4>
                            St.Lucia Distillers Chairman’s Reserve 1931 Wine
                          </h4>
                        </div>
                        <div className="product-location">
                          <p>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                              >
                                <path
                                  opacity="0.8"
                                  d="M5.86245 14.8535C5.83472 14.8296 5.8087 14.8044 5.78526 14.7772C4.3208 13.0877 2.98643 11.3064 1.94313 9.3256C1.47909 8.44458 1.08367 7.53438 0.87895 6.55417C0.593606 5.18801 0.806043 3.89808 1.5194 2.69911C2.21932 1.52224 3.34183 0.645185 4.65961 0.244773C5.86503 -0.121351 7.06158 -0.0754437 8.22554 0.370309C9.11674 0.711779 9.91187 1.28193 10.5143 2.01673C11.2214 2.87933 11.6185 3.85444 11.7303 4.9205C11.8195 5.7712 11.6723 6.59583 11.4015 7.40261C10.9969 8.60724 10.3974 9.7178 9.72288 10.7901C8.8274 12.2135 7.80582 13.5454 6.69561 14.8104C6.69447 14.8118 6.69304 14.8132 6.6919 14.8146C6.48146 15.049 6.10148 15.0595 5.86245 14.8535ZM6.2573 8.19635C7.78752 8.19124 9.02153 6.96025 9.01639 5.4439C9.01124 3.93945 7.74921 2.69656 6.24558 2.71469C4.71479 2.73339 3.49107 3.95532 3.49393 5.46289C3.49679 6.97017 4.74138 8.20145 6.2573 8.19635Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            Los Angeles, USA
                          </p>
                        </div>
                        <div className="product-prize">
                          <div className="bottle-size">
                            <p>Bottle(750ml)</p>
                            <span>USD 70454.99/1000ml</span>
                          </div>
                          <div className="bottle-size">
                            <p>Vintage - 2016</p>
                            <h3>USD 52,841</h3>
                          </div>
                          <span>
                            <img
                              src={
                                require("../Assets/Images/pink-stars.svg")
                                  .default
                              }
                            />{" "}
                            (230 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="red-wine-glass full-width mt-4">
                    <div className="glass-address">
                      <div className="glass-image cart-image">
                        <img
                          src={
                            require("../Assets/Images/wine-bottle-search.svg")
                              .default
                          }
                        />
                      </div>
                      <div className="glass-disp-address cart-wine">
                        <div className="product-name add-delete-icon">
                          <h4>
                            St.Lucia Distillers Chairman’s Reserve 1931 Wine
                          </h4>
                        </div>
                        <div className="product-location">
                          <p>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                              >
                                <path
                                  opacity="0.8"
                                  d="M5.86245 14.8535C5.83472 14.8296 5.8087 14.8044 5.78526 14.7772C4.3208 13.0877 2.98643 11.3064 1.94313 9.3256C1.47909 8.44458 1.08367 7.53438 0.87895 6.55417C0.593606 5.18801 0.806043 3.89808 1.5194 2.69911C2.21932 1.52224 3.34183 0.645185 4.65961 0.244773C5.86503 -0.121351 7.06158 -0.0754437 8.22554 0.370309C9.11674 0.711779 9.91187 1.28193 10.5143 2.01673C11.2214 2.87933 11.6185 3.85444 11.7303 4.9205C11.8195 5.7712 11.6723 6.59583 11.4015 7.40261C10.9969 8.60724 10.3974 9.7178 9.72288 10.7901C8.8274 12.2135 7.80582 13.5454 6.69561 14.8104C6.69447 14.8118 6.69304 14.8132 6.6919 14.8146C6.48146 15.049 6.10148 15.0595 5.86245 14.8535ZM6.2573 8.19635C7.78752 8.19124 9.02153 6.96025 9.01639 5.4439C9.01124 3.93945 7.74921 2.69656 6.24558 2.71469C4.71479 2.73339 3.49107 3.95532 3.49393 5.46289C3.49679 6.97017 4.74138 8.20145 6.2573 8.19635Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            Los Angeles, USA
                          </p>
                        </div>
                        <div className="product-prize">
                          <div className="bottle-size">
                            <p>Bottle(750ml)</p>
                            <span>USD 70454.99/1000ml</span>
                          </div>
                          <div className="bottle-size">
                            <p>Vintage - 2016</p>
                            <h3>USD 52,841</h3>
                          </div>
                          <span>
                            <img
                              src={
                                require("../Assets/Images/pink-stars.svg")
                                  .default
                              }
                            />{" "}
                            (230 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="red-wine-glass full-width mt-4">
                    <div className="glass-address">
                      <div className="glass-image cart-image">
                        <img
                          src={
                            require("../Assets/Images/wine-bottle-search.svg")
                              .default
                          }
                        />
                      </div>
                      <div className="glass-disp-address cart-wine">
                        <div className="product-name add-delete-icon">
                          <h4>
                            St.Lucia Distillers Chairman’s Reserve 1931 Wine
                          </h4>
                        </div>
                        <div className="product-location">
                          <p>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                              >
                                <path
                                  opacity="0.8"
                                  d="M5.86245 14.8535C5.83472 14.8296 5.8087 14.8044 5.78526 14.7772C4.3208 13.0877 2.98643 11.3064 1.94313 9.3256C1.47909 8.44458 1.08367 7.53438 0.87895 6.55417C0.593606 5.18801 0.806043 3.89808 1.5194 2.69911C2.21932 1.52224 3.34183 0.645185 4.65961 0.244773C5.86503 -0.121351 7.06158 -0.0754437 8.22554 0.370309C9.11674 0.711779 9.91187 1.28193 10.5143 2.01673C11.2214 2.87933 11.6185 3.85444 11.7303 4.9205C11.8195 5.7712 11.6723 6.59583 11.4015 7.40261C10.9969 8.60724 10.3974 9.7178 9.72288 10.7901C8.8274 12.2135 7.80582 13.5454 6.69561 14.8104C6.69447 14.8118 6.69304 14.8132 6.6919 14.8146C6.48146 15.049 6.10148 15.0595 5.86245 14.8535ZM6.2573 8.19635C7.78752 8.19124 9.02153 6.96025 9.01639 5.4439C9.01124 3.93945 7.74921 2.69656 6.24558 2.71469C4.71479 2.73339 3.49107 3.95532 3.49393 5.46289C3.49679 6.97017 4.74138 8.20145 6.2573 8.19635Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            Los Angeles, USA
                          </p>
                        </div>
                        <div className="product-prize">
                          <div className="bottle-size">
                            <p>Bottle(750ml)</p>
                            <span>USD 70454.99/1000ml</span>
                          </div>
                          <div className="bottle-size">
                            <p>Vintage - 2016</p>
                            <h3>USD 52,841</h3>
                          </div>
                          <span>
                            <img
                              src={
                                require("../Assets/Images/pink-stars.svg")
                                  .default
                              }
                            />{" "}
                            (230 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="red-wine-glass full-width mt-4">
                    <div className="glass-address">
                      <div className="glass-image cart-image">
                        <img
                          src={
                            require("../Assets/Images/wine-bottle-search.svg")
                              .default
                          }
                        />
                      </div>
                      <div className="glass-disp-address cart-wine">
                        <div className="product-name add-delete-icon">
                          <h4>
                            St.Lucia Distillers Chairman’s Reserve 1931 Wine
                          </h4>
                        </div>
                        <div className="product-location">
                          <p>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                              >
                                <path
                                  opacity="0.8"
                                  d="M5.86245 14.8535C5.83472 14.8296 5.8087 14.8044 5.78526 14.7772C4.3208 13.0877 2.98643 11.3064 1.94313 9.3256C1.47909 8.44458 1.08367 7.53438 0.87895 6.55417C0.593606 5.18801 0.806043 3.89808 1.5194 2.69911C2.21932 1.52224 3.34183 0.645185 4.65961 0.244773C5.86503 -0.121351 7.06158 -0.0754437 8.22554 0.370309C9.11674 0.711779 9.91187 1.28193 10.5143 2.01673C11.2214 2.87933 11.6185 3.85444 11.7303 4.9205C11.8195 5.7712 11.6723 6.59583 11.4015 7.40261C10.9969 8.60724 10.3974 9.7178 9.72288 10.7901C8.8274 12.2135 7.80582 13.5454 6.69561 14.8104C6.69447 14.8118 6.69304 14.8132 6.6919 14.8146C6.48146 15.049 6.10148 15.0595 5.86245 14.8535ZM6.2573 8.19635C7.78752 8.19124 9.02153 6.96025 9.01639 5.4439C9.01124 3.93945 7.74921 2.69656 6.24558 2.71469C4.71479 2.73339 3.49107 3.95532 3.49393 5.46289C3.49679 6.97017 4.74138 8.20145 6.2573 8.19635Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            Los Angeles, USA
                          </p>
                        </div>
                        <div className="product-prize">
                          <div className="bottle-size">
                            <p>Bottle(750ml)</p>
                            <span>USD 70454.99/1000ml</span>
                          </div>
                          <div className="bottle-size">
                            <p>Vintage - 2016</p>
                            <h3>USD 52,841</h3>
                          </div>
                          <span>
                            <img
                              src={
                                require("../Assets/Images/pink-stars.svg")
                                  .default
                              }
                            />{" "}
                            (230 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  );
}
