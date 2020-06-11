import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { sendEmail } from "../../../actions";
import spinner from "../../../image/spinner.gif";
import {
  DEFAULT_VALUES,
  SUCCESS_MSG,
  SUCCESS_BACK,
  ERROR,
} from './constants';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: DEFAULT_VALUES,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const status = name + "Status";
    let statusState;
    if (name === "email" && value.length < 6) {
      statusState = false;
    } else if (name === "message" && value.length < 12) {
      statusState = false;
    } else {
      statusState = true;
    }
    this.setState(prevState => {
      prevState.input[name] = value;
      return { input: prevState.input, [status]: statusState };
    });
  };

  handleSubmit = () => {
    const { email, message } = this.state.input;
    if (email.length < 12 || message.length < 12) {
      return;
    }
    this.props.sendEmail(email, message);
  };

  renderForm = () => {
    const { loading, success } = this.props;
    const { input, emailStatus, messageStatus } = this.state;
    const { email, message } = input;

    if (loading === "loading") {
      return (
        <div className="text-center">
          <img src={spinner} alt="Spinner" />
        </div>
      );
    } else if (loading === "ended") {
      if (success === true) {
        return (
          <Alert color="success" className="text-center">
            <strong>{SUCCESS_MSG}</strong>
            <br /> {SUCCESS_BACK}
          </Alert>
        );
      } else {
        return (
          <Alert color="danger" className="text-center">
            {ERROR}
          </Alert>
        );
      }
    } else {
      return (
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={email}
                onChange={this.handleChange}
                valid={emailStatus}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Message
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="message"
                id="message"
                className="not-resizable"
                rows="8"
                placeholder="Your message"
                value={message}
                onChange={this.handleChange}
                valid={messageStatus}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      );
    }
  };

  render() {
    return <span>{this.renderForm()}</span>;
  }
}

export default connect(
  null,
  { sendEmail }
)(ContactForm);
