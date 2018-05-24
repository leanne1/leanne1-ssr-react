import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const requireAuth = (WrappedComponent) => {
  const RequireAuth = (props) => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading</div>;
      default:
        return <WrappedComponent {...props} />;
    }
  };
  RequireAuth.propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape(),
    ]),
  };
  const mapStateToProps = ({ auth }) => ({ auth });
  return connect(mapStateToProps)(RequireAuth);
};
