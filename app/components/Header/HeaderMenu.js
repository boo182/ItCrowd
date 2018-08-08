import React from 'react';
import PropTypes from 'prop-types';
// Externals
import { Link } from 'react-router-dom';
// Components
import MenuButton from './MenuButton';
import MenuWrapper from './MenuWrapper';

// ================================================

const HeaderMenu = ({ location }) => (
  <MenuWrapper>
    <Link to="/">
      <MenuButton>{location.pathname}</MenuButton>
    </Link>
    <MenuButton>Button2</MenuButton>
  </MenuWrapper>
);

HeaderMenu.propTypes = {
  location: PropTypes.object,
};

export default HeaderMenu;
