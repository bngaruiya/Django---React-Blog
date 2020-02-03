import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class Toolbar extends Component {
  render() {
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
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
