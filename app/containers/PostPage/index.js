/**
 *
 * PostPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class PostPage extends React.PureComponent {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
        <div>this is a test</div>
      </div>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPostPage(),
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
