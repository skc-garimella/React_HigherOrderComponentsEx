
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';
import { authenticate } from '../actions/index';


class Header extends Component {

  authButton() {
    console.log(`auth : ${this.props.authenticated}`);
    if(this.props.authenticated) {
      return (
        <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
      );
    }
    return (
        <button onClick={() => this.props.authenticate(true)}>Sign In</button>
      );
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" >Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps( state ) {
  return { authenticated: state.authenticated };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { authenticate }, dispatch );
}


export default connect( mapStateToProps, mapDispatchToProps)(Header);
