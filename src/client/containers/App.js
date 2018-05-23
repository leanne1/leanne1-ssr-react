import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import { fetchCurrentUser } from '../actions';

const App = ({
  route,
  isUserAuthenticated,
}) => (
  <Fragment>
    <Header isUserAuthenticated={isUserAuthenticated} />
    {renderRoutes(route.routes)}
  </Fragment>
);

App.propTypes = {
  route: PropTypes.shape(),
  isUserAuthenticated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape(),
  ]),
};

const mapStateToProps = ({ auth }) => ({
  isUserAuthenticated: auth,
});

export const loadData = ({ dispatch }) => dispatch(fetchCurrentUser());

export default connect(mapStateToProps, { fetchCurrentUser })(App);
