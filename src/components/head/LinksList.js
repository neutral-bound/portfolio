import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LinksItem from "./LinksItem";
import { headLabel } from './constants';

class LinksList extends Component {
  render() {
    const renderItems = headLabel.map(item => {
      return <LinksItem key={item} section={item} />;
    });
    return (
      <ul id="page-nav" className="nav page-nav list-inline">
        {this.props.topButton === true && <LinksItem key="top" section="top" />}
        {renderItems}
      </ul>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default connect(
  mapStateToProps,
  {}
)(LinksList);

LinksList.propTypes = {
  topButton: PropTypes.bool
};
