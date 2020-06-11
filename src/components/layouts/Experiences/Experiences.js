import React, { Component } from "react";

import ExperiencesList from "./ExperiencesList";

class Experiences extends Component {
  render() {
    return (
      <section
        id="experience & education"
        className="experiences-section section"
      >
        <h2 className="section-title">
          <span style={{ color: "#006696" }}>Exp</span>erience &{" "}
          <span style={{ color: "#006696" }}>Edu</span>cation
        </h2>
        <div className="timeline">
          <ExperiencesList />
        </div>
      </section>
    );
  }
}

export default Experiences;
