import React, { Component } from "react";

import SkillsItem from "./SkillsItem";
import { BACK_END_ITEMS } from './constants';

export default class SkillsListBackend extends Component {
  render() {
    const renderItems = BACK_END_ITEMS.map(({ name, rating, level, description }) => {
      return (
        <SkillsItem
          name={name}
          rating={rating}
          key={name}
          level={level}
          description={description}
        />
      );
    });

    return <div className="row">{renderItems}</div>;
  }
}
