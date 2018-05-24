import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
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

  documentHead = () => (
    <Helmet>
      <title>{`${this.props.admins.length} admins loaded`}</title>
      <meta property="og:title" content="Admins App" />
    </Helmet>
  );

  renderAdmins = () => this.props.admins
    .map(admin => (<li key={admin.id}>{admin.name}</li>));

  render() {
    return (
      <Fragment>
        {this.documentHead()}
        <div>
          <h1>Protected list of admins:</h1>
          <ul>{this.renderAdmins()}</ul>
        </div>
      </Fragment>
    );
  }
}

// For SSR
export const loadData = ({ dispatch }) => dispatch(fetchAdmins());

const mapStateToProps = ({ admins }) => ({ admins });

export default connect(mapStateToProps, { fetchAdmins })(requireAuth(Admins));
