import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { Container, Row, Button } from "reactstrap";

import "../css/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to={"/login"}><Button className="btn-splash">Login</Button></Link>
        <Link to={"/register"}><Button className="btn-splash">Sign Up</Button></Link>
      </header>
        <Container>
          <Row>
            <h1>Knowledge Rocket</h1>
          </Row>
          <Row>
            <div id="moon"></div>
            <div className="fa-stack">
              <div className="jc-rocket-container">
                  <div className="jc-rocket">
                    <div className="jc-rocket-head">
                    </div>
                    <div className="jc-rocket-window">
                    </div>
                    <div className="jc-booster">
                    </div>
                    <div className="jc-booster-flames">
                    </div>
                  </div>
                </div>
            </div>
            {/* rocket close */}
              <div className="cta-container">
                <div className="first-text">A tool for Teachers</div>
                <div className="second-text">Promotes effective learning</div>
                <div className="fourth-text">Through virtual online quizzes</div>
              </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);