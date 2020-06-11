import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

import pic from "../../../image/profile2.png";
import ContactForm from "./ContactForm";
import SocialLinks from "../../head/SocialLinks";

import {
  HEAD ,
  HEAD_ONE,
  HEAD_TWO,
  HEAD_THREE,
} from './constants';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-section section">
        <h2 className="section-title">
          <span style={{ color: "#006696" }}>Con</span>tact
        </h2>
        <div className="intro">
          <img
            className="profile-image rounded-circle img-thumbnail"
            src={pic}
            alt=""
          />
          <div className="dialog">
            <p>
              <strong>{HEAD}</strong>
            </p>
            <ul className="list-unstyled service-list">
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: HEAD_ONE,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: HEAD_TWO,
                  }}
                />
              </li>
              <li>
              <div
                  dangerouslySetInnerHTML={{
                    __html: HEAD_THREE,
                  }}
                />
              </li>
            </ul>
          </div>
        </div>

        <ContactForm
          loading={this.props.contact.loading}
          success={this.props.contact.success}
        />
        <SocialLinks keyName="contact" />
      </section>
    );
  }
}

function mapStateToProps({ contact }) {
  return { contact };
}

export default connect(
  mapStateToProps,
  null
)(Contact);
