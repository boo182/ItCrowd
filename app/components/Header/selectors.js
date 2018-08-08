/**
 * The Header Selector
 */

import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

export const makeSelectLocation = () =>
  createSelector(selectRoute, route => route.get('location').toJS());
