import React from 'react';
import PropTypes from 'prop-types';
// Externals
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Components
import { makeSelectLocation } from './selectors';
import NavBar from './NavBar';
import HeaderTitle from './HeaderTitle';
import HeaderMenu from './HeaderMenu';
import messages from './messages';

// =================================================

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <NavBar>
        <HeaderTitle>
          <FormattedMessage {...messages.title} />
        </HeaderTitle>
        <HeaderMenu location={location} />
      </NavBar>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
