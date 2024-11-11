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
import Form from "react-bootstrap/Form";
import Layout from "../Components/Layout/Layout";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import ReactStarsExample from "../Components/RatingStars";
import CustomerActions from "../Redux/Actions/CustomerActions";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";
import { setCustomer } from "../Redux/Reducers/loginSlice";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const { customerDetails } = useSelector((state) => state.login);
  console.log(customerDetails, "customerDetails");
  const { cartData } = useSelector((state) => state.cart);
  const { createCustomerProfileLoading } = useSelector(
    (state) => state.createCustomerProfile
  );
  const { isloading } = useSelector((state) => state.cart);

  const [show, setShow] = useState(false);
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState(null);
  const [code, setCode] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDeliveryModal, setShowDeliveryModal] = useState(false); // State for delivery modal
  const handleCloseDelivery = () => setShowDeliveryModal(false); // Function to close delivery modal
  const handleShowDelivery = () => setShowDeliveryModal(true); // Function to show delivery modal

  const [showPreviousOrderModal, setShowPreviousOrderModal] = useState(false); // State for previous order modal
  const handleClosePreviousOrder = () => setShowPreviousOrderModal(false); // Function to close previous order modal
  const handleShowPreviousOrder = () => setShowPreviousOrderModal(true);

  const handleEditAddress = async () => {
    if (!phoneNumber) {
      toast.error("Phone number is required");
    } else if (!address) {
      toast.error("Address is required");
    } else if (!country) {
      toast.error("Country is required");
    } else {
      const formDataToSend = new FormData();
      formDataToSend.append("country", country);
      formDataToSend.append("phone_number", phoneNumber);
      // formDataToSend.append("country_code", code);
      formDataToSend.append("address", address);

      let res = await dispatch(CustomerActions.createProfile(formDataToSend));
      console.log(res, "res");
      if (res.payload.success) {
        // navigate("/");
        handleClose();
        const res = await dispatch(CustomerActions.getCustomer());
        dispatch(setCustomer(res?.payload?.data));
      }
    }
  };

  const addToCart = async (id, quantity) => {
    // if (count <= 0) {
    //   toast.error("Please select the quantity");
    // } else {
    const res = await dispatch(
      CustomerActions.addToCart({
        productId: id,
        quantity: quantity,
      })
    );
    if (res?.payload?.success) {
      // setAddedToCart(true);
      dispatch(CustomerActions.getCart());
    }
    // }

    // console.log(res,"res")
  };

  useEffect(() => {
    const createPaymenIntent = async () => {
      let res = await dispatch(CustomerActions.createPaymentIntent());
      console.log(res, "resssss");
      if (res?.payload?.success) {
        setSessionId(res?.payload?.data?.session_id);
      }
    };

    createPaymenIntent();
  }, []);

  const makeStripePayment = async (sessionId) => {
    console.log(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
    const stripe = await loadStripe(
      // "pk_test_51PnGht104yRhJCICXqugdYya2AxwK4byLKfCzauTl4jSDNtOl0wb6dj5FC5BmOdDYtMkkf9ugGeRcNvFQWmRV0Fd00OmxzgXya"
      // "pk_test_51O9nKhLytwmH9rwQT3cppqEVmCHTqhxIDBHGr31ZtothHR22Yy9K0vAGXAm6Zv2aQa2yyWT69i8tzpV2CJ2KXcRH00gBf0qg3V"
      // "pk_test_51H6oNICMNRykmuuAjWqm9CMeaYiMHyGgaym6RA7ZJLmpUdDS8CkdWgD46Pb8SoKi0E5KfV8Mk6BMbI6OXoRvHFt200T6sdI7jA"
      process.env.REACT_APP_STRIPE_PUBLISH_KEY
    );

    try {
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
        toast.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout redirect:", error);
      toast.error(error.message);
    }
  };

  const makePayment = async () => {
    if (sessionId) {
      makeStripePayment(sessionId);
    } else {
      toast.error("Payment session not found");
    }
  };

  return (
    <>
      <Layout>
        {(createCustomerProfileLoading || isloading) && <Loader />}
        <div className="main-search-container">
          <Container>
            <div className="search-result">
              <div className="filter-sec">
                <div className="search-wine-heading">
                  <h2>Cart</h2>
                </div>
                <div className="previ-order" onClick={handleShowPreviousOrder}>
                  <button>Previous Order</button>
                </div>
              </div>

              <section>
                <div className="cart-page">
                  {cartData?.cartProducts?.length > 0 ? (
                    <div className="cart-page-flex">
                      <div className="cart-left-side">
                        {cartData?.cartProducts?.map((data, index) => {
                          return (
                            <div
                              className={`add-new-white-icon ${
                                index > 0 && "mt-4"
                              }`}
                            >
                              {/* <div className="white-icon"></div> */}
                              <div className="checkbox-container">
                                <input
                                  type="checkbox"
                                  id={`checkbox-${index}`}
                                  className="white-icon"
                                  checked={data?.status == 1 ? true : false}
                                  onChange={async (e) => {
                                    let res = await dispatch(
                                      CustomerActions.updateCart({
                                        cartId: data?._id,
                                        type: e.target.checked == true ? 1 : 0,
                                      })
                                    );

                                    console.log(res, "rreesss");
                                    if (res?.payload?.success) {
                                      await dispatch(CustomerActions.getCart());
                                    }
                                  }}
                                />
                                {/* <label
                                  htmlFor={`checkbox-${index}`}
                                  className="white-icon"
                                ></label> */}
                              </div>
                              <div className="red-wine-glass full-width">
                                <div className="glass-address">
                                  <div className="glass-image cart-image">
                                    <img
                                      style={{ borderRadius: "10%" }}
                                      src={
                                        BASE_URL + "/" + data?.productId?.image
                                      }
                                    />
                                  </div>
                                  <div className="glass-disp-address cart-wine">
                                    <div className="product-name add-delete-icon">
                                      <h4>
                                        {data?.productId?.product_category ==
                                        "Wine"
                                          ? data?.productId?.wine_brand
                                          : data?.productId?.product_name}
                                      </h4>
                                      <img
                                        style={{ cursor: "pointer" }}
                                        onClick={async () => {
                                          const res = await dispatch(
                                            CustomerActions.deleteItemFromcart(
                                              data?._id
                                            )
                                          );
                                          console.log(res, "res");
                                          if (res?.payload?.success) {
                                            dispatch(CustomerActions.getCart());
                                          }
                                        }}
                                        src={
                                          require("../Assets/Images/delete-iocn.svg")
                                            .default
                                        }
                                      />
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
                                        {data?.userId?.address},{" "}
                                        {data?.userId?.country}
                                      </p>
                                    </div>

                                    <div className="product-prize">
                                      {data?.productId?.product_category ==
                                        "Wine" && (
                                        <div className="bottle-size">
                                          <p>
                                            Bottle({data?.productId?.quantity}
                                            ml)
                                          </p>
                                          {/* <span>USD 70454.99/1000ml</span> */}
                                        </div>
                                      )}

                                      <div className="bottle-size">
                                        <p>
                                          {data?.productId?.product_category ==
                                            "Wine" &&
                                            `Vintage - ${data?.productId?.vintage}`}
                                        </p>

                                        <h3>USD {data?.productId?.price}</h3>
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "100%",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        {" "}
                                        <span>
                                          <ReactStarsExample
                                            value={data?.productId?.ratings}
                                            size={15}
                                            // changeRating={changeRating}
                                          />
                                          {/* <img
                                        src={
                                          require("../Assets/Images/pink-stars.svg")
                                            .default
                                        }
                                      />{" "} */}
                                          (230 reviews)
                                        </span>{" "}
                                        <span>
                                          {" "}
                                          <div className="cart-flex">
                                            <div className="add-more-product">
                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  border: "none",
                                                  background: "transparent",
                                                }}
                                                onClick={() => {
                                                  addToCart(
                                                    data?.productId?._id,
                                                    parseInt(data?.quantity) - 1
                                                  );
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

                                              <p>{data?.quantity}</p>

                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  border: "none",
                                                  background: "transparent",
                                                }}
                                                onClick={() =>
                                                  addToCart(
                                                    data?.productId?._id,
                                                    parseInt(data?.quantity) + 1
                                                  )
                                                }
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
                                            {/* <div className="add-to-cart">
                                              <button 
                                              // onClick={addToCart}
                                              >
                                                {" "}
                                                {addedToCart
                                                  ? "Added"
                                                  : "Add to cart"}
                                              </button>
                                            </div> */}
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="cart-right-side">
                        <div className="deliver-to">
                          <div className="edit-with">
                            <h2>Deliver to:</h2>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setAddress(customerDetails?.address);
                                setCode(customerDetails?.country_code);
                                setphoneNumber(customerDetails?.phone_number);
                                setCountry(customerDetails?.country);
                                handleShow();
                              }}
                            >
                              <img
                                src={
                                  require("../Assets/Images/edit-icon.svg")
                                    .default
                                }
                              />
                            </div>
                          </div>
                          <div className="delivery-address ">
                            <p>
                              {customerDetails?.address}{" "}
                              {customerDetails?.country}{" "}
                              {customerDetails?.country_code}{" "}
                              {customerDetails?.phone_number}
                            </p>
                          </div>

                          <div className="apply-promo">
                            <h2>Apply Promo Code:</h2>
                            <div className="promo-code">
                              <Form>
                                <div className="form-set apply-text">
                                  <Form.Group
                                    className="mb-3 add-new-text"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>
                                      Type your promo code here
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="Enter here"
                                    />
                                  </Form.Group>
                                  <div onClick={handleShowDelivery}>
                                    <p>Apply</p>
                                  </div>
                                </div>
                              </Form>
                            </div>
                          </div>

                          <div className="apply-promo">
                            <h2>Billing Details:</h2>
                            <div className="billing-add">
                              <div className="quantity-flex">
                                <p>Quantity</p>
                                <p>{cartData?.totalQuantity}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>Item Total</p>
                                <p>${(cartData?.totalAmount).toFixed(2)}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>GST</p>
                                <p>${(cartData?.gst).toFixed(2)}</p>
                              </div>
                              <div className="simple-line"></div>
                              <div className="quantity-flex">
                                <p>Grand Total</p>
                                <p>${cartData?.grandTotal}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>Promocode Applied</p>
                                <p>-$0</p>
                              </div>
                              <div className="quantity-flex">
                                <p>To Pay</p>
                                <p>${cartData?.grandTotal}</p>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{ cursor: "pointer" }}
                            className="place-order"
                            onClick={makePayment}
                          >
                            <p>Place Order</p>
                            <p>${cartData?.grandTotal}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="pb-5">
                      <div className="no-posts-container ">
                        {/* <img 
                      src={require("../Assets/Images/no-posts-icon.svg").default} 
                      alt="No posts" 
                      className="no-posts-icon"
                    /> */}
                        <h3 className="no-posts-title">No data found</h3>
                        {/* <p className="no-posts-description">
                          No data found!
                        </p> */}
                        <button
                          className="create-post-btn"
                          onClick={() => navigate("/")}
                        >
                          Click to see products
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </Container>
        </div>
        {/* ................................... */}

        <div className="forgot-container ">
          <Modal
            className="forgot-modal cart-modal"
            show={show}
            onHide={handleClose}
          >
            <div className="cart-deliver">
              <Modal.Header closeButton>
                <div className="cart-heding-text">
                  <h2>Deliver to:</h2>
                </div>
              </Modal.Header>
              <Modal.Body>
                <div className="content-box">
                  <div className="input-modal-field">
                    <Form>
                      <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setphoneNumber(e.target.value)}
                          type="number"
                          placeholder="Enter here"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          as="textarea"
                          placeholder="Enter here"
                          rows={4}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          name="country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          type="text"
                          placeholder="Enter here"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="done-btn" onClick={handleEditAddress}>
                  Save
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>

        {/* ........................................ */}
        <div className="forgot-container ">
          <Modal
            className="forgot-modal cart-modal"
            show={showDeliveryModal}
            onHide={handleCloseDelivery}
          >
            <div className="cart-deliver">
              <Modal.Header closeButton>
                <div className="cart-heding-text">
                  <h2>Apply Promo Code:</h2>
                </div>
              </Modal.Header>
              <Modal.Body>
                <div className="content-box">
                  <div className="input-modal-field">
                    <Form>
                      <div className="apply-code">
                        <Form.Group className="mb-4" controlId="formBasicName">
                          <Form.Label>Enter Promo Code</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter here"
                          />
                        </Form.Group>
                        <p>Apply</p>
                      </div>
                    </Form>

                    <div className="credit-card">
                      <div className="card-title">
                        <h3>Flat $50 OFF using Credit card</h3>
                        <p>Save $50 with this code</p>
                        <h2>YESFIRST50OFF</h2>
                      </div>
                      <div className="card-disp">
                        <p>
                          *Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s
                        </p>
                        <p>
                          *Lorem Ipsum has been the industry's standard dummy
                          text ever{" "}
                        </p>
                        <p>
                          *Lorem Ipsum has been the industry's standard dummy
                          text ever since
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="done-btn" onClick={handleCloseDelivery}>
                  Tap to Apply
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>

        {/* ........................................ */}
        <div className="forgot-container ">
          <Modal
            className="forgot-modal cart-modal"
            show={showPreviousOrderModal}
            onHide={handleClosePreviousOrder}
          >
            <div className="cart-deliver">
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="order-id">
                  <div className="order-icon">
                    <img
                      src={require("../Assets/Images/order-icon.svg").default}
                    />
                  </div>
                  <div className="order-full-disp">
                    <h3>Order #90897 </h3>
                    <p>Placed on Octobar 19 2021</p>
                    <p>
                      Price: <span> $200.90 </span>
                    </p>
                  </div>
                </div>
                <div className="successful-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                  >
                    <path
                      d="M48.2848 0.102849C48.2848 0.877531 48.2848 1.5216 48.2848 2.16567C48.2848 17.2005 48.3931 32.2368 48.211 47.2695C48.1639 51.1663 51.1168 54.5128 55.7693 53.2209C61.6166 51.5972 67.5244 50.1868 73.4277 48.7758C74.4353 48.5349 75.6019 48.5463 76.6102 48.7907C82.5095 50.2194 88.3783 51.7747 94.2683 53.2419C98.7785 54.3654 101.688 52.0638 101.689 47.4243C101.693 32.3345 101.691 17.2448 101.691 2.15502C101.691 1.51001 101.691 0.864991 101.691 0.0971702C102.379 0.062151 102.912 0.011515 103.444 0.0112784C111.673 0.00630948 119.902 -0.00836074 128.132 0.0117517C140.36 0.0415653 149.914 9.40495 149.957 21.6314C150.037 43.8542 149.981 66.0777 149.979 88.3007C149.979 88.5655 149.951 88.83 149.916 89.4653C140.761 79.9375 129.856 74.9484 116.832 75.3322C103.773 75.7172 93.0292 81.1123 84.7317 91.1905C71.7786 106.924 71.0875 132.776 89.3173 149.841C88.7896 149.9 88.3998 149.982 88.0102 149.982C65.9013 149.988 43.7924 150.024 21.6837 149.973C9.58331 149.944 0.0546977 140.45 0.0374311 128.336C-0.0127133 92.7789 -0.0122402 57.2218 0.0374311 21.665C0.0544612 9.48209 9.63865 0.0484272 21.8386 0.0124615C30.0677 -0.01191 38.2971 0.00607286 46.5262 0.0112784C47.0574 0.011515 47.5889 0.065227 48.2848 0.102849ZM26.7634 128.436C29.6829 128.461 32.1471 126.06 32.1518 123.187C32.1565 120.324 29.6635 117.843 26.7958 117.856C23.9546 117.869 21.6101 120.213 21.5713 123.08C21.5304 126.105 23.7659 128.411 26.7634 128.436ZM48.1547 128.436C51.0756 128.463 53.5386 126.068 53.5483 123.192C53.558 120.331 51.065 117.845 48.197 117.856C45.357 117.867 43.0081 120.211 42.9676 123.076C42.925 126.103 45.1557 128.408 48.1547 128.436Z"
                      fill="#8C0444"
                    />
                    <path
                      d="M116.951 85.7239C133.531 85.1781 149.154 97.9521 149.9 116.621C150.591 133.886 137.574 149.06 119.217 149.947C102.102 150.774 86.5203 137.882 85.6934 119.144C84.8906 100.949 99.1967 86.1804 116.951 85.7239ZM126.945 106.121C123.037 110.041 119.002 114.087 114.8 118.302C112.532 116.08 110.277 113.869 108.131 111.766C105.771 114.101 103.323 116.525 100.83 118.991C101.049 119.231 101.289 119.518 101.552 119.782C104.926 123.148 108.24 126.578 111.703 129.851C113.672 131.712 116.74 131.666 118.731 129.731C124.15 124.467 129.463 119.094 134.747 113.835C132.19 111.307 129.747 108.891 126.945 106.121Z"
                      fill="#8C0444"
                    />
                    <path
                      d="M91.022 41.3574C86.1483 40.104 81.4517 38.8438 76.723 37.7197C75.6537 37.4655 74.4249 37.4778 73.3499 37.722C69.0862 38.6907 64.8551 39.8019 60.6101 40.8539C60.1418 40.9701 59.6631 41.0448 59.0467 41.1672C59.0467 27.4257 59.0467 13.8221 59.0467 0.113024C69.7184 0.113024 80.3211 0.113024 91.022 0.113024C91.022 13.8614 91.022 27.5442 91.022 41.3574Z"
                      fill="#8C0444"
                    />
                  </svg>
                </div>

                <div className="order-states">
                  <h2>Your order was successful !</h2>
                  <p>You will receive an order confirmation email </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="done-btn" onClick={handleClosePreviousOrder}>
                  Track Order
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>
      </Layout>
    </>
  );
}
