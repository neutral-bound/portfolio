import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/fontawesome-free-solid';

import { setUrl } from '../../actions';

class LinksItem extends Component {
  handleActive = () => {
    this.props.setUrl(this.props.section);
  };

  renderLinkTitle = () => {
    const { section } = this.props;
    if (section === 'top') {
      return (
        <span>
          <FontAwesomeIcon icon={faAngleUp} style={{ marginRight: '5px' }} />
          Back to top
        </span>
      );
    } else {
      return section;
    }
  };

  render() {
    return (
      <li className="nav-item">
        <Link
          activeClass="active"
          className="nav-link"
          to={this.props.section}
          spy={true}
          smooth={true}
          offset={-80}
          duration={180}
          onSetActive={this.handleActive}
        >
          {this.renderLinkTitle()}
        </Link>
      </li>
    );
  }
}

export default connect(
  null,
  { setUrl }
)(LinksItem);

LinksItem.propTypes = {
  section: PropTypes.string,
  setUrl: PropTypes.func
};
