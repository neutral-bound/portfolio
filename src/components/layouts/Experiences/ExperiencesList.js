import React, { Component } from "react";
import ExperiencesItem from "./ExperiencesItem";

import { works } from './constants';

class ExperiencesList extends Component {
  render() {
    const renderItems = works.map(
      ({ place, location, title, timeline, description }) => {
        return (
          <ExperiencesItem
            place={place}
            location={location}
            key={place}
            title={title}
            timeline={timeline}
            description={description}
          />
        );
      }
    );
    return <div>{renderItems}</div>;
  }
}

export default ExperiencesList;
