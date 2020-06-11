import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialLinks } from './constants';

class SocialLinks extends Component {
  render() {
    const renderItems = socialLinks.map(item => {
      return (
        <li className="list-inline-item" key={this.props.keyName + item.key}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      );
    });
    return <ul className="social list-inline">{renderItems}</ul>;
  }
}
export default SocialLinks;

SocialLinks.propTypes = {
  keyName: PropTypes.string
};
