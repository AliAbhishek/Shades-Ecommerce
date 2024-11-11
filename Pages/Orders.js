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
import CustomerActions from "../Redux/Actions/CustomerActions";
import Loader from "../utils/Loader";
import moment from "moment";
import { orderId } from "../Redux/Reducers/orderSlice";

export default function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_API_URL;
  let { orderData, isLoading, id, orderDetail } = useSelector(
    (state) => state.order
  );
  console.log(orderDetail, "orderDetail");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(CustomerActions.getMyOrders());
  }, []);

  useEffect(() => {

    if(orderData?.length>0){
      if (id) {
        dispatch(CustomerActions?.getOrderById(id));
      }else{
       
          console.log(orderData[0]?._id,"orderData[0]?._id")
        dispatch(CustomerActions?.getOrderById(orderData[0]?._id));
  
        
       
      }
      
    }
    

  }, [id,orderData]);

  console.log(orderData, "order");

  return (
    <>
      <Layout>
        {isLoading && <Loader />}
        <div className="main-search-container">
          <Container>
            <div className="search-result">
              <div className="filter-sec">
                <div className="search-wine-heading order-page-heading">
                  <h2>Orders</h2>
                </div>
              </div>

              <section>
                <div className="cart-page">
                  <div className="cart-page-flex">
                    <div className="cart-left-side">
                      {orderData?.length > 0 ? (
                        orderData?.map((order, index) => {
                          return (
                            <div
                              onClick={() => {
                                dispatch(orderId(order?._id));
                              }}
                              className={`place-order-box ${
                                index > 0 && "mt-4"
                              }`}
                              // onClick={handleShow}
                            >
                              <div className="order-full-information">
                                <div className="order-with-image">
                                  <img
                                    src={
                                      require("../Assets/Images/order-with-image.svg")
                                        .default
                                    }
                                  />
                                </div>
                                <div className="text-order-id">
                                  <h2>Order #{order?.orderId}</h2>
                                  <p>
                                    Placed on{" "}
                                    {moment(order?.createdAt)?.format(
                                      "MMM DD YYYY"
                                    )}
                                  </p>
                                  <div className="order-with-item-price">
                                    <p>
                                      Items:{" "}
                                      <span> {order?.order_quantity} </span>
                                    </p>
                                    <p>
                                      Price:{" "}
                                      <span>
                                        {" "}
                                        ${(order?.price).toFixed(2)}{" "}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order-confirmed-ps">
                                <p>
                                  <span></span>Order Placed and confirmed
                                </p>
                                <p>Aug 22 2024</p>
                              </div>
                            </div>
                          );
                        })
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
                            {/* <button
                              className="create-post-btn"
                              onClick={() => navigate("/")}
                            >
                              Click to see products
                            </button> */}
                          </div>
                        </div>
                      )}

                      {/* <div className="place-order-box mt-4">
                        <div className="order-full-information">
                          <div className="order-with-image">
                            <img
                              src={
                                require("../Assets/Images/order-with-image.svg")
                                  .default
                              }
                            />
                          </div>
                          <div className="text-order-id">
                            <h2>Order #90897</h2>
                            <p>Placed on August 22 2024</p>
                            <div className="order-with-item-price">
                              <p>
                                Items: <span> 10 </span>
                              </p>
                              <p>
                                Price: <span> $120 </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order-confirmed-ps">
                          <p>
                            <span></span>Order Placed and confirmed
                          </p>
                          <p>Aug 22 2024</p>
                        </div>
                      </div>
                      <div className="place-order-box mt-4">
                        <div className="order-full-information">
                          <div className="order-with-image">
                            <img
                              src={
                                require("../Assets/Images/order-with-image.svg")
                                  .default
                              }
                            />
                          </div>
                          <div className="text-order-id">
                            <h2>Order #90897</h2>
                            <p>Placed on August 22 2024</p>
                            <div className="order-with-item-price">
                              <p>
                                Items: <span> 10 </span>
                              </p>
                              <p>
                                Price: <span> $120 </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order-confirmed-ps">
                          <p>
                            <span></span>Order Placed and confirmed
                          </p>
                          <p>Aug 22 2024</p>
                        </div>
                      </div> */}
                    </div>
                    {orderDetail && (
                      <div className="cart-right-side">
                        <div className="deliver-to">
                          <div className="apply-promo top-mg-space">
                            <h2>Billing Details:</h2>
                            <div className="billing-add">
                              <div className="quantity-flex">
                                <p>Quantity</p>
                                <p>{orderDetail?.order_quantity}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>Item Total</p>
                                <p>${(orderDetail?.price).toFixed(2)}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>GST</p>
                                <p>${(orderDetail?.gst).toFixed(2)}</p>
                              </div>
                              <div className="simple-line"></div>
                              <div className="quantity-flex">
                                <p>Grand Total</p>
                                <p>${(orderDetail?.grand_price).toFixed(2)}</p>
                              </div>
                              <div className="quantity-flex">
                                <p>Promocode Applied</p>
                                <p>-$0</p>
                              </div>
                              <div className="quantity-flex">
                                <p>To Pay</p>
                                <p>${(orderDetail?.grand_price).toFixed(2)}</p>
                              </div>
                            </div>
                          </div>

                          <div className="edit-with mt-4">
                            <h2>Deliver to:</h2>
                          </div>

                          <div className="delivery-address ">
                            <p>
                            {orderDetail?.userId?.address},{" "}
                            {orderDetail?.userId?.country}
                            </p>
                          </div>

                          <div className="edit-with mt-4">
                            <h2>Order Summary:</h2>
                          </div>

                          
                          {
                            orderDetail?.products?.map((product)=>{
                              return(
                                <div className="summary-box mt-4">
                                <div className="wine-summary">
                              <div className="summary-wine-image">
                              <img
                                      style={{ borderRadius: "10%",height:"80px" }}
                                      src={
                                        BASE_URL + "/" + product?.productId?.image
                                      }
                                    />
                              </div>
                              <div className="summary-wine-name">
                                <h2>
                                {product?.productId?.product_category ==
                                        "Wine"
                                          ? product?.productId?.wine_brand
                                          : product?.productId?.product_name}
                                </h2>
                                <p>USD {product?.product_price}</p>
                              </div>
                            </div>
                            <div className="item-qnty">
                              <p>{product?.quantity} Qty</p>
                            </div>

                                </div>
                                
                              )
                            })

                          }
                           
                      

                          {/* <div className="summary-box mt-4">
                            <div className="wine-summary">
                              <div className="summary-wine-image">
                                <img
                                  src={
                                    require("../Assets/Images/opner-summery.svg")
                                      .default
                                  }
                                />
                              </div>
                              <div className="summary-wine-name">
                                <h2>
                                  St.Lucia Distillers Chairman’s Reserve 1931
                                  Wine
                                </h2>
                                <p>USD 12,333</p>
                              </div>
                            </div>
                            <div className="item-qnty">
                              <p>3 Qty</p>
                            </div>
                          </div> */}

                          <div className="edit-with mt-4">
                            <h2>Track Order:</h2>
                          </div>
                          <div className="track-order-sec mt-4">
                            <div className="first-step">
                              <img
                                src={
                                  require("../Assets/Images/clear-step-first.svg")
                                    .default
                                }
                              />
                            </div>
                            <div className="track-order-heading">
                              <h2>Order placed and confirmed</h2>
                              <p>
                                <span>
                                  <img
                                    src={
                                      require("../Assets/Images/clock-icon.svg")
                                        .default
                                    }
                                  />
                                </span>
                                9:31 AM | 10 June 2022
                              </p>
                            </div>
                          </div>
                          <div className="track-order-sec mt-5">
                            <div className="first-step">
                              <span></span>
                            </div>
                            <div className="track-order-heading packing-order">
                              <h2>Packing order</h2>
                              <p>
                                <span>
                                  <img
                                    src={
                                      require("../Assets/Images/clock-icon.svg")
                                        .default
                                    }
                                  />
                                </span>
                                10:24 AM | Making best efforts
                              </p>
                            </div>
                          </div>
                          <div className="track-order-sec mt-5">
                            <div className="first-step">
                              <span></span>
                            </div>
                            <div className="track-order-heading packing-order">
                              <h2>Order On Delivery</h2>
                              <p>
                                <span>
                                  <img
                                    src={
                                      require("../Assets/Images/clock-icon.svg")
                                        .default
                                    }
                                  />
                                </span>
                                Soon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
                    <div className="item-and-price">
                      <p>
                        Item: <span> 10 </span>
                      </p>
                      <p>
                        Price: <span> $200.90 </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="share-exprience">
                  <h2>Share Your Experience?</h2>
                </div>
                <div className="order-review-gray">
                  <img
                    src={require("../Assets/Images/new-gray-icon.svg").default}
                  />
                  <img
                    src={require("../Assets/Images/new-gray-icon.svg").default}
                  />
                  <img
                    src={require("../Assets/Images/new-gray-icon.svg").default}
                  />
                  <img
                    src={require("../Assets/Images/new-gray-icon.svg").default}
                  />
                  <img
                    src={require("../Assets/Images/new-gray-icon.svg").default}
                  />
                </div>

                <div className="text-area-desp">
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control
                      as="textarea"
                      placeholder="Write description here"
                      rows={5}
                    />
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="done-btn" onClick={handleClose}>
                  Submit
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>
      </Layout>
    </>
  );
}
