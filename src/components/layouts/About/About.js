import React, { Component } from "react";
import { faAlignJustify } from "@fortawesome/fontawesome-free-solid";
import { HEAD, HEAD_ONE } from './constants';

class About extends Component {
  render() {
    return (
      <section id="about" className="about-section section">
        <h2 className="section-title">
          <span style={{ color: "#006696" }}>Abo</span>ut Me
        </h2>
        <div className="dialog">
          <h5 className="subtitle" style={{ fontWeight: "bold" }}>
            {HEAD}
          </h5>
          <h5
            className="subtitle"
            style={{
              lineHeight: "1.5em",
              textAlign: "justify",
              fontSize: "1.3em"
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: HEAD_ONE,
              }}
            />
          </h5>
        </div>
      </section>
    );
  }
}

export default About;
