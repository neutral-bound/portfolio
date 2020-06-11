import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCoffee,
  faHeart
} from '@fortawesome/fontawesome-free-solid/index';

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <small className="copyright">
            <span style={{ fontWeight: '500' }}>
              <FontAwesomeIcon
                icon={faCode}
                style={{ fontWeight: '100', marginRight: '5px' }}
              />
              +
              <FontAwesomeIcon
                icon={faCoffee}
                style={{
                  fontWeight: '100',
                  marginLeft: '5px',
                  marginRight: '5px'
                }}
              />
              =
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontWeight: '100',
                  marginLeft: '5px',
                  marginRight: '5px'
                }}
              />
            </span>
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
