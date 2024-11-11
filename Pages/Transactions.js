import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";

export default function Transactions() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <Row>
            <Col>
              <h2 className="transactions-heading">Transactions</h2>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/master-card.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$89</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/visa-card.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$109</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/paypal.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$567</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/paypal.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$567</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/paypal.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$567</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="transactions-card">
                <Card.Body className="transactions-card-body">
                  <div className="transactions-main-content">
                    <div className="transactions-img-content">
                      <div className="transactions-img">
                        <img
                          src={require("../Assets/Images/paypal.png")}
                          alt="card"
                        />
                      </div>
                      <div className="transactions-content">
                        <h3>Jhon wick</h3>
                        <p>Dec 12 2021 at 10:00 pm</p>
                      </div>
                    </div>
                    <div className="transactions-amount">
                      <h3>$567</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
