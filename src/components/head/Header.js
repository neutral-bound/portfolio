import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUrl, checkTopButton } from "../../actions";
import { Link, scroller } from "react-scroll";
import Sticky from "react-stickynode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMapMarkerAlt,
  faDownload
} from "@fortawesome/fontawesome-free-solid";

import SocialLinks from "./SocialLinks";
import LinksList from "./LinksList";
import "../../css/styles.css";
import profile from "../../image/profile2.png";
import {
  CONTACT_ME,
  DOWNLOAD_RESUME,
  NAME,
  HEAD,
  SUB_HEAD,
  SITE,
} from './constants';

class Header extends Component {
  componentDidMount = () => {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;

    switch (pathname) {
      case "/about":
        return this.changeHeadUrlTo("about");
      case "/experience":
        return this.changeHeadUrlTo("experience-education");
      case "/skills":
        return this.changeHeadUrlTo("skills");
      case "/projects":
        return this.changeHeadUrlTo("projects");
      case "/contact":
        return this.changeHeadUrlTo("contact");
      default:
        return this.changeHeadUrlTo("");
    }
  };

  changeHeadUrlTo = url => {
    scroller.scrollTo(url, {
      duration: 180,
      smooth: true,
      offset: -80
    });
  };

  handleSetActiveHead = to => {
    this.props.setUrl(to);
  };

  handleStickyChange = ({ status }) => {
    const { checkTopButton } = this.props;
    if (status === Sticky.STATUS_FIXED) {
      checkTopButton(true);
    } else {
      checkTopButton(false);
    }
  };

  render() {
    return (
      <header id="top" className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <Link
              className="nav-link btn d-none d-md-inline-block"
              to="contact"
              spy={false}
              smooth={true}
              offset={-80}
              duration={180}
              onSetActive={this.handleSetActiveHead}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "5px" }}
              />{" "}
              {CONTACT_ME}
            </Link>
            <Link
              className="nav-link btn d-none d-md-inline-block"
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ marginRight: "5px" }}
              />{" "}
              {DOWNLOAD_RESUME}
            </Link>
          </div>
          <SocialLinks keyName="header" />
        </div>

        <div className="intro">
          <div className="container text-center">
            <img
              className="profile-image img-thumbnail rounded-circle"
              src={profile}
              alt=""
            />
            <h1 className="name">{NAME}</h1>
            <div className="title">{HEAD}</div>
            <div className="profile">
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginRight: "10px" }}
                />
                {SUB_HEAD}
              </p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="container text-center">
            <ul className="list-inline">
            </ul>
          </div>
        </div>
        <Sticky
          enabled={true}
          innerZ={180}
          onStateChange={this.handleStickyChange}
        >
          <div className="page-nav-space-holder d-none d-md-block">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
              <div className="container">
                <LinksList />
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default withRouter(
  connect(
    mapStateToProps,
    { setUrl, checkTopButton }
  )(Header)
);

Header.propTypes = {
  history: PropTypes.object,
  setUrl: PropTypes.func,
  checkTopButton: PropTypes.func
};
