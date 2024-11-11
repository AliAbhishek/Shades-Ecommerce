import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";

export default function Support() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <Row>
            <Col>
              <h2 className="transactions-heading">Support</h2>
              <Card className="support-card">
                <Card.Body className="support-card-body ">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control support-chat-input"
                      placeholder="Send a message"
                      aria-label=""
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-secondary support-send-btn"
                      type="button"
                      id="button-addon2"
                    >
                      <img src={require("../Assets/Images/send.png")} alt="send"/>
                    </button>
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
