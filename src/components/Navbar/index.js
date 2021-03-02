import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PageHeader from "../PageHeader/PageHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavigationBar() {

  return (  
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark" style=
      {{justifyContent:"space-between", width:"100%"}} className="extend">
        <Col style={{marginLeft:"5px"}}>
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/reactPortfolio">DW</Link>
        </Navbar.Brand>
        </Col>
        <Col>
        <Navbar.Brand>
          <PageHeader />
        </Navbar.Brand>
        </Col>
        <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-10">
              <Nav.Link href="#contact"><Link to="/reactPortfolio/contact" className={window.location.pathname === "/reactPortfolio/contact" ? "nav-link primary" : "nav-link"}>Contact</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/reactPortfolio/home" className={window.location.pathname === "/reactPortfolio" || window.location.pathname === "/reactPortfolio/home" ? "nav-link primary": "nav-link"}>Home</Link></Nav.Link>
              <Nav.Link href="#portfolio"> <Link to="/reactPortfolio/portfolio" className={window.location.pathname === "/reactPortfolio/portfolio" ? "nav-link primary" : "nav-link"}>Portfolio</Link></Nav.Link>
              <Nav.Link>
              <NavDropdown title="External Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/wyliedavid1984" rel="noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"> </i>Github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/david-wylie-1826b41b8/" rel="noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"> </i>LinkedIn
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Col>
      </Navbar>
    </Row>
  );
}

export default NavigationBar;
