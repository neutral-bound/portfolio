import React, { Component } from "react";

import SkillListFrontend from "./SkillsListFrontend";
import SkillsListBackend from "./SkillsListBackend";
import SkillsTags from "./SkillsTags";
import { FRONT_END_SKILL, BACK_END_SKILL, OTHER_SKILL } from './constants';

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills-section section">
        <h2 className="section-title text-center">
          <span style={{ color: "#006696" }}>Ski</span>lls
        </h2>
        <div className="top-skills">
          <h3 className="subtitle">{FRONT_END_SKILL}</h3>
          <SkillListFrontend />
        </div>
        <div className="top-skills">
          <h3 className="subtitle">{BACK_END_SKILL}</h3>
          <SkillsListBackend />
        </div>

        <div className="other-skills">
          <h3 className="subtitle">{OTHER_SKILL}</h3>
          <SkillsTags />
        </div>
      </section>
    );
  }
}

export default Skills;
