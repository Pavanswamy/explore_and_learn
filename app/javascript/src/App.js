import React from "react";
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

import "./App.css";
import "./Bootstrap.min.css";
import Routes from "./Routes";
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <div className="App container">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Explore & Learn</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/users/sign_in">Login</Nav.Link>
            <Nav.Link href="/users/sign_up">Sign Up</Nav.Link>
          </Nav>
        </Navbar>

      <Routes />
    </div>
  )
}

export default App;


// link_to('Logout', destroy_user_session_path, method: :delete)
