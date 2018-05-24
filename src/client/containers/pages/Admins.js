import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../../client/actions';
import { requireAuth } from '../../hocs/requireAuth';

class Admins extends Component {
  static propTypes = {
    admins: PropTypes.arrayOf(PropTypes.shape()),
    fetchAdmins: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins = () => this.props.admins
    .map(admin => (<li key={admin.id}>{admin.name}</li>));

  render() {
    return (
      <div>
        <h1>Protected list of admins:</h1>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

// For SSR
export const loadData = ({ dispatch }) => dispatch(fetchAdmins());

const mapStateToProps = ({ admins }) => ({ admins });

export default connect(mapStateToProps, { fetchAdmins })(requireAuth(Admins));
