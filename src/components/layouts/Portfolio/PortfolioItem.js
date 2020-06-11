import React, { Component } from "react";
import PropTypes from "prop-types";

class PortfolioItem extends Component {
  render() {
    const {
      name,
      context,
      githubUrl,
      githubLink,
      stack,
      image,
      projectUrl,
      projectLink,
      description
    } = this.props;

    return (
      <div className="item col-lg-3 col-6">
        <div className="item-inner">
          <div className="overlay">
            <div className="action text-center">
              <div className="btn-grp" style={{ top: "35%", left: "19%" }}>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn mb-1"
                  style={{ justifyContent: "center", marginRight: "40px" }}
                >
                  {githubLink}
                </a>
                <br />
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn "
                  style={{ marginRight: "40px" }}
                >
                  {projectLink}
                </a>
              </div>
            </div>
            <figure className="figure">
              <img className="img-fluid" src={image} alt="" />
            </figure>
            <div className="content text-left">
              <h3 className="sub-title">{name}</h3>
              <div className="meta">{context}</div>
              <div className="portfolio-body mt-3 mb-1">
                {description}
                {description ? <br /> : ""}
                {stack.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;

PortfolioItem.propTypes = {
  name: PropTypes.string,
  context: PropTypes.string,
  githubUrl: PropTypes.string,
  githubLink: PropTypes.string,
  projectUrl: PropTypes.string,
  stack: PropTypes.array,
  image: PropTypes.string,
  description: PropTypes.string
};
