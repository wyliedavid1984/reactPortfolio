import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        DW
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <section className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul" style={{marginRight:"15px"}}>
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active": "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={"#"} aria-haspopup="true" aria-expanded="false">External Links</a> 
              <section className="dropdown-menu drop">
                <a className="dropdown-item" href={"https://github.com/wyliedavid1984"} rel="noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"> 
                  </i> GitHub</a>
                <a className="dropdown-item" href={"https://www.linkedin.com/in/david-wylie-1826b41b8/"} rel="noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"> 
                  </i> LinkedIn</a>
                <a className="dropdown-item" href={"https://stackoverflow.com/users/14358043/david-wylie"} rel="noreferrer" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"> </i> Stack Overflow</a> 
              </section>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
