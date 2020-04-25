/**
 *
 * AboutUs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAboutUs from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AboutUs() {
  useInjectReducer({ key: 'aboutUs', reducer });
  useInjectSaga({ key: 'aboutUs', saga });

  return (
    <div>
      <Helmet>
        <title>AboutUs</title>
        <meta name="description" content="Description of AboutUs" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AboutUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutUs: makeSelectAboutUs(),
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

export default compose(withConnect)(AboutUs);
