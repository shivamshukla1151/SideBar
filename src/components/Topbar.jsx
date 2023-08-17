import React from "react";
import logo from "../resources/logo2.png";
import { NavLink } from "react-router-dom";
const Topbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center position-absolute shadow-sm p-3 mb-5 vw-100"
      style={{ background: "#F8F9FA" }}
    >
      <div className="nav-logo mx-5">
        <img src={logo} className="w-25 mx-5" alt="logo" />
      </div>
      <div className="mx-5">
        <ul className="d-flex mx-5">
          <NavLink to="link1">
            <li
              className="text-decoration-none mx-3 list-unstyled"
              style={{ cursor: "pointer" }}
            >
              Link 1
            </li>
          </NavLink>
          <NavLink to="link2">
            <li className="text-decoration-none mx-3 list-unstyled">Link 2</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
