import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import { fetchCurrentUser } from '../actions';

const App = ({
  route,
  isUserAuthenticated,
}) => (
  <Fragment>
    <Helmet>
      <meta
        property="og:type"
        content="react_ssr:app"
      />
      <meta
        property="og:image"
        content="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
      <meta
        property="og:url"
        content="http://www.react-ssr.com"
      />
      <meta
        property="og:title"
        content="React SSR app"
      />
      <title>React SSR app</title>
    </Helmet>
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
