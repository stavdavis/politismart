//Based on: https://github.com/hjmccain/maplyful
//IMPORTANT: Don't forget to import bootstraps' basic css file into the main index.html
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './nav-bar.css';

export default class MainNavBar extends React.Component {
  render() {
    let rightNavLinks = (
      <Nav>
        <NavItem className="navbar-app-link" href="/about">About</NavItem>
        <NavItem className="navbar-app-link" href="/dashboard">Dashboard</NavItem>
        <NavItem className="navbar-app-link" href="/stats">Stats & news</NavItem>
        <NavItem className="navbar-app-link" href="/register">Sign up</NavItem>
      </Nav>
    );
    return (
      <Navbar className="navbar-app" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a className="app-name" href="/">Politismart</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          {rightNavLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}