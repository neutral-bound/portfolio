import React, { Component } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";

class ExperiencesItem extends Component {
  render() {
    const { place, location, title, timeline, description } = this.props;
    return (
      <div className="item">
        <div className="work-place">
          <h3 className="place">{place}</h3>
          <div className="location">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "5px" }}
            />
            <i>{location}</i>
          </div>
        </div>
        <div className="job-meta">
          <div className="title">{title}</div>
          <div className="time">
            <i>{timeline}</i>
          </div>
        </div>
        <div
          className="job-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    );
  }
}

export default ExperiencesItem;

ExperiencesItem.propTypes = {
  place: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  timeline: PropTypes.string,
  description: PropTypes.string
};
