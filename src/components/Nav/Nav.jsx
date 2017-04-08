import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-button-container">
          <Link to="/two" className="navbar-button">Two</Link>
          <Link to="/" className="navbar-button">One</Link>
          <Link to="/three" className="navbar-button">Three</Link>
        </div>
      </div>
    );
  }
  }
