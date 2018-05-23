import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../client/actions';

export class User extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()),
    fetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => this.props.users
    .map(user => (<li key={user.id}>{user.name}</li>));

  render() {
    return (
      <div>
        <div>List of users:</div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

// For SSR
export const loadData = ({ dispatch }) => dispatch(fetchUsers());

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(User);