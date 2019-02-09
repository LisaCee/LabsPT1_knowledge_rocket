import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container, Row, Col, Button } from "reactstrap";

import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>Knowledge Rocket</h1>
          </Row>
          <Row>
            <Col>
              <div id="rocket">
                <div id="moon" />
                <div className="fa-stack">
                  <div className="jc-rocket-container">
                    <div className="jc-rocket">
                      <div className="jc-rocket-head" />
                      <div className="jc-rocket-window" />
                      <div className="jc-booster" />
                      <div className="jc-booster-flames" />
                    </div>
                  </div>
                </div>
              </div>
              {/* rocket close */}
            </Col>
            <Row>
              <Col>
                <div className="cta-container">
                  <div className="first-text">A tool for Teachers</div>
                  <div className="second-text">Promotes effective learning</div>
                  <div className="fourth-text">
                    Through virtual online quizzes
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
        <header>
          <Link to={"/login"}>
            <Button className="btn">Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button className="btn">Sign Up</Button>
          </Link>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
