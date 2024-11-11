import { Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export default function CourseOverview() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <div>
            <div>
              <Card className="wine-education-card">
                <CardBody className="wine-education-card-body"></CardBody>
              </Card>
            </div>
          </div>
          <Row>
            <Col>
              <div>
                <h2 className="course-overview-heading">
                  A virtual evening of smooth jazz
                </h2>
              </div>
              <div className="course-overview-sub-heading">
                <div>
                  <i className="star-icn">
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="#8e8e8e"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#8e8e8e"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                          stroke="#8e8e8e"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </i>
                  <p>4.6</p>
                </div>
                <p>10.5k Learners</p>
              </div>
              <div className="navigation-tabs">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      Overview
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Chapters
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Quiz
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <div className="overview-content">
                      <h3>6 Hours</h3>
                      <h3> Completion Certificate</h3>
                      <h3>Quizzes </h3>
                      <div>
                        <h4>What will I learn ? </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Non id neque sit aliquam nam molestie dignissim
                          ac eget. Fames congue faucibus in fermentum proin. A
                          accumsan, convallis elementum amet sed. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Non id
                          neque sit aliquam nam molestie dignissim ac eget.
                          Fames congue faucibus in fermentum proin. A accumsan
                        </p>
                      </div>

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
                            <div className="review-box">
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
                                Lorem Ipsum is simply dummy text for printing
                                and typesetting industry. Lorem ipsum has been
                                industry standard text ever since 1500s.
                              </p>
                            </div>
                            <div className="review-box">
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
                                Lorem Ipsum is simply dummy text for printing
                                and typesetting industry. Lorem ipsum has been
                                industry standard text ever since 1500s.
                              </p>
                            </div>
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
                          <p>Reviews</p>
                        </div>
                      </section>

                      <section>
                        <div className="review-with-textarea">
                          <div className="big-gray-review">
                            <img
                              src={
                                require("../Assets/Images/big-gray-review.svg")
                                  .default
                              }
                            />
                            <img
                              src={
                                require("../Assets/Images/big-gray-review.svg")
                                  .default
                              }
                            />
                            <img
                              src={
                                require("../Assets/Images/big-gray-review.svg")
                                  .default
                              }
                            />
                            <img
                              src={
                                require("../Assets/Images/big-gray-review.svg")
                                  .default
                              }
                            />
                            <img
                              src={
                                require("../Assets/Images/big-gray-review.svg")
                                  .default
                              }
                            />
                          </div>

                          <div className="review-textarea-field">
                            <Form>
                              <div className="form-set">
                                <Form.Group
                                  className=""
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Tell us about your taste"
                                    rows={7}
                                  />
                                </Form.Group>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </section>

                      <div className="history-wine-submit-btn overview-btn">
                        <button type="submit">Start Learning</button>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <div>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 1. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 2. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 3. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 4. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 5. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 6. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <Card className="chapters-card">
                        <div>
                          <Card.Img
                            variant="top"
                            src={require("../Assets/Images/chapters-card.jpeg")}
                            className="chapters-img"
                          />
                          <CardBody className="chapters-card-body">
                            <h2> 7. Course Duration</h2>
                            <p> Duration 1:32</p>
                          </CardBody>
                        </div>
                      </Card>
                      <div className="history-wine-submit-btn overview-btn">
                        <button type="submit">Start Learning</button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                  >
                    <div>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 1</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 2</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 3</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 4</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 5</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 6</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 7</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 8</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 9</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Card className="quiz-card">
                        <CardBody className="quiz-card-body">
                          <h2> Question 10</h2>
                          <p> Essence of wine </p>
                        </CardBody>
                      </Card>
                      <Link to="/quiz">
                        <div className="history-wine-submit-btn overview-btn">
                          <button type="submit">Start Quiz</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
