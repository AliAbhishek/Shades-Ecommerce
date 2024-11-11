import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../Components/Layout/Layout";

export default function SearchResult() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="search-result">
            <div className="filter-sec">
              <div className="search-wine-heading">
                <h2>
                  <span>
                    <img
                      src={
                        require("../Assets/Images/best-value-icon.svg").default
                      }
                    />
                  </span>{" "}
                  1931 Wine
                </h2>
              </div>
              <div className="filter-box">
                <button>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 5.83317C4.16667 5.14281 4.72631 4.58317 5.41667 4.58317C6.10702 4.58317 6.66667 5.14281 6.66667 5.83317C6.66667 6.52353 6.10702 7.08317 5.41667 7.08317C4.72631 7.08317 4.16667 6.52353 4.16667 5.83317ZM5.41667 2.9165C3.80583 2.9165 2.5 4.22234 2.5 5.83317C2.5 7.444 3.80583 8.74984 5.41667 8.74984C7.0275 8.74984 8.33333 7.444 8.33333 5.83317C8.33333 4.22234 7.0275 2.9165 5.41667 2.9165ZM10 6.6665H16.6667V4.99984H10V6.6665ZM13.3333 14.1665C13.3333 13.4762 13.893 12.9165 14.5833 12.9165C15.2737 12.9165 15.8333 13.4762 15.8333 14.1665C15.8333 14.8568 15.2737 15.4165 14.5833 15.4165C13.893 15.4165 13.3333 14.8568 13.3333 14.1665ZM14.5833 11.2498C12.9725 11.2498 11.6667 12.5557 11.6667 14.1665C11.6667 15.7773 12.9725 17.0832 14.5833 17.0832C16.1942 17.0832 17.5 15.7773 17.5 14.1665C17.5 12.5557 16.1942 11.2498 14.5833 11.2498ZM3.33333 13.3332V14.9998H10V13.3332H3.33333Z"
                        fill="white"
                      />
                    </svg>
                  </span>{" "}
                  Filter
                </button>
              </div>
            </div>
            <div className="wines-details">
              <div className="search-wine-grid">
                <div
                  className="red-wine-glass full-width"
                  onClick={() => navigate("/product-details")}
                >
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass full-width">
                  <div className="glass-address">
                    <div className="glass-image">
                      <img
                        src={
                          require("../Assets/Images/wine-bottle-search.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="glass-disp-address new-wine-add">
                      <div className="product-name">
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
                              require("../Assets/Images/reviews.svg").default
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
      </div>
    </Layout>
  );
}
