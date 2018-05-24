import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../client/actions';

class Users extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()),
    fetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  documentHead = () => (
    <Helmet>
      <title>{`${this.props.users.length} users loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>
  );

  renderUsers = () => this.props.users
    .map(user => (<li key={user.id}>{user.name}</li>));

  render() {
    return (
      <Fragment>
        {this.documentHead()}
        <div>
          <h1>List of users:</h1>
          <ul>{this.renderUsers()}</ul>
        </div>
      </Fragment>
    );
  }
}

// For SSR
export const loadData = ({ dispatch }) => dispatch(fetchUsers());

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, { fetchUsers })(Users);
