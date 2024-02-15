import React from "react";
import { Link } from "react-router-dom";

export const MenuBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/greet">
                    Greet
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/person">
                    Person
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/personllist">
                    Person List
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/status">
                    Status
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/heading">
                    Heading
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/oscar">
                    Oscar
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/button">
                    Button
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/input">
                    Input
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/container">
                    Container
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logInOut">
                    Log In/Out
                </Link>
            </li>
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li> */}
            <li className="nav-item">
                <Link className="nav-link" to="/user">
                    User
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/counter">
                    Counter
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
