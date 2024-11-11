import { Col, Container, Row } from "react-bootstrap";
import Layout from "../Components/Layout/Layout";

export default function ReferFriend() {
  return (
    <Layout>
      <div className="settings-page refer-page">
        <Container>
          <Row>
            <Col>
              <div>
                <h2 className="transactions-heading refer-heading">
                  Refer a Friend
                </h2>
              </div>
              <div>
                <h3 className="invite-friend">Invite a friend, Earn $20!</h3>
              </div>
              <div className="invite-para">
                <p className="invite-para">
                  For every new referral who makes their first purchase, you'll
                  receive a $20 credit. Share the love and start earning rewards
                  today!
                </p>
              </div>
              <div>
                <div class="input-group copy-link-input mb-3">
                  <input
                    type="text"
                    class="form-control support-chat-inpt "
                    placeholder="https://www.Fiftyshadesofgrapes/refera..."
                    aria-label=""
                    aria-describedby="button-addon2"
                  />
                </div>
              </div>
              <div className="copy-share-link">
                <div className="copy-link">
                  <img src={require("../Assets/Images/copy.png")} alt="copy" />
                  <p>Copy Link</p>
                </div>
                <div className="copy-link">
                  <img src={require("../Assets/Images/share.png")} alt="copy" />
                  <p>Share Link</p>
                </div>
              </div>
              {/* <div>
                <i>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"
                    stroke="#fff"
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
                        d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z"
                        fill="#fff"
                      ></path>{" "}
                    </g>
                  </svg>
                </i>
                <i>
                  <svg
                    fill="#ffffff"
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title></title>{" "}
                      <g data-name="Layer 2" id="Layer_2">
                        {" "}
                        <path d="M29.28,12.47,18.6,3.62a2,2,0,0,0-2.17-.27,2,2,0,0,0-1.15,1.81v2A19.82,19.82,0,0,0,2,25.94a19.18,19.18,0,0,0,.25,3.11,1,1,0,0,0,.82.83h.17a1,1,0,0,0,.88-.53,17.29,17.29,0,0,1,11.16-8.68v2.16a2,2,0,0,0,1.15,1.81,2.09,2.09,0,0,0,.88.2,2,2,0,0,0,1.29-.48l4.86-4,.09-.07,5.73-4.75a2,2,0,0,0,0-3.06Zm-6.93,6.2-.09.07-5,4.1V19.42a.19.19,0,0,0,0-.08s0-.06,0-.09,0-.07-.05-.11a1.34,1.34,0,0,0-.07-.18A.57.57,0,0,0,17,18.8a.49.49,0,0,0-.12-.13,1,1,0,0,0-.17-.12l-.15-.07-.22,0-.1,0-.08,0h-.09A19.19,19.19,0,0,0,4,25.85a17.81,17.81,0,0,1,12.56-17l.05,0a1.11,1.11,0,0,0,.19-.09A1.43,1.43,0,0,0,17,8.63l.12-.14a.54.54,0,0,0,.1-.16.85.85,0,0,0,.06-.17,1.3,1.3,0,0,0,0-.21.43.43,0,0,0,0,0l0-2.74L28,14Z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </i>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
