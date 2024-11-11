import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export default function Results() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <Row>
            <Col className="terms-service-heading">
              <h2>Results</h2>
              <div className="results">
                <div className="">
                  <div className="result-circle">
                    <img src={require("../Assets/Images/result-circle.png")} />
                  </div>
                  <div className="result-button">
                    <button className="correct-answer">75% Correct answer</button>
                    <button className="wrong-answer">25% Wrong answer</button>
                  </div>
                </div>
                <div className="padding-result">
                  <div className="result-badge">
                    <img src={require("../Assets/Images/result-badge.png")} />
                  </div>
                  <div className="result-button">
                    <button className="result-point">15 Points</button>
                    
                  </div>
                </div>
              </div>
              <Link to='#'>
                <div className="history-wine-submit-btn more-courses-btn">
                  <button type="submit">More Courses</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
