import React, { Component } from "react";

import { SKILLS } from './constants';

export default class SkillsTags extends Component {
  render() {
    const renderTags = SKILLS.map(skill => {
      return (
        <span className="skill-tag" key={skill}>
          {skill}
        </span>
      );
    });

    return <div className="misc-skills">{renderTags}</div>;
  }
}
