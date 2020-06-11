import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem";
import { items } from './constants';

class PortfolioList extends Component {
  render() {
    const renderItems = items.map(
      ({
        name,
        context,
        githubUrl,
        githubLink,
        projectLink,
        stack,
        image,
        projectUrl,
        description
      }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            githubLink={githubLink}
            projectLink={projectLink}
            projectUrl={projectUrl}
            stack={stack}
            image={image}
            description={description}
            key={name}
          />
        );
      }
    );
    return <div className="items-wrapper row">{renderItems}</div>;
  }
}

export default PortfolioList;
