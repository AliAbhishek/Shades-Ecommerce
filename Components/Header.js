import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo-top.svg"; // Update the path as needed
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CustomerActions from "../Redux/Actions/CustomerActions";
import { setCustomer } from "../Redux/Reducers/loginSlice";

const Header = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const location = useLocation();
  const { customerDetails } = useSelector((state) => state.login);
  const { cartData } = useSelector((state) => state.cart);
  console.log(cartData, "cartData");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(CustomerActions.getCustomer());
      dispatch(setCustomer(res?.payload?.data));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(CustomerActions.getCart());
  }, []);

  return (
    <>
      {(!token || (token && customerDetails?.is_profile_completed == 0)) && (
        <div
          className={`header-background ${isScrolled && "gradient-background"}`}
        >
          <Container>
            <header className="top-heading">
              <div className="web-logo scroll-logo">
                <img src={logo} alt="Logo" />
              </div>
              <nav className="landing-links">
                <ul>
                  <li>
                    <Link to="https://fifty-shades-shop-owner.bosselt.com">
                      Become a Partner
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
                <button onClick={() => navigate("/create-account")}>
                  Sign up
                </button>
              </nav>
            </header>
          </Container>
        </div>
      )}
      {token && customerDetails?.is_profile_completed == 1 && (
        <div
          className={`header-background ${
            isScrolled ||
            (location.pathname !== "/" && location.pathname !== "/community")
              ? "gradient-background"
              : ""
          }`}
        >
          <Container>
            <header>
              <div className="second-header">
                <Navbar expand="lg" className="custom-nav-bar">
                  <Navbar.Brand href="#">
                    <div
                      onClick={() => navigate("/")}
                      className={`web-logo ${isScrolled && "scroll-logo"}`}
                    >
                      <img src={logo} alt="Logo" />
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <div className="top-search-bar">
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search here"
                          className="me-2"
                          aria-label="Search"
                        />
                      </Form>
                    </div>

                    <Nav className="heading-liks" navbarScroll>
                      <Nav.Link as={Link} to="/">
                        Home
                      </Nav.Link>
                      <Nav.Link as={Link} to="/community">
                        Community
                      </Nav.Link>
                      <Nav.Link as={Link} to="/orders">
                        Order
                      </Nav.Link>
                      <Nav.Link as={Link} to="/message">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="25"
                          viewBox="0 0 28 25"
                          fill="none"
                        >
                          <path
                            d="M23.1985 0H3.86026C1.73165 0 0 1.73171 0 3.86026V16.9118C0 19.0404 1.73165 20.7721 3.86026 20.7721H5.37507L5.40472 24.1799C5.40654 24.3981 5.49449 24.6067 5.64939 24.7603C5.80429 24.9138 6.01361 25 6.23175 25C6.41139 25 6.5897 24.9415 6.73726 24.8277L11.9917 20.7722H23.1985C25.327 20.7722 27.0587 19.0405 27.0587 16.9119V3.86026C27.0587 1.73171 25.327 0 23.1985 0Z"
                            fill="white"
                          />
                        </svg>
                      </Nav.Link>
                      <Nav.Link as={Link} to="/cart" className="cart-link">
                      {
                        cartData?.cartProducts?.length > 0 &&  <p className="cart-count">{cartData?.cartProducts?.length}</p>
                      }
                       
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="25"
                          viewBox="0 0 30 25"
                          fill="none"
                        >
                          <path
                            d="M0 0.995287C0.259773 0.253749 0.796378 -0.0242489 1.56208 0.0016423C2.41018 0.0302713 3.26008 0.00625736 4.10911 0.00860399C5.89161 0.0135319 7.24384 1.01844 7.76222 2.72617C7.96284 3.38706 8.16408 4.04811 8.34358 4.71479C8.40469 4.94178 8.49662 5.01907 8.73981 5.01727C10.4086 5.00491 12.0776 5.01078 13.7465 5.01078C18.275 5.01078 22.8034 5.01398 27.3319 5.00796C28.1554 5.00687 28.8716 5.23347 29.4139 5.87817C29.962 6.52999 30.1397 7.28123 29.8874 8.09379C29.0364 10.8343 28.1835 13.5746 27.297 16.3038C26.8013 17.83 25.4688 18.7498 23.7848 18.7562C20.086 18.7703 16.387 18.7716 12.6881 18.7559C10.8776 18.7482 9.58251 17.7413 9.06969 16.0056C7.84054 11.8456 6.61288 7.68508 5.38459 3.52481C5.16393 2.77756 4.81293 2.51724 4.02218 2.51661C3.22189 2.51599 2.41988 2.48353 1.62178 2.52592C0.850132 2.56691 0.297722 2.313 0 1.58077C0 1.38561 0 1.19045 0 0.995287Z"
                            fill="white"
                          />
                          <path
                            d="M22.5328 20.0055C23.9297 20.0407 25.0368 21.1876 24.9983 22.5597C24.959 23.9665 23.8051 25.0336 22.3609 24.9987C21.0546 24.9672 19.9479 23.7796 19.9826 22.4464C20.0182 21.0758 21.1722 19.9711 22.5328 20.0055Z"
                            fill="white"
                          />
                          <path
                            d="M16.2432 22.4919C16.253 23.855 15.1482 24.9888 13.7994 24.9999C12.3891 25.0115 11.2548 23.92 11.2467 22.5432C11.2383 21.1267 12.3453 20.0025 13.7473 20.004C15.1255 20.0055 16.2333 21.1097 16.2432 22.4919Z"
                            fill="white"
                          />
                        </svg>
                      </Nav.Link>
                      <Nav.Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="25"
                          viewBox="0 0 21 25"
                          fill="none"
                        >
                          <path
                            d="M10.7407 0.0330364C10.9321 0.0807106 11.1105 0.178977 11.2464 0.321152C11.5771 0.667343 11.6295 1.19679 11.5519 1.66751C11.5268 1.82004 11.4971 1.99803 11.6034 2.11098C11.6736 2.18553 11.7826 2.20642 11.8837 2.22548C14.808 2.7771 17.2583 5.26233 17.7492 8.17445C18.092 10.2083 17.5604 12.3497 18.1463 14.3281C18.4611 15.3911 19.0885 16.3475 19.8669 17.1421C20.2443 17.5273 20.6694 17.8939 20.8778 18.3897C21.1996 19.1549 20.8629 20.1329 20.1365 20.5431C19.6173 20.8363 18.9889 20.8439 18.3913 20.8439C13.1279 20.8433 7.86446 20.8427 2.60104 20.8421C2.00206 20.8421 1.37153 20.834 0.852597 20.5372C0.175092 20.1496 -0.165535 19.2649 0.0791525 18.528C0.287922 17.8993 0.835279 17.4541 1.29158 16.971C2.11798 16.0962 2.70144 14.9979 2.9616 13.8272C3.25217 12.5198 3.14275 11.1631 3.14845 9.82432C3.14892 9.71504 3.1503 9.60576 3.15277 9.49648C3.15528 9.38617 3.15893 9.2759 3.16401 9.16573C3.16909 9.05532 3.17554 8.94496 3.18361 8.83474C3.19167 8.72456 3.2014 8.61448 3.21302 8.50459C3.2246 8.39494 3.23808 8.28547 3.25369 8.17633C3.26925 8.06757 3.28695 7.95909 3.30706 7.85104C3.32709 7.74345 3.34953 7.63629 3.37463 7.52974C3.39964 7.42367 3.42725 7.3182 3.45781 7.21353C3.48827 7.10924 3.52158 7.0058 3.55806 6.90349C3.59446 6.80136 3.63398 6.70027 3.67687 6.60064C3.71976 6.50091 3.76598 6.4026 3.81566 6.30603C3.86552 6.20903 3.9189 6.11383 3.97584 6.02074C3.98832 6.00031 4.00288 5.98059 4.00877 5.95711C4.01408 5.93607 4.02054 5.91828 4.03116 5.89913C4.05479 5.85649 4.0789 5.81408 4.10343 5.77192C4.15249 5.68767 4.2033 5.60442 4.25578 5.52225C4.30826 5.44013 4.36249 5.35904 4.41834 5.27908C4.47418 5.19912 4.53164 5.12034 4.59067 5.04269C4.64969 4.96503 4.71033 4.8886 4.77244 4.81335C4.83455 4.7381 4.89822 4.66407 4.96327 4.59131C5.02837 4.51855 5.09489 4.44706 5.16284 4.37689C5.23078 4.30672 5.3001 4.23782 5.37075 4.17034C5.4414 4.1028 5.51338 4.03668 5.58664 3.97192C5.6599 3.90716 5.73439 3.84382 5.81012 3.78188C5.88585 3.72 5.96276 3.65952 6.04086 3.60055C6.11891 3.54158 6.19815 3.48412 6.27848 3.42816C6.35876 3.37221 6.44018 3.31785 6.52259 3.265C6.60501 3.21219 6.68842 3.16094 6.77283 3.11134C6.85724 3.06174 6.9426 3.01378 7.02886 2.96747C7.11512 2.92116 7.20228 2.87655 7.2903 2.83362C7.37831 2.7907 7.46718 2.74952 7.55681 2.71009C7.64644 2.67065 7.73687 2.633 7.82802 2.59714C7.91917 2.56127 8.01103 2.52725 8.10355 2.49506C8.19607 2.46287 8.28926 2.43251 8.38302 2.40409C8.47682 2.37566 8.5712 2.34912 8.66609 2.3245C8.76103 2.29989 8.8565 2.27725 8.95234 2.25659C8.95856 2.25523 8.96482 2.25391 8.97104 2.25259C9.07632 2.23024 9.18531 2.20882 9.27437 2.14882C9.60935 1.9232 9.42729 1.41573 9.43612 1.01419C9.44513 0.604797 9.72204 0.213615 10.1072 0.0661683C10.3082 -0.0107787 10.5321 -0.0189675 10.7407 0.0330364Z"
                            fill="white"
                          />
                          <path
                            d="M6.66659 21.8833C9.23412 21.8833 11.7833 21.8833 14.3338 21.8833C14.1522 23.2238 12.7879 24.9002 10.6932 24.9957C8.47952 25.0966 6.90487 23.4132 6.66659 21.8833Z"
                            fill="white"
                          />
                        </svg>
                      </Nav.Link>
                      <div className="header-button">
                        <Button onClick={() => navigate("/profile")}>
                          <span>
                            <img
                              style={{
                                width: "30px",
                                height: "30px",
                                objectFit: "cover",
                              }}
                              src={
                                customerDetails?.profile_image
                                  ? BASE_URL +
                                    "/" +
                                    customerDetails?.profile_image
                                  : require("../Assets/Images/user-profile-image.svg")
                                      .default
                              }
                              alt="profile"
                            />
                          </span>{" "}
                          {customerDetails && customerDetails?.name}
                        </Button>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </header>
          </Container>
        </div>
      )}

      <>
        {/* // <div className="header-background ">
    //   <Container>
    //     <header>
    //       <div className="className="top-heading>
    //       <div className="web-logo">
    //         <img src={logo} alt="Logo" />
    //       </div>
    //       <nav className="landing-links">
    //         <ul>
    //           <li>
    //             <Link to="#">Become a Partner</Link>
    //           </li>
    //           <li>
    //             <Link to="/login">Login</Link>
    //           </li>
    //         </ul>
    //         <button>Sign up</button>
    //       </nav>
    //         </div>
    //     </header>
    //   </Container>
    //   </div> */}
      </>

      {/* <div className="header-background gradient-background">
        <Container>
          <header>
            <div className="second-header">
              <Navbar expand="lg" className="custom-nav-bar">
                <Navbar.Brand href="#">
                  <div className="web-logo">
                    <img src={logo} alt="Logo" />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <div className="top-search-bar">
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search here"
                        className="me-2"
                        aria-label="Search"
                      />
                    </Form>
                  </div>

                  <Nav className="heading-liks" navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/community">Community</Nav.Link>
                    <Nav.Link href="/orders">Order</Nav.Link>
                    <Nav.Link href="/message">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="25"
                        viewBox="0 0 28 25"
                        fill="none"
                      >
                        <path
                          d="M23.1985 0H3.86026C1.73165 0 0 1.73171 0 3.86026V16.9118C0 19.0404 1.73165 20.7721 3.86026 20.7721H5.37507L5.40472 24.1799C5.40654 24.3981 5.49449 24.6067 5.64939 24.7603C5.80429 24.9138 6.01361 25 6.23175 25C6.41139 25 6.5897 24.9415 6.73726 24.8277L11.9917 20.7722H23.1985C25.327 20.7722 27.0587 19.0405 27.0587 16.9119V3.86026C27.0587 1.73171 25.327 0 23.1985 0Z"
                          fill="white"
                        />
                      </svg>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="25"
                        viewBox="0 0 30 25"
                        fill="none"
                      >
                        <path
                          d="M0 0.995287C0.259773 0.253749 0.796378 -0.0242489 1.56208 0.0016423C2.41018 0.0302713 3.26008 0.00625736 4.10911 0.00860399C5.89161 0.0135319 7.24384 1.01844 7.76222 2.72617C7.96284 3.38706 8.16408 4.04811 8.34358 4.71479C8.40469 4.94178 8.49662 5.01907 8.73981 5.01727C10.4086 5.00491 12.0776 5.01078 13.7465 5.01078C18.275 5.01078 22.8034 5.01398 27.3319 5.00796C28.1554 5.00687 28.8716 5.23347 29.4139 5.87817C29.962 6.52999 30.1397 7.28123 29.8874 8.09379C29.0364 10.8343 28.1835 13.5746 27.297 16.3038C26.8013 17.83 25.4688 18.7498 23.7848 18.7562C20.086 18.7703 16.387 18.7716 12.6881 18.7559C10.8776 18.7482 9.58251 17.7413 9.06969 16.0056C7.84054 11.8456 6.61288 7.68508 5.38459 3.52481C5.16393 2.77756 4.81293 2.51724 4.02218 2.51661C3.22189 2.51599 2.41988 2.48353 1.62178 2.52592C0.850132 2.56691 0.297722 2.313 0 1.58077C0 1.38561 0 1.19045 0 0.995287Z"
                          fill="white"
                        />
                        <path
                          d="M22.5328 20.0055C23.9297 20.0407 25.0368 21.1876 24.9983 22.5597C24.959 23.9665 23.8051 25.0336 22.3609 24.9987C21.0546 24.9672 19.9479 23.7796 19.9826 22.4464C20.0182 21.0758 21.1722 19.9711 22.5328 20.0055Z"
                          fill="white"
                        />
                        <path
                          d="M16.2432 22.4919C16.253 23.855 15.1482 24.9888 13.7994 24.9999C12.3891 25.0115 11.2548 23.92 11.2467 22.5432C11.2383 21.1267 12.3453 20.0025 13.7473 20.004C15.1255 20.0055 16.2333 21.1097 16.2432 22.4919Z"
                          fill="white"
                        />
                      </svg>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="25"
                        viewBox="0 0 21 25"
                        fill="none"
                      >
                        <path
                          d="M10.7407 0.0330364C10.9321 0.0807106 11.1105 0.178977 11.2464 0.321152C11.5771 0.667343 11.6295 1.19679 11.5519 1.66751C11.5268 1.82004 11.4971 1.99803 11.6034 2.11098C11.6736 2.18553 11.7826 2.20642 11.8837 2.22548C14.808 2.7771 17.2583 5.26233 17.7492 8.17445C18.092 10.2083 17.5604 12.3497 18.1463 14.3281C18.4611 15.3911 19.0885 16.3475 19.8669 17.1421C20.2443 17.5273 20.6694 17.8939 20.8778 18.3897C21.1996 19.1549 20.8629 20.1329 20.1365 20.5431C19.6173 20.8363 18.9889 20.8439 18.3913 20.8439C13.1279 20.8433 7.86446 20.8427 2.60104 20.8421C2.00206 20.8421 1.37153 20.834 0.852597 20.5372C0.175092 20.1496 -0.165535 19.2649 0.0791525 18.528C0.287922 17.8993 0.835279 17.4541 1.29158 16.971C2.11798 16.0962 2.70144 14.9979 2.9616 13.8272C3.25217 12.5198 3.14275 11.1631 3.14845 9.82432C3.14892 9.71504 3.1503 9.60576 3.15277 9.49648C3.15528 9.38617 3.15893 9.2759 3.16401 9.16573C3.16909 9.05532 3.17554 8.94496 3.18361 8.83474C3.19167 8.72456 3.2014 8.61448 3.21302 8.50459C3.2246 8.39494 3.23808 8.28547 3.25369 8.17633C3.26925 8.06757 3.28695 7.95909 3.30706 7.85104C3.32709 7.74345 3.34953 7.63629 3.37463 7.52974C3.39964 7.42367 3.42725 7.3182 3.45781 7.21353C3.48827 7.10924 3.52158 7.0058 3.55806 6.90349C3.59446 6.80136 3.63398 6.70027 3.67687 6.60064C3.71976 6.50091 3.76598 6.4026 3.81566 6.30603C3.86552 6.20903 3.9189 6.11383 3.97584 6.02074C3.98832 6.00031 4.00288 5.98059 4.00877 5.95711C4.01408 5.93607 4.02054 5.91828 4.03116 5.89913C4.05479 5.85649 4.0789 5.81408 4.10343 5.77192C4.15249 5.68767 4.2033 5.60442 4.25578 5.52225C4.30826 5.44013 4.36249 5.35904 4.41834 5.27908C4.47418 5.19912 4.53164 5.12034 4.59067 5.04269C4.64969 4.96503 4.71033 4.8886 4.77244 4.81335C4.83455 4.7381 4.89822 4.66407 4.96327 4.59131C5.02837 4.51855 5.09489 4.44706 5.16284 4.37689C5.23078 4.30672 5.3001 4.23782 5.37075 4.17034C5.4414 4.1028 5.51338 4.03668 5.58664 3.97192C5.6599 3.90716 5.73439 3.84382 5.81012 3.78188C5.88585 3.72 5.96276 3.65952 6.04086 3.60055C6.11891 3.54158 6.19815 3.48412 6.27848 3.42816C6.35876 3.37221 6.44018 3.31785 6.52259 3.265C6.60501 3.21219 6.68842 3.16094 6.77283 3.11134C6.85724 3.06174 6.9426 3.01378 7.02886 2.96747C7.11512 2.92116 7.20228 2.87655 7.2903 2.83362C7.37831 2.7907 7.46718 2.74952 7.55681 2.71009C7.64644 2.67065 7.73687 2.633 7.82802 2.59714C7.91917 2.56127 8.01103 2.52725 8.10355 2.49506C8.19607 2.46287 8.28926 2.43251 8.38302 2.40409C8.47682 2.37566 8.5712 2.34912 8.66609 2.3245C8.76103 2.29989 8.8565 2.27725 8.95234 2.25659C8.95856 2.25523 8.96482 2.25391 8.97104 2.25259C9.07632 2.23024 9.18531 2.20882 9.27437 2.14882C9.60935 1.9232 9.42729 1.41573 9.43612 1.01419C9.44513 0.604797 9.72204 0.213615 10.1072 0.0661683C10.3082 -0.0107787 10.5321 -0.0189675 10.7407 0.0330364Z"
                          fill="white"
                        />
                        <path
                          d="M6.66659 21.8833C9.23412 21.8833 11.7833 21.8833 14.3338 21.8833C14.1522 23.2238 12.7879 24.9002 10.6932 24.9957C8.47952 25.0966 6.90487 23.4132 6.66659 21.8833Z"
                          fill="white"
                        />
                      </svg>
                    </Nav.Link>
                    <div className="header-button">
                      <Button onClick={() => navigate("/profile")}>
                        <span>
                          <img
                            src={
                              require("../Assets/Images/header-btn-image.svg")
                                .default
                            }
                          />
                        </span>
                        Leslie R
                      </Button>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>
        </Container>
      </div> */}
    </>
  );
};

export default Header;
