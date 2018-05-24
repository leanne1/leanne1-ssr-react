import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ staticContext = {} }) => {
  staticContext.is404 = true; // eslint-disable-line no-param-reassign
  return <p>Oops, page not found</p>;
};

NotFound.propTypes = {
  staticContext: PropTypes.shape(),
};

export default NotFound;
