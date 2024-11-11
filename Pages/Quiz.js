import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <Layout>
      <div className="settings-page">
        <Container>
          <Row>
            <Col className="quiz-heading">
              <h2>Quiz</h2>
              <Card className="quiz-card">
                <CardBody className="quiz-card-body">
                  <h2> Question 5</h2>
                  <p className="quiz-card-question">
                    What does Merlot Stand for?
                  </p>
                </CardBody>
              </Card>
              <Card className="quiz-option-card">
                <div>
                  <div className="quiz-option">
                    <Card.Img
                      variant="top"
                      src={require("../Assets/Images/quiz-option.png")}
                      className="quiz-option-img"
                    />
                  </div>
                  <CardBody className="quiz-option-card-body">
                    <h2> Grapes</h2>
                  </CardBody>
                </div>
              </Card>
              <Card className="quiz-option-card">
                <div>
                  <div className="quiz-option">
                    {/* <Card.Img
                      variant="top"
                      src={require("../Assets/Images/quiz-option.png")}
                      className="quiz-option-img"
                    /> */}
                  </div>
                  <CardBody className="quiz-option-card-body">
                    <h2> Wine company </h2>
                  </CardBody>
                </div>
              </Card>
              <Card className="quiz-option-card">
                <div>
                  <div className="quiz-option">
                    {/* <Card.Img
                      variant="top"
                      src={require("../Assets/Images/quiz-option.png")}
                      className="quiz-option-img"
                    /> */}
                  </div>
                  <CardBody className="quiz-option-card-body">
                    <h2> Scotch</h2>
                  </CardBody>
                </div>
              </Card>
              <div className="previous-next">
                <div className="previous">Previous</div>
                <div className="page previous">Page 1 of 2</div>
                <div className="previous">Next</div>
              </div>
              <Link to='/results'>
                <div className="history-wine-submit-btn overview-btn">
                  <button type="submit">Submit</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
