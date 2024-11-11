import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../Components/Layout/Layout";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import Loader from "../utils/Loader";
import { MapContainer } from "../Components/GoogleMap";
import toast from "react-hot-toast";
import ReactStarsExample from "../Components/RatingStars";
import { CgLayoutGrid } from "react-icons/cg";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import ProtectedRoutesModals from "../utils/ProtectedRouteModal";
import moment from "moment";

export default function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ProductDetails } = useSelector((state) => state.products);
  console.log(ProductDetails, "productDetails");
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { loading } = useSelector((state) => state.products);
  const { isloading } = useSelector((state) => state.cart);
  // const { shopDetails } = useSelector((state) => state.login);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    dispatch(CustomerActions.getProductDetails(id));
  }, [id]);

  const changeRating = (rating) => {
    setRating(rating);
    console.log(`New rating is ${rating}`);
  };

  console.log(rating, "rating");

  const addToCart = async () => {
    if (count <= 0) {
      toast.error("Please select the quantity");
    } else {
      const res = await dispatch(
        CustomerActions.addToCart({
          productId: ProductDetails?._id,
          quantity: count,
        })
      );
      if (res?.payload?.success) {
        setAddedToCart(true);
        dispatch(CustomerActions.getCart());
      }
    }

    // console.log(res,"res")
  };

  return (
    <Layout>
      {(loading || isloading) && <Loader />}
      <div className="main-search-container">
        <Container>
          <div className="product-detail-page">
            <div className="product-top-banner">
              <img src={require("../Assets/Images/product-banner.png")} />
              <div className="saint-right">
                <img src={require("../Assets/Images/saint.svg").default} />
              </div>
            </div>
            {/* <section>
              <div className="product-info-top">
                <div className="product-win-image">
                  <img
                    src={
                      require("../Assets/Images/product-detail-image.svg")
                        .default
                    }
                  />
                </div>
                <div className="wine-product-disp-ps">
                  <div className="product-name">
                    <h2>St. Lucia Distillers Chairman’s Reserve 1931 Wine</h2>
                  </div>
                  <div className="vintage-and-size">
                    <p>Vintage - 2016</p>
                    <p>Bottle(750ml)</p>
                    <p>USD 70,454.99/ 1000ml</p>
                  </div>
                  <div className="product-address-ps">
                    <p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                        >
                          <path
                            d="M6.12733 17.8245C6.09405 17.7959 6.06283 17.7657 6.03469 17.733C4.27734 15.7056 2.6761 13.5681 1.42413 11.1911C0.867286 10.1339 0.392781 9.04162 0.147123 7.86537C-0.19529 6.22598 0.0596344 4.67806 0.915665 3.23929C1.75557 1.82705 3.10257 0.774588 4.68391 0.294093C6.13042 -0.145255 7.56628 -0.0901663 8.96304 0.444737C10.0325 0.854501 10.9866 1.53869 11.7095 2.42044C12.558 3.45557 13.0346 4.62569 13.1687 5.90497C13.2758 6.92581 13.0991 7.91536 12.7742 8.88349C12.2887 10.3291 11.5692 11.6617 10.7598 12.9485C9.68526 14.6566 8.45937 16.2548 7.12712 17.7728C7.12575 17.7745 7.12403 17.7762 7.12266 17.7779C6.87014 18.0591 6.41416 18.0717 6.12733 17.8245ZM6.60115 9.83598C8.43741 9.82986 9.91822 8.35267 9.91205 6.53305C9.90587 4.72771 8.39143 3.23623 6.58708 3.258C4.75013 3.28044 3.28167 4.74675 3.2851 6.55583C3.28853 8.36457 4.78204 9.8421 6.60115 9.83598Z"
                            fill="#F2F2F2"
                          />
                        </svg>
                      </span>{" "}
                      Los Angeles, USA
                    </p>
                  </div>
                  <div className="product-price">
                    <h3>USD 34,5676</h3>
                  </div>
                  <div className="product-rating-pints">
                    <div className="white-star">
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                    </div>
                    <div className="full-review">
                      <p>(230 reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section>
              <div className="product-info-top">
                <div className="product-win-image">
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`${BASE_URL}/${ProductDetails?.image}`}
                  />
                </div>
                <div className="wine-product-disp-ps">
                  <div className="product-name">
                    <h2>
                      {ProductDetails?.product_category === "Wine"
                        ? ProductDetails?.wine_brand
                        : ProductDetails?.product_name}
                    </h2>
                  </div>
                  {ProductDetails?.product_category === "Wine" && (
                    <div className="vintage-and-size">
                      {ProductDetails?.vintage && (
                        <p>Vintage - {ProductDetails?.vintage}</p>
                      )}
                      {ProductDetails?.quantity && (
                        <p>Bottle({ProductDetails?.quantity}ml)</p>
                      )}
                      {ProductDetails?.price && (
                        <p>
                          USD {ProductDetails?.price}/{" "}
                          {ProductDetails?.quantity}ml
                        </p>
                      )}
                    </div>
                  )}
                  <div className="product-address-ps">
                    <p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                        >
                          <path
                            d="M6.12733 17.8245C6.09405 17.7959 6.06283 17.7657 6.03469 17.733C4.27734 15.7056 2.6761 13.5681 1.42413 11.1911C0.867286 10.1339 0.392781 9.04162 0.147123 7.86537C-0.19529 6.22598 0.0596344 4.67806 0.915665 3.23929C1.75557 1.82705 3.10257 0.774588 4.68391 0.294093C6.13042 -0.145255 7.56628 -0.0901663 8.96304 0.444737C10.0325 0.854501 10.9866 1.53869 11.7095 2.42044C12.558 3.45557 13.0346 4.62569 13.1687 5.90497C13.2758 6.92581 13.0991 7.91536 12.7742 8.88349C12.2887 10.3291 11.5692 11.6617 10.7598 12.9485C9.68526 14.6566 8.45937 16.2548 7.12712 17.7728C7.12575 17.7745 7.12403 17.7762 7.12266 17.7779C6.87014 18.0591 6.41416 18.0717 6.12733 17.8245ZM6.60115 9.83598C8.43741 9.82986 9.91822 8.35267 9.91205 6.53305C9.90587 4.72771 8.39143 3.23623 6.58708 3.258C4.75013 3.28044 3.28167 4.74675 3.2851 6.55583C3.28853 8.36457 4.78204 9.8421 6.60115 9.83598Z"
                            fill="#F2F2F2"
                          />
                        </svg>
                      </span>{" "}
                      {ProductDetails?.userId?.address},{" "}
                      {ProductDetails?.userId?.city},{" "}
                      {ProductDetails?.userId?.country}
                    </p>
                  </div>
                  <div className="product-price">
                    <h3>USD {ProductDetails?.price}</h3>
                  </div>
                  <div className="product-rating-pints">
                    <div className="white-star">
                      <ReactStarsExample
                        value={ProductDetails && ProductDetails?.ratings}
                        size={30}
                        // changeRating={changeRating}
                      />
                      {/* <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      />
                      <img
                        src={require("../Assets/Images/white-star.svg").default}
                      /> */}
                    </div>
                    <div className="full-review">
                      <p>
                        (
                        {ProductDetails?.totalReviews?.length > 0
                          ? ProductDetails?.totalReviews?.length
                          : 0}{" "}
                        reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="message-button">
              <button>Message</button>
            </div>

            <div className="side-padding">
              <section>
                <div className="tarzan-wine">
                  <h2>{ProductDetails?.userId?.shop_name}</h2>
                  <p>{ProductDetails?.userId?.about_me}</p>

                  <div className="cart-flex">
                    <div className="add-more-product">
                      <button
                        style={{
                          cursor: "pointer",
                          border: "none",
                          background: "transparent",
                        }}
                        onClick={() => {
                          if (count > 0) {
                            setCount(count - 1);
                          } else {
                            toast.error("Please increment the count");
                          }
                        }}
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M24.315 16.4648H5.68457C4.87539 16.4648 4.21973 15.8092 4.21973 15C4.21973 14.1908 4.87539 13.5352 5.68457 13.5352H24.315C25.1242 13.5352 25.7799 14.1908 25.7799 15C25.7799 15.8092 25.1242 16.4648 24.315 16.4648Z"
                              fill="#8C0444"
                            />
                          </svg>
                        </span>
                      </button>

                      <p>{count}</p>

                      <button
                        style={{
                          cursor: "pointer",
                          border: "none",
                          background: "transparent",
                        }}
                        onClick={() => {
                          if (count >= 0) {
                            setCount(count + 1);
                          }
                        }}
                      >
                        {" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M15 25.7799C14.1908 25.7799 13.5352 25.1242 13.5352 24.315V5.68457C13.5352 4.87539 14.1908 4.21973 15 4.21973C15.8092 4.21973 16.4648 4.87539 16.4648 5.68457V24.315C16.4648 25.1242 15.8092 25.7799 15 25.7799Z"
                              fill="#8C0444"
                            />
                            <path
                              d="M24.315 16.4648H5.68457C4.87539 16.4648 4.21973 15.8092 4.21973 15C4.21973 14.1908 4.87539 13.5352 5.68457 13.5352H24.315C25.1242 13.5352 25.7799 14.1908 25.7799 15C25.7799 15.8092 25.1242 16.4648 24.315 16.4648Z"
                              fill="#8C0444"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="add-to-cart">
                      <button onClick={addToCart}>
                        {" "}
                        {addedToCart ? "Added" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="delivery-sec">
                  <div className="services">
                    <span>
                      <img
                        src={
                          require("../Assets/Images/services-icon.svg").default
                        }
                      />
                    </span>
                    <p>Delivery & Service</p>
                  </div>
                  <div className="delivery-date">
                    <p>Standard Delivery 1-2 weeks</p>
                    <p>Listed since 11 nov 2022</p>
                  </div>
                </div>

                <div className="more-info">
                  <div className="services">
                    <span>
                      <img
                        src={require("../Assets/Images/info-icon.svg").default}
                      />
                    </span>
                    <p>More Information</p>
                  </div>

                  <div className="product-info mt-3">
                    {/* <img
                      src={require("../Assets/Images/product-detail-map.png")}
                    /> */}

                    <div
                      className="product-info mt-3"
                      style={{
                        width: "100%",
                        height: "300px",
                        position: "relative",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <MapContainer />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="product-full-rewview-bt more-info">
                  <div className="services">
                    <span>
                      <img
                        src={
                          require("../Assets/Images/more-reviews-icon.svg")
                            .default
                        }
                      />
                    </span>
                    <p>Reviews</p>
                  </div>

                  <div className="ronaldo-reviews">
                    {ProductDetails?.totalReviews?.length > 0 ? (
                      ProductDetails.totalReviews.map((review) => {
                        return (
                          <div className="review-box" key={review._id}>
                            {" "}
                            {/* Adding a unique key for each review */}
                            <div className="user-name-and-date">
                              <div className="use-pro-name">
                                <div className="icon-user">
                                  <img
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "50%",
                                    }}
                                    src={`${BASE_URL}/${review?.userId?.profile_image}`}
                                    alt={`${review?.userId?.name}'s profile`} // Adding alt text for accessibility
                                  />
                                </div>
                                <div className="name-of-user">
                                  <p>{review?.userId?.name}</p>
                                  <ReactStarsExample
                                    value={review?.ratings}
                                    size={10}
                                  />
                                </div>
                              </div>
                              <div className="review-date">
                                <p>
                                  {moment(review?.createdAt).format(
                                    "DD MMM YYYY"
                                  )}
                                </p>
                              </div>
                            </div>
                            <p className="review-full-text">{review?.review}</p>
                          </div>
                        );
                      })
                    ) : (
                      <p
                        style={{
                          color: "white",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        No reviews found
                      </p> // Display a message if no reviews are found
                    )}

                    {/* <div className="review-box">
                      <div className="user-name-and-date">
                        <div className="use-pro-name">
                          <div className="icon-user">
                            <img
                              src={require("../Assets/Images/user-profile.png")}
                            />
                          </div>
                          <div className="name-of-user">
                            <p>Ronaldo Richards</p>
                            <img
                              src={
                                require("../Assets/Images/user-gray-star.svg")
                                  .default
                              }
                            />
                          </div>
                        </div>
                        <div className="review-date">
                          <p>04 Apr 2024</p>
                        </div>
                      </div>

                      <p className="review-full-text">
                        Lorem Ipsum is simply dummy text for printing and
                        typesetting industry. Lorem ipsum has been industry
                        standard text ever since 1500s.
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="services more-info">
                  <span>
                    <img
                      src={
                        require("../Assets/Images/more-reviews-icon.svg")
                          .default
                      }
                    />
                  </span>
                  <p>Share Your Experience</p>
                </div>
              </section>

              <section>
                <div className="review-with-textarea">
                  {/* <div className="big-gray-review">
                    <img
                      src={
                        require("../Assets/Images/big-gray-review.svg").default
                      }
                    />
                    <img
                      src={
                        require("../Assets/Images/big-gray-review.svg").default
                      }
                    />
                    <img
                      src={
                        require("../Assets/Images/big-gray-review.svg").default
                      }
                    />
                    <img
                      src={
                        require("../Assets/Images/big-gray-review.svg").default
                      }
                    />
                    <img
                      src={
                        require("../Assets/Images/big-gray-review.svg").default
                      }
                    />
                  </div> */}

                  <div className="big-gray-review">
                    <ReactStarsExample
                      value={rating}
                      changeRating={changeRating}
                      size={35}
                    />
                  </div>

                  <div className="review-textarea-field">
                    <Form>
                      <div className="form-set">
                        <Form.Group className="" controlId="formBasicEmail">
                          <Form.Control
                            as="textarea"
                            placeholder="Tell us about your taste"
                            rows={7}
                            name="review"
                            onChange={(e) => {
                              setReview(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </Form>
                  </div>

                  <div className="add-to-cart product-sub">
                    <button
                      onClick={async () => {
                        if (!rating) {
                          toast.error("Please enter rating");
                        } else if (!review) {
                          toast.error("Please add review");
                        } else {
                          const res = await dispatch(
                            CustomerActions.addRating({
                              productId: ProductDetails?._id,
                              review,
                              ratings: rating,
                            })
                          );
                          console.log(res, "res");
                          if (res?.payload?.success) {
                            toast.success(res?.payload?.message);
                            navigate("/");
                          } else {
                            toast.error(res?.payload?.message);
                          }
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
