import { Card, CardBody, Col, Container, Row, Table } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <Row>
            <Col className="subscription-page">
              <h2>Membership Plan</h2>
              <div>
                <h3>Go Premium</h3>
                <p className="members-para">
                  Members spending over $1200 annually gain access to exclusive
                  sales, discounted events, and priority status
                </p>
              </div>
              <div className="subscription-plans-cards">
                <Link>
                  <Card className="plan-card">
                    <CardBody className="plan-card-body">
                      <div>
                        <div className="plan-heading">
                          <h2> Basic Plan</h2>
                          <div>Best Value</div>
                        </div>
                        <ul>
                          <li>First month free</li>
                          <li>Cancel anytime</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
                <Link>
                  <Card className="plan-card ">
                    <CardBody className="plan-card-body">
                      <div>
                        <div className="plan-heading">
                          <h2> Beginners Plan</h2>
                          <div>Best Value</div>
                        </div>
                        <ul>
                          <li>4 bottles per month</li>
                          <li>Priority event invites.</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
                <Link>
                  <Card className="plan-card">
                    <CardBody className="plan-card-body">
                      <div>
                        <div className="plan-heading">
                          <h2> Cellar Plan</h2>
                          <div>Best Value</div>
                        </div>
                        <ul>
                          <li>4 bottles per month</li>
                          <li>Priority event invites.</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </div>
              <div>
                <div className="plan-pay-btn">
                  <button>Pay $10</button>
                </div>
                <Link className="start-free-trial">Start free trial</Link>
              </div>
              <div className="plan-table-padding">
                <Table responsive className="plan-table">
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th>Basic</th>
                      <th>Beginners</th>
                      <th>Cellar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>$10/month</td>
                      <td>$15/month</td>
                      <td>$20/month</td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>Feature 1</td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            fill="rgba(255, 0, 0, 1)"
                            height="12px"
                            width="12px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 180.607 180.607"
                            // xml:space="preserve"
                            stroke="rgba(255, 0, 0, 1)"
                            stroke-width="2.709105"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                      <td>
                        <i>
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M4 7.5L7 10L11 5"
                                stroke="rgba(28, 201, 0, 1)"
                              ></path>{" "}
                            </g>
                          </svg>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="subscription-bottom-content">
                <h2>Important Note!</h2>
                <p>Subscription Details</p>
                <div className="subscription-bottom-content-para">
                  <p>
                    Once a Membership has been purchased, payment will be
                    charged to your iTunes or Google Play account.
                  </p>
                  <p>
                    Your subscription will automatically renew unless
                    auto-renewal is turned off at least 48 hours before the end
                    of the current subscription period.
                  </p>
                  <p>
                    Your account will be charged for renewal within 48 hours
                    prior to the end of the current subscription period.
                  </p>
                  <p>
                    Please read our terms of service and privacy policy for more
                    information.
                  </p>
                </div>

                <p className="mb-1">Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
