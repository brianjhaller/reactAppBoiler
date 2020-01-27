import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let name = this.props.userInfo
    return (
      <div>
        <h2>Welcome back, {name}!</h2>
      </div>
    );
  }
}

export default Header;