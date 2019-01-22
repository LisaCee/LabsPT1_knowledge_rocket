import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Form, Label, Input, FormGroup, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import SidebarNav from "./SidebarNav";
import { createRocket } from '../actions';

import "../css/SidebarNav.css";
import "../css/CreateRocket.css";

class CreateRocket extends Component {
  state = {
    rocketName: '',
    className:'',

    day2QuestionName: '',
    day2ReviewText: '',
    day2QuestionText: '',
    day2AnswerA: '',
    day2AnswerB: '',
    day2AnswerC: '',
    day2AnswerD: '',
    day2CorrectAnswer: '2dAA',

    week2QuestionName: '',
    week2ReviewText: '',
    week2QuestionText: '',
    week2AnswerA: '',
    week2AnswerB: '',
    week2AnswerC: '',
    week2AnswerD: '',
    week2CorrectAnswer: '2wAA',

    month2QuestionName: '',
    month2ReviewText: '',
    month2QuestionText: '',
    month2AnswerA: '',
    month2AnswerB: '',
    month2AnswerC: '',
    month2AnswerD: '',
    month2CorrectAnswer: '2mAA',
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleRadioSelect = e => {
    this.setState({ [e.target.name]: this.state[e.target.id] })
    console.log(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.createRocket(this.state)

  }

  render() {
    return (
      <Container className="container" >
        <Row>
          <Col sm="md" lg="3">
            <SidebarNav />
          </Col>
          <Col>
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    {/* <h3> all fields must be filled out</h3> */}
                    <Label for="rocketName">Rocket Name</Label>
                    <Input
                      type="text"
                      name="rocketName"
                      id="name"
                      maxLength="95"
                      placeholder="Enter Rocket Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Label for="className">Class Name</Label>
                    <Input
                      type="text"
                      name="className"
                      id="className"
                      maxLength="95"
                      placeholder="Enter Class Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2QuestionName">Two Days - Question Name</Label>
                    <Input
                      type="text"
                      name="day2QuestionName"
                      id="d2QuestionName"
                      maxLength="95"
                      placeholder="Enter Name for Question:"
                      value={this.state.day2QuestionName}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2ReviewText">Two Days - Review Text</Label>
                    <Input
                      type="text"
                      name="day2ReviewText"
                      id="d2ReviewText"
                      maxLength="505"
                      placeholder="Enter Day 2 Review Text: "
                      value={this.state.day2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2QuestionText">Two Days - Question</Label>
                    <Input
                      type="text"
                      name="day2QuestionText"
                      id="d2QuestionText"
                      maxLength="505"
                      placeholder="Enter Day 2 Question: "
                      value={this.state.day2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  {/* <h3> Select Radio button for correct answer, limit 1 per question</h3> */}
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="day2AnswerA"
                        name="day2CorrectAnswer"
                        value={this.state.day2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="day2AnswerA"
                          id="d2answerA"
                          maxLength="45"
                          value={this.state.day2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        id="day2AnswerB"
                        name="day2CorrectAnswer"
                        value={this.state.day2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="day2AnswerB"
                          id="d2answerB"
                          maxLength="45"
                          value={this.state.day2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2CorrectAnswer"
                        id="day2AnswerC"
                        value={this.state.day2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="day2AnswerC"
                          id="d2answerC"
                          maxLength="45"
                          value={this.state.day2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2CorrectAnswer"
                        id="day2AnswerD"
                        value={this.state.day2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                       <Input
                          type="text"
                          name="day2AnswerD"
                          id="d2answerD"
                          maxLength="45"
                          value={this.state.day2AnswerD}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                  <Label for="week2QuestionName">Two Weeks - Question Name</Label>
                  <Input
                    type="text"
                    name="week2QuestionName"
                    id="w2QuestionName"
                    maxLength="95"
                    placeholder="Enter Name for Question:"
                    value={this.state.week2QuestionName}
                    onChange={this.handleInputChange}
                  />
                  <Label for="week2ReviewText">Two Weeks - Review Text</Label>
                    <Input
                      type="text"
                      name="week2ReviewText"
                      id="w2ReviewText"
                      maxLength="505"
                      placeholder="Enter Week 2 Review Text: "
                      value={this.state.week2ReviewText}
                      onChange={this.handleInputChange}
                    />
                  <Label for="week2QuestionText">Two Weeks - Question</Label>
                    <Input
                      type="text"
                      name="week2QuestionText"
                      id="w2QuestionText"
                      maxLength="505"
                      placeholder="Enter Week 2 Question: "
                      value={this.state.week2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input 
                        type="radio"
                        id="week2AnswerA"
                        name="week2CorrectAnswer"
                        value={this.state.week2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="week2AnswerA"
                          id="w2answerA"
                          maxLength="45"
                          value={this.state.week2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2AnswerB"
                        name="week2CorrectAnswer"
                        value={this.state.week2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="week2AnswerB"
                          id="w2answerB"
                          maxLength="45"
                          value={this.state.week2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2AnswerC"
                        name="week2CorrectAnswer"
                        value={this.state.week2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="week2AnswerC"
                          id="w2answerC"
                          maxLength="45"
                          value={this.state.week2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2AnswerD"
                        name="week2CorrectAnswer"
                        value={this.state.week2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                        <Input
                          type="text"
                          name="week2AnswerD"
                          id="w2answerD"
                          maxLength="45"
                          value={this.state.week2AnswerD}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="month2QuestionName">Two Months - Question Name</Label>
                    <Input
                      type="text"
                      name="month2QuestionName"
                      id="m2QuestionName"
                      maxLength="95"
                      placeholder="Enter Name for Question:"
                      value={this.state.month2QuestionName}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2ReviewText">Two Months - Review Text</Label>
                    <Input
                      type="text"
                      name="month2ReviewText"
                      id="m2ReviewText"
                      maxLength="505"
                      placeholder="Enter Month 2 Review Text: "
                      value={this.state.month2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2QuestionText">Two Months - Question</Label>
                    <Input
                      type="text"
                      name="month2QuestionText"
                      id="m2QuestionText"
                      maxLength="505"
                      placeholder="Enter Month 2 Question: "
                      value={this.state.month2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="month2AnswerA"
                        name="month2CorrectAnswer"
                        value={this.state.month2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="month2AnswerA"
                          id="m2answerA"
                          maxLength="45"
                          value={this.state.month2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2AnswerB"
                        name="month2CorrectAnswer"
                        value={this.state.month2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="month2AnswerB"
                          id="m2answerB"
                          maxLength="45"
                          value={this.state.month2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2AnswerC"
                        name="month2CorrectAnswer"
                        value={this.state.month2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="month2AnswerC"
                          id="m2answerC"
                          maxLength="45"
                          value={this.state.month2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2AnswerD"
                        name="month2CorrectAnswer"
                        value={this.state.month2CorrectAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                        <Input
                          type="text"
                          name="month2AnswerD"
                          id="m2answerD"
                          maxLength="45"
                          value={this.state.month2AnswerD}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
                    <Button color="info" onClick={this.handleSubmit}>
                    Create Rocket!
                    </Button>
                  </FormGroup>
                </Form>
                <Link to={"/"}> Home </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      state: state,
  }
}

export default connect(mapStateToProps,{ createRocket } )(CreateRocket);




