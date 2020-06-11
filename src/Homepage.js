import React, { Component } from "react";
import { Container } from "reactstrap";

import About from "./components/layouts/About/About";
import Experiences from "./components/layouts/Experiences/Experiences";
import Skills from "./components/layouts/Skills/Skills";
import Portfolio from "./components/layouts/Portfolio/Portfolio";
import Contact from "./components/layouts/Contact/Contact";

export default class Homepage extends Component {
  render() {
    return (
      <Container className="wrapper">
        <About />
        <Experiences />
        <Skills />
        <Portfolio />
        <Contact />
      </Container>
    );
  }
}
