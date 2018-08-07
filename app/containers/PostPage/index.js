/**
 *
 * PostPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PostPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>PostPage</title>
          <meta name="description" content="Description of PostPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  postpage: makeSelectPostPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'post', reducer });
const withSaga = injectSaga({ key: 'post', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostPage);
