import "./App.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import BannerImg from "./assets/images/banner.png";

function App() {
  return (
    <div className="main-bg">
      <div className="dashboard-body">
        <Container className="p-0">
          <Row>
            <Col xs={2}>
              <div className="bg-primary"></div>
            </Col>
            <Col xs={7} className="middle-section p-4">
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
                  <Col xs={6}>
                    <div className="latest-results">
                      <div className="results-heading d-flex justify-content-between p-2 mb-2">
                        <div className="title bold small">Latest Results</div>
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
                  <Col xs={6}>
                    <div className="learning-time-period">
                      <div className="results-heading d-flex justify-content-between p-2 mb-2">
                        <div className="title bold small">
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

                  {[1, 2, 3].map((course, index) => {
                    return (
                      <Col xs={4} className="bg-purple mt-3">
                        <div className="course-box d-flex align-items-center text-white">
                          <div className="class-box p-2 bg-overlay text-white">
                            C1
                          </div>
                          <div className="course-text ms-3">
                            <div className="smaller">Bussiness Spanish</div>
                            <div className="box-link">
                              <div className="text d-flex align-items-center justify-content-between">
                                <div className="me-2">Vocabulary</div>
                                <i
                                  class="fa fa-long-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Col>
            <Col xs={3}>
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
              <div className=" d-flex align-items-center ">
                <div className="class-box p-2 bg-overlay text-black">C1</div>
                <div className="course-text ms-3">
                  <div className="smaller">English</div>
                  <div className="box-link">
                    <div className="text d-flex align-items-center justify-content-between">
                      <div className="me-2 smaller-text">High Intermediate</div>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
