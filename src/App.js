import "./App.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import BannerImg from "./assets/images/banner.png";
import LogoImg from "./assets/images/logo.png";
import AdImg from "./assets/images/ad.png";
import ProfileImg from "./assets/images/profile.png";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Dashboard");
  return (
    <div className="main-bg">
      <div className="dashboard-body">
        <Container className="p-0">
          <Row>
            <Col sm={2} className="p-4 pe-0">
              <div className="logo my-2">
                <img src={LogoImg} alt="logo" />
              </div>
              <div className="routes">
                {[
                  "Dashboard",
                  "Classes",
                  "Resources",
                  "Learning Plan",
                  "Chat",
                  "Setting",
                ].map((route, index) => {
                  return (
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="d-flex align-items-center m-4 my-3 me-0"
                        key={`routes-${index}`}
                      >
                        <div className="icon me-2">
                          {state === route ? (
                            <i
                              class="fa fa-folder-o text-purple"
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <i
                              class="fa fa-folder-o text-secondary"
                              aria-hidden="true"
                            ></i>
                          )}
                        </div>
                        {state === route ? (
                          <div className="text smaller bold">{route}</div>
                        ) : (
                          <div className="text-secondary smaller">{route}</div>
                        )}
                      </div>
                      {state === route ? <div className="accent"></div> : null}
                    </div>
                  );
                })}
              </div>
              <div className="ad flex-center">
                <img src={AdImg} alt="ad" />
              </div>
              <div className="flex-center my-2">
                <button className="upgrade btn px-4">Upgrade</button>
              </div>
            </Col>
            <Col sm={7} className="middle-section p-4">
              <div className="navbar-strip my-3 d-flex justify-content-between">
                <div className="title">Dashboard</div>
                <div className="rhs d-flex align-items-center">
                  <div className="date text-secondary smaller me-3">
                    20 Sep 2019, Friday
                  </div>
                  <div className="search-bar flex-center">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="banner flex-center my-3">
                <img src={BannerImg} alt="banner" style={{ width: "100%" }} />
              </div>
              <Container className="p-0">
                <Row>
                  <Col sm={6}>
                    <div className="latest-results pt-3">
                      <div className="results-heading d-flex align-items-center justify-content-between p-2 mb-2">
                        <div className="title bold smaller">Latest Results</div>
                        <div className="more text-secondary smaller d-flex align-items-center">
                          <div className="text me-2">More</div>
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      {[1, 2, 3, 4, 5].map((result, index) => {
                        return (
                          <div
                            className="latest-result"
                            key={`latest-result-${index}`}
                          >
                            <div className="d-flex smaller justify-content-between">
                              <div className="lhs bold">
                                Unit 5 -
                                <span className="text-secondary">
                                  Technology
                                </span>
                              </div>
                              <div className="flex-center">
                                <ProgressBar
                                  now={60}
                                  className="progress-bar-custom"
                                />
                                <div className="percentage text-orange">
                                  25%
                                </div>
                              </div>
                            </div>
                            <div className="custom-separator"></div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="learning-time-period">
                      <div className="results-heading d-flex align-items-center justify-content-between p-2 mb-2">
                        <div className="title bold smaller">
                          Time spent on learning
                        </div>
                        <div className="more text-secondary smaller d-flex align-items-center">
                          <div className="text me-2">Last Week</div>
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="rot-90">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                          (eachDay, index) => {
                            return (
                              <div className="d-flex align-items-center justify-content-end">
                                <ProgressBar className="time-progress-bars">
                                  <ProgressBar
                                    variant="success"
                                    now={35}
                                    key={1}
                                  />
                                  <ProgressBar
                                    className="vocabulary"
                                    now={20}
                                    key={2}
                                  />
                                  <ProgressBar
                                    className="listening"
                                    now={10}
                                    key={3}
                                  />
                                </ProgressBar>
                                <div>
                                  <div className="day text-secondary smaller each-day flex-center">
                                    {eachDay}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="legend">
                        <div className="d-flex smallest text-secondary justify-content-between">
                          <div className="flex-center">
                            <div className="me-1 vocab rounded-circle"></div>
                            <div className="text">Vocabulary</div>
                          </div>
                          <div className="flex-center">
                            <div className="me-1 gramm rounded-circle"></div>
                            <div className="text">Grammar</div>
                          </div>
                          <div className="flex-center">
                            <div className="me-1 listen rounded-circle"></div>
                            <div className="text">Listening</div>
                          </div>
                          <div className="flex-center">
                            <div className="me-1 write rounded-circle"></div>
                            <div className="text">Writing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col sm={4} className="bg-purple mt-3">
                        <div className="course-box primary d-flex align-items-center text-white">
                          <div className="class-box p-2 bg-overlay text-white">
                            B2
                          </div>
                          <div className="course-text ms-3">
                            <div className="smallest mb-1">Bussiness English</div>
                            <div className="box-link">
                              <div className="text d-flex align-items-center justify-content-between">
                                <div className="me-2 smaller bold">Grammar</div>
                                <i
                                  class="fa fa-long-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col sm={4} className="bg-purple mt-3">
                        <div className="course-box secondary d-flex align-items-center text-white">
                          <div className="class-box p-2 bg-overlay text-white">
                            B2
                          </div>
                          <div className="course-text ms-3">
                            <div className="smallest mb-1">Common English</div>
                            <div className="box-link">
                              <div className="text d-flex align-items-center justify-content-between">
                                <div className="me-2 smaller bold">Phrasal verbs</div>
                                <i
                                  class="fa fa-long-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col sm={4} className="bg-purple mt-3">
                        <div className="course-box d-flex align-items-center text-white">
                          <div className="class-box p-2 bg-overlay text-white">
                            C1
                          </div>
                          <div className="course-text ms-3">
                            <div className="smallest mb-1">Bussiness Spanish</div>
                            <div className="box-link">
                              <div className="text d-flex align-items-center justify-content-between">
                                <div className="me-2 smaller bold">Vocabulary</div>
                                <i
                                  class="fa fa-long-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                </Row>
              </Container>
            </Col>
            <Col sm={3} className="p-4 pt-0">
              <div className="my-4 p-4">
                <div className="navbar-strip d-flex justify-content-between">
                  <div className="title">Logout</div>
                  <div className="rhs d-flex align-items-center">
                    <div className="text-secondary flex-center">
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile flex-center flex-column my-4">
                <div className="avatar">
                  <img src={ProfileImg} alt="profile" />
                  <div className="cta">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="name bold mt-3">Anna Morrison</div>
                <div className="designation text-secondary smaller">
                  Student
                </div>
              </div>
              <div className=" d-flex align-items-center ">
                <div className="class-box p-2 bg-25 text-black">B2</div>
                <div className="course-text ms-3">
                  <div className="smaller mb-1">English</div>
                  <div className="box-link">
                    <div className="text d-flex align-items-center justify-content-between">
                      <div className="me-2 smaller-text text-secondary">
                        High Intermediate
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-center">
                  <ProgressBar
                    now={60}
                    className="progress-bar-custom-smaller"
                  />
                </div>
              </div>
              <div className="my-3"></div>
              <div className=" d-flex align-items-center ">
                <div className="class-box p-2 bg-25 text-black">B2</div>
                <div className="course-text ms-3">
                  <div className="smaller mb-1">English</div>
                  <div className="box-link">
                    <div className="text d-flex align-items-center justify-content-between">
                      <div className="me-2 smaller-text text-secondary">
                        High Intermediate
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-center">
                  <ProgressBar
                    now={90}
                    className="progress-bar-custom-smaller"
                  />
                </div>
              </div>
              <div className="reminders mt-5">
                <div className="heading-strip mt-3">
                  <div className="results-heading d-flex align-items-center justify-content-between p-2 mb-2">
                    <div className="title bold smaller">Reminders</div>
                    <div className="more text-secondary d-flex align-items-center">
                      <i class="fa fa-bell-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                {[1, 2, 3].map((reminder, index) => {
                  return (
                    <div className=" d-flex align-items-center mb-3">
                      <div className="class-box p-2 bg-25 text-black">
                        <i
                          class="fa fa-envelope-o fs-6 text-purple"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="course-text ms-3">
                        <div className="smaller mb-1">Eng-Vocabulary test</div>
                        <div className="box-link">
                          <div className="text d-flex align-items-center justify-content-between">
                            <div className="me-2 text-secondary roboto smallest">
                              24 Sep 2019 Friday
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
