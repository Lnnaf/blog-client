import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          {/* <!-- Begin Logo --> */}
          <Link className="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + "logo192.png"} alt="logo" />
          </Link>
          {/* <!-- End Logo --> */}
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            {/* <!-- Begin Menu --> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/stories">
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-me">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            {/* <!-- End Menu --> */}
            {/* <!-- Begin Search --> */}
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <span className="search-icon">
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </form>
            {/* End Search */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
