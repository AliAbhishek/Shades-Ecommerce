import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import ProtectedRoutesModals from "../utils/ProtectedRouteModal";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [show, setShow] = useState(false);
  const { userId } = useSelector((state) => state.persist);
  console.log(userId, "userId");
  const { popularWine, accessarios, bestValue, mostlySearched } = useSelector(
    (state) => state.products
  );
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  console.log(popularWine, "popularWine");
  console.log(popularWine.length, "popularWine length");

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const slider = React.useRef(null);

  useEffect(() => {
    dispatch(CustomerActions.getAllProducts());
  }, []);

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
                  <button>Get started</button>
                  <button>Shop Now</button>
                </div>
              </div>
              {/* <div className="landing-links">
                <ul>
                  <li>
                    <Link to="#">Become a Partner</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
                <button onClick={()=>navigate("/create-account")}>Sign up</button>
              </div> */}
            </Container>
            {/* <div className="side-corner">
              <img
                src={require("../Assets/Images/bott-banner-left.svg").default}
              />
            </div> */}
          </div>
        </Container>

        <section className="explore-bg-color">
          <div className="explore-our">
            <div className="amazing-selectin">
              <h2>Explore Our</h2>
              <h2>Amazing Selection</h2>
            </div>

            <div className="slider-max-width">
              {/* {popularWine?.length > 0 ? (
               
                  {popularWine.map((item, index) => {
                    console.log(item, `Item at index ${index}`);
                    return (
                      <div key={index} className="first-silder-bottle">
                        <img src={`${BASE_URL}/${item.image}`} />
                        <p>{item.wine_brand}</p>
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                "No data found"
              )} */}
              <Slider {...settings3}>
                <div className="first-silder-bottle">
                  <img
                    src={
                      require("../Assets/Images/first-slider-bottle.svg")
                        .default
                    }
                  />
                  <p>Red Wine</p>
                </div>
                <div className="first-silder-bottle">
                  <img
                    src={
                      require("../Assets/Images/first-slider-bottle.svg")
                        .default
                    }
                  />
                  <p>Red Wine</p>
                </div>
                <div className="first-silder-bottle">
                  <img
                    src={
                      require("../Assets/Images/first-slider-bottle.svg")
                        .default
                    }
                  />
                  <p>Red Wine</p>
                </div>
                <div className="first-silder-bottle">
                  <img
                    src={
                      require("../Assets/Images/first-slider-bottle.svg")
                        .default
                    }
                  />
                  <p>Red Wine</p>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className="second-section">
          <Container>
            <div className="interaction-section">
              <div className="grid-interaction">
                <div className="comm-int">
                  <img src={require("../Assets/Images/community.png")} />
                  <p>Community interaction</p>
                </div>
                <div className="comm-int">
                  <img src={require("../Assets/Images/host-a-event.png")} />
                  <p>Host a event</p>
                </div>
                <div className="comm-int">
                  <img
                    src={require("../Assets/Images/large-variety-of-wines.png")}
                  />
                  <p>Large Variety of wines</p>
                </div>
                <div className="comm-int">
                  <img src={require("../Assets/Images/vast-network.png")} />
                  <p>Vast Network</p>
                </div>
              </div>
            </div>
            <div className="right-corner-bottle">
              <img src={require("../Assets/Images/side-bottle.svg").default} />
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="best-value-section">
              <div className="value-heading-text">
                <img
                  src={require("../Assets/Images/best-value-icon.svg").default}
                />
                <h3>Best Value Red Wine in the world</h3>
              </div>
              <div className="wine-grid">
                {bestValue?.length > 0
                  ? bestValue?.map((item, index) => {
                      return (
                        <div
                          style={{ cursor: "pointer" }}
                          className="red-wine"
                          // onClick={() => navigate("/search-result")}
                          onClick={() => {
                            token
                              ? navigate(`/product-details/${item?._id}`)
                              : setShow(true);
                          }}
                        >
                          <div className="red-wine-back">
                            <img src={`${BASE_URL}/${item?.image}`} />
                          </div>
                          <div className="lock-wine">
                            <div className="wine-prize">
                              <p>{item?.wine_brand}</p>
                              <span>${item?.price}</span>
                            </div>
                            <div className="lock-icon">
                              <img
                                src={
                                  require("../Assets/Images/lock-icon.svg")
                                    .default
                                }
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "No data found"}

                {/* <div className="red-wine">
                  <div className="red-wine-back">
                    <img
                      src={require("../Assets/Images/green-wine.svg").default}
                    />
                  </div>
                  <div className="lock-wine">
                    <div className="wine-prize">
                      <p>Red Wine</p>
                      <span>$60.00</span>
                    </div>
                    <div className="lock-icon">
                      <img
                        src={require("../Assets/Images/lock-icon.svg").default}
                      />
                    </div>
                  </div>
                </div> */}

                {/* <div className="red-wine">
                  <div className="red-wine-back">
                    <img
                      src={require("../Assets/Images/black-wine.svg").default}
                    />
                  </div>
                  <div className="lock-wine">
                    <div className="wine-prize">
                      <p>Red Wine</p>
                      <span>$60.00</span>
                    </div>
                    <div className="lock-icon">
                      <img
                        src={require("../Assets/Images/lock-icon.svg").default}
                      />
                    </div>
                  </div>
                </div> */}

                {/* <div className="red-wine">
                  <div className="red-wine-back">
                    <img
                      src={require("../Assets/Images/red-wine.svg").default}
                    />
                  </div>
                  <div className="lock-wine">
                    <div className="wine-prize">
                      <p>Red Wine</p>
                      <span>$60.00</span>
                    </div>
                    <div className="lock-icon">
                      <img
                        src={require("../Assets/Images/lock-icon.svg").default}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Container>
        </section>

        <section>
          <div className="accessories-sec">
            <Container>
              <div className="silder-button">
                <div className="value-heading-text acc-opener">
                  <img
                    src={
                      require("../Assets/Images/accessories-opener.svg").default
                    }
                  />
                  <h3>Accessories</h3>
                </div>
                <div className="slick-buttons">
                  <button onClick={() => slider?.current?.slickPrev()}>
                    <img src={require("../Assets/Images/scroll-back.png")} />
                  </button>
                  <button onClick={() => slider?.current?.slickNext()}>
                    <img src={require("../Assets/Images/scroll-next.png")} />
                  </button>
                </div>
              </div>
            </Container>
            <div className="accessories-slider heading-access">
              {accessarios?.length > 0 ? (
                <Slider ref={slider} {...settings2}>
                  {accessarios?.map((item, index) => {
                    return (
                      <div className="red-wine-glass">
                        <div className="glass-address">
                          <div className="glass-image">
                            <img
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                token
                                  ? navigate(`/product-details/${item?._id}`)
                                  : setShow(true);
                              }}
                              src={`${BASE_URL}/${item?.image}`}
                            />
                          </div>
                          <div className="glass-disp-address">
                            <div className="product-name">
                              <h4>
                                {item?.product_name} - {item?.product_category}{" "}
                                (Set of {item?.count})
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
                                {item?.userId?.address}, {item?.userId?.city},{" "}
                                {item?.userId?.country}
                              </p>
                            </div>
                            <div className="product-prize">
                              <p>USD {item?.price}</p>
                              <span>
                                <img
                                  src={
                                    require("../Assets/Images/reviews.svg")
                                      .default
                                  }
                                />{" "}
                                (230 reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                "No data found"
              )}
            </div>
          </div>
        </section>

        <section className="education-background">
          <Container>
            <div className="side-image">
              <img src={require("../Assets/Images/side-image.svg").default} />
            </div>
            <div className="wine-education">
              <div className="start-wine-education">
                <h2>
                  <span>
                    <img
                      src={
                        require("../Assets/Images/wine-education-icon.svg")
                          .default
                      }
                    />
                  </span>
                  Wine Education
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="edu-get-started">
                  <button>Get Started </button>
                </div>
              </div>
              <div className="education-right-side">
                <img src={require("../Assets/Images/education-image.png")} />
              </div>
            </div>
          </Container>
        </section>

        <section className="test-section testimonial-slider">
          <Container>
            <div className="top-space ">
              <div className="test-imoonial-left">
                <img
                  src={
                    require("../Assets/Images/testi-monial-left.svg").default
                  }
                />
              </div>
              <Slider {...settings}>
                <div className="testimonial-section">
                  <div className="testimonial-heading">
                    <h3>Testimonial</h3>
                    <div className="client-love">
                      <h2>Love From Clients</h2>
                    </div>
                    <div className="client-comm">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>

                    <div className="clent-name">
                      <div className="clent-pro">
                        <img
                          src={
                            require("../Assets/Images/client-image.svg").default
                          }
                        />
                      </div>
                      <div className="full-name">
                        <p>Leslie R. Kelly </p>
                        <span>Engg. ay Alt</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-section">
                  <div className="testimonial-heading">
                    <h3>Testimonial</h3>
                    <div className="client-love">
                      <h2>Love From Clients</h2>
                    </div>
                    <div className="client-comm">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>

                    <div className="clent-name">
                      <div className="clent-pro">
                        <img
                          src={
                            require("../Assets/Images/client-image.svg").default
                          }
                        />
                      </div>
                      <div className="full-name">
                        <p>Leslie R. Kelly </p>
                        <span>Engg. ay Alt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Container>
        </section>

        <section className="questions-section">
          <Container>
            <div className="asked-questions">
              <div className="top-right-side-icon">
                <img
                  src={
                    require("../Assets/Images/top-question-icon.svg").default
                  }
                />
              </div>
              <div className="questions-heading-text">
                <img
                  src={require("../Assets/Images/opener-icon.svg").default}
                />
                <h2>Frequently Asked Questions</h2>
              </div>
              <div className="collapse-section">
                <div
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                >
                  <div className="collapse-tab">
                    <div className="collapse-content">
                      <h3> 1. Lorim Ipsum is dummy text </h3>
                    </div>
                    <div className="collapse-icon">
                      <img
                        src={
                          require("../Assets/Images/coll-close-icon.svg")
                            .default
                        }
                      />
                    </div>
                  </div>
                </div>

                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    <p className="coll-data">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="collapse-section mt-4">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <div className="collapse-tab">
                    <div className="collapse-content">
                      <h3> 2. Lorim Ipsum is dummy text </h3>
                    </div>
                    <div className="collapse-icon">
                      <img
                        src={
                          require("../Assets/Images/coll-close-icon.svg")
                            .default
                        }
                      />
                    </div>
                  </div>
                </div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <p className="coll-data">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="collapse-section mt-4">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <div className="collapse-tab">
                    <div className="collapse-content">
                      <h3> 3. Lorim Ipsum is dummy text </h3>
                    </div>
                    <div className="collapse-icon">
                      <img
                        src={
                          require("../Assets/Images/coll-close-icon.svg")
                            .default
                        }
                      />
                    </div>
                  </div>
                </div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <p className="coll-data">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="collapse-section mt-4">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <div className="collapse-tab">
                    <div className="collapse-content">
                      <h3> 4. Lorim Ipsum is dummy text </h3>
                    </div>
                    <div className="collapse-icon">
                      <img
                        src={
                          require("../Assets/Images/coll-close-icon.svg")
                            .default
                        }
                      />
                    </div>
                  </div>
                </div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <p className="coll-data">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="collapse-section mt-4">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <div className="collapse-tab">
                    <div className="collapse-content">
                      <h3> 5. Lorim Ipsum is dummy text </h3>
                    </div>
                    <div className="collapse-icon">
                      <img
                        src={
                          require("../Assets/Images/coll-close-icon.svg")
                            .default
                        }
                      />
                    </div>
                  </div>
                </div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <p className="coll-data">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="bottom-left-side-icon">
                <img
                  src={require("../Assets/Images/bottom-left-icon.svg").default}
                />
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container fluid>
            <div className="map-container">
              <img src={require("../Assets/Images/map-image.png")} />
            </div>
          </Container>
        </section>

        {show && <ProtectedRoutesModals show={show} setShow={setShow} />}
      </div>
    </Layout>
  );
}
