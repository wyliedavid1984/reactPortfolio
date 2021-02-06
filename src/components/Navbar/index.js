import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigationbar() {
  return (   
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <Link className="navbar-brand" to="/">DW</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-10">
            <NavDropdown title="External Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/wyliedavid1984" rel="noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"> </i>Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/david-wylie-1826b41b8/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"> </i>LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://stackoverflow.com/users/14358043/david-wylie" rel="noreferrer" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"> </i> StackOverflow</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home"><Link to="/home" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link primary": "nav-link"}>Home</Link></Nav.Link>
            <Nav.Link href="#contact"><Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link primary" : "nav-link"}>Contact</Link></Nav.Link>
            <Nav.Link href="#portfolio"> <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link primary" : "nav-link"}>Portfolio</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>  
  );
}

export default Navigationbar;
