import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../Components/Layout/Layout";
import Form from "react-bootstrap/Form";

export default function EventView() {
  const navigate = useNavigate();

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Layout>
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="product-top-banner">
              <img src={require("../Assets/Images/product-banner.png")} />
            </div>
          </div>
          <div className="event-price-and-time">
            <div className="virtual-heading">
              <h2>A Virtual evening of Smooth jazz</h2>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <path
                      d="M8.42891 11.8102L7.85969 11.3218L8.42891 11.8102ZM4.95292 11.8102L4.3837 12.2985L4.95292 11.8102ZM6.69092 13.127V12.377V13.127ZM10.9409 6.04493C10.9409 6.6382 10.5902 7.50332 9.9635 8.51613C9.35736 9.49565 8.5696 10.4943 7.85969 11.3218L8.99813 12.2985C9.73182 11.4433 10.5751 10.3784 11.239 9.30546C11.8824 8.26581 12.4409 7.08963 12.4409 6.04493H10.9409ZM5.52214 11.3218C4.81223 10.4943 4.02448 9.49565 3.41834 8.51613C2.79159 7.50332 2.44092 6.6382 2.44092 6.04493H0.940918C0.940918 7.08963 1.49945 8.26581 2.14281 9.30546C2.80677 10.3784 3.65002 11.4433 4.3837 12.2985L5.52214 11.3218ZM2.44092 6.04493C2.44092 3.75467 4.33196 1.87695 6.69092 1.87695V0.376953C3.52702 0.376953 0.940918 2.90294 0.940918 6.04493H2.44092ZM6.69092 1.87695C9.04987 1.87695 10.9409 3.75467 10.9409 6.04493H12.4409C12.4409 2.90294 9.85481 0.376953 6.69092 0.376953V1.87695ZM7.85969 11.3218C7.46614 11.7805 7.23051 12.0513 7.02648 12.2207C6.85694 12.3615 6.77445 12.377 6.69092 12.377V13.877C7.21566 13.877 7.62559 13.6729 7.98469 13.3748C8.3093 13.1053 8.63854 12.7177 8.99813 12.2985L7.85969 11.3218ZM4.3837 12.2985C4.7433 12.7177 5.07253 13.1053 5.39715 13.3748C5.75625 13.6729 6.16618 13.877 6.69092 13.877V12.377C6.60738 12.377 6.52489 12.3615 6.35535 12.2207C6.15132 12.0513 5.9157 11.7805 5.52214 11.3218L4.3837 12.2985ZM4.06592 6.26847C4.06592 7.69123 5.30604 8.73231 6.69092 8.73231V7.23231C6.00473 7.23231 5.56592 6.73876 5.56592 6.26847H4.06592ZM6.69092 8.73231C8.0758 8.73231 9.31592 7.69123 9.31592 6.26847H7.81592C7.81592 6.73876 7.37711 7.23231 6.69092 7.23231V8.73231ZM9.31592 6.26847C9.31592 4.84571 8.0758 3.80463 6.69092 3.80463V5.30463C7.37711 5.30463 7.81592 5.79818 7.81592 6.26847H9.31592ZM6.69092 3.80463C5.30604 3.80463 4.06592 4.84571 4.06592 6.26847H5.56592C5.56592 5.79818 6.00473 5.30463 6.69092 5.30463V3.80463Z"
                      fill="#8C0444"
                    />
                  </svg>
                </span>
                Gelora Bung Karno Stadium, Jakarta
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.95046 12.554L3.38601 11.9434L2.95046 12.554ZM2.27448 11.8903L2.87736 11.4442L2.27448 11.8903ZM12.1074 11.8903L11.5045 11.4442L12.1074 11.8903ZM11.4314 12.554L11.8669 13.1646L11.4314 12.554ZM11.4314 2.8999L11.8669 2.28933L11.4314 2.8999ZM12.1074 3.5636L11.5045 4.00973L12.1074 3.5636ZM2.95046 2.8999L3.38601 3.51048L3.38601 3.51048L2.95046 2.8999ZM2.27448 3.5636L2.87736 4.00973V4.00973L2.27448 3.5636ZM11.6018 9.56389L11.4866 8.8228L11.6018 9.56389ZM9.06187 12.0576L8.32144 11.9382L9.06187 12.0576ZM5.35758 7.57695C4.94337 7.57695 4.60758 7.91274 4.60758 8.32695C4.60758 8.74117 4.94337 9.07695 5.35758 9.07695V7.57695ZM9.02425 9.07695C9.43846 9.07695 9.77425 8.74117 9.77425 8.32695C9.77425 7.91274 9.43846 7.57695 9.02425 7.57695V9.07695ZM8.27425 2.92695C8.27425 3.34117 8.61004 3.67695 9.02425 3.67695C9.43846 3.67695 9.77425 3.34117 9.77425 2.92695H8.27425ZM9.77425 1.12695C9.77425 0.71274 9.43846 0.376953 9.02425 0.376953C8.61004 0.376953 8.27425 0.71274 8.27425 1.12695H9.77425ZM4.60758 2.92695C4.60758 3.34117 4.94337 3.67695 5.35758 3.67695C5.7718 3.67695 6.10758 3.34117 6.10758 2.92695H4.60758ZM6.10758 1.12695C6.10758 0.71274 5.7718 0.376953 5.35758 0.376953C4.94337 0.376953 4.60758 0.71274 4.60758 1.12695H6.10758ZM12.6732 9.52695L13.4228 9.55311L12.6732 9.52695ZM1.7086 5.92695L0.959053 5.9008L1.7086 5.92695ZM12.6732 5.92695L13.4228 5.9008L12.6732 5.92695ZM7.19092 12.377C6.02876 12.377 5.2163 12.376 4.59191 12.3095C3.98076 12.2445 3.63904 12.1239 3.38601 11.9434L2.51492 13.1646C3.06509 13.557 3.69784 13.7229 4.43324 13.8011C5.15541 13.8779 6.06157 13.877 7.19092 13.877V12.377ZM0.940918 7.72695C0.940918 8.83486 0.939851 9.72715 1.01839 10.4389C1.09857 11.1654 1.26904 11.7924 1.67159 12.3364L2.87736 11.4442C2.69635 11.1996 2.57505 10.8698 2.50934 10.2743C2.44199 9.66398 2.44092 8.86888 2.44092 7.72695H0.940918ZM3.38601 11.9434C3.1903 11.8038 3.01875 11.6352 2.87736 11.4442L1.67159 12.3364C1.90714 12.6547 2.19183 12.9341 2.51492 13.1646L3.38601 11.9434ZM11.5045 11.4442C11.3631 11.6352 11.1915 11.8038 10.9958 11.9434L11.8669 13.1646C12.19 12.9341 12.4747 12.6547 12.7102 12.3364L11.5045 11.4442ZM10.9958 3.51048C11.1915 3.65008 11.3631 3.81866 11.5045 4.00973L12.7102 3.11747C12.4747 2.79916 12.19 2.5198 11.8669 2.28933L10.9958 3.51048ZM2.51492 2.28933C2.19183 2.5198 1.90714 2.79916 1.67159 3.11747L2.87736 4.00973C3.01875 3.81866 3.1903 3.65008 3.38601 3.51048L2.51492 2.28933ZM11.4866 8.8228C9.86585 9.07483 8.58151 10.3261 8.32144 11.9382L9.8023 12.1771C9.95639 11.2219 10.7229 10.4596 11.7171 10.305L11.4866 8.8228ZM5.35758 9.07695H9.02425V7.57695H5.35758V9.07695ZM12.6732 8.77695C12.1443 8.77696 11.7931 8.77513 11.4866 8.8228L11.7171 10.305C11.8806 10.2795 12.0903 10.277 12.6732 10.277L12.6732 8.77695ZM11.9409 7.72695C11.9409 8.43254 11.9408 9.01006 11.9237 9.5008L13.4228 9.55311C13.441 9.03063 13.4409 8.42408 13.4409 7.72695H11.9409ZM11.9237 9.5008C11.885 10.609 11.758 11.1016 11.5045 11.4442L12.7102 12.3364C13.26 11.5935 13.3834 10.682 13.4228 9.55311L11.9237 9.5008ZM9.77425 13.1096C9.77426 12.5358 9.77701 12.3338 9.8023 12.1771L8.32144 11.9382C8.27227 12.243 8.27426 12.5917 8.27425 13.1096L9.77425 13.1096ZM7.19092 13.877C7.90119 13.877 8.51818 13.877 9.04947 13.8592L8.99904 12.36C8.49834 12.3769 7.90933 12.377 7.19092 12.377V13.877ZM9.04947 13.8592C10.1969 13.8206 11.1163 13.7 11.8669 13.1646L10.9958 11.9434C10.6409 12.1966 10.13 12.322 8.99904 12.36L9.04947 13.8592ZM2.44092 7.72695C2.44092 7.02137 2.44102 6.44385 2.45814 5.95311L0.959053 5.9008C0.940821 6.42327 0.940918 7.02982 0.940918 7.72695H2.44092ZM2.45814 5.95311C2.49681 4.84495 2.62388 4.35227 2.87736 4.00973L1.67159 3.11747C1.12179 3.86045 0.998445 4.77193 0.959053 5.9008L2.45814 5.95311ZM1.7086 6.67695H12.6732V5.17695H1.7086V6.67695ZM13.4409 7.72695C13.4409 7.02982 13.441 6.42327 13.4228 5.9008L11.9237 5.95311C11.9408 6.44385 11.9409 7.02137 11.9409 7.72695H13.4409ZM13.4228 5.9008C13.3834 4.77194 13.26 3.86045 12.7102 3.11747L11.5045 4.00973C11.758 4.35227 11.885 4.84495 11.9237 5.95311L13.4228 5.9008ZM9.77425 2.92695V2.34431H8.27425V2.92695H9.77425ZM9.77425 2.34431V1.12695H8.27425V2.34431H9.77425ZM7.19092 3.07695C7.90934 3.07695 8.49834 3.07704 8.99904 3.09389L9.04947 1.59473C8.51818 1.57686 7.90119 1.57695 7.19092 1.57695V3.07695ZM8.99904 3.09389C10.13 3.13193 10.6409 3.25726 10.9958 3.51048L11.8669 2.28933C11.1163 1.75386 10.1969 1.63333 9.04947 1.59473L8.99904 3.09389ZM6.10758 2.92695V2.34431H4.60758V2.92695H6.10758ZM6.10758 2.34431V1.12695H4.60758V2.34431H6.10758ZM7.19092 1.57695C6.48065 1.57695 5.86366 1.57686 5.33237 1.59473L5.3828 3.09389C5.88349 3.07704 6.4725 3.07695 7.19092 3.07695V1.57695ZM5.33237 1.59473C4.18492 1.63333 3.26557 1.75386 2.51492 2.28933L3.38601 3.51048C3.74098 3.25726 4.2518 3.13193 5.3828 3.09389L5.33237 1.59473Z"
                      fill="#8C0444"
                    />
                  </svg>
                </span>
                November 15 2023 - SAT-2:00pm
              </p>
              <h1>$39</h1>
            </div>
          </div>

          <div className="buy-tickets">
            <button>Buy Tickets</button>
          </div>

          <div className="event-full-info">
            <p>
              Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in
              elit auctor, finibus quam in, phar. Proin id ligula dictum,
              covalis enim ut, facilisis massa. Mauris a nisi ut sapien blandit
              imperdi. Interdum et malesuada fames ac ante ipsum primis in
              faucibs. Sed posuere egestas nunc ut tempus. Fu ipsum dolor sit
              amet. Read More..
            </p>
          </div>

          <div className="map-event-location">
            <img src={require("../Assets/Images/product-detail-map.png")} />
          </div>
        </Container>
        <section>
          <div className="accessories-sec pb-5">
            <Container>
              <div className="silder-button">
                <div className="value-heading-text mb-4">
                  <img
                    src={
                      require("../Assets/Images/best-value-icon.svg").default
                    }
                  />
                  <h3>Commonly Searched</h3>
                </div>
              </div>
            </Container>
            <div className="accessories-slider heading-access">
              <Slider {...settings2}>
                <div className="red-wine-glass ">
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
                              require("../Assets/Images/pink-stars.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass ">
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
                              require("../Assets/Images/pink-stars.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="red-wine-glass ">
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
                              require("../Assets/Images/pink-stars.svg").default
                            }
                          />{" "}
                          (230 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
