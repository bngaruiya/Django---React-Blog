import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { logout } from '../../actions/auth';

class Toolbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul>
        <li>
          <a href='/'>Articles</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <span className='navbar-text mr-3'>
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li>
          <button
            onClick={this.props.logout}
            className='nav-link btn btn-info btn-sm text-light'
          >
            Logout
          </button>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul>
        <li>
          <a href='/'>Articles</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    );
    return (
      <header className='toolbar'>
        <nav className='toolbar_navigation'>
          <div className='toolbar_toggle_button'>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className='toolbar_logo'>
            <a href='/'>THE LOGO</a>
          </div>
          <div className='logo_navitems_spacer' />
          <div className='toolbar_navigation_items'>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Toolbar);
