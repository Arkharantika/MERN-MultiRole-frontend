import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../components/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      {/* <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="40" height="100" alt="logo" />
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* BATASNYA */}

      <nav class="navbar is-primary" style={{ height: "80px" }}>
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <h1 class="title is-4">My Admin</h1>
            </a>
            <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <a class="navbar-item" href="/dashboard">
                Home
              </a>
              <a class="navbar-item" href="#">
                About
              </a>
              <a class="navbar-item" href="#">
                Contact
              </a>
            </div>
            <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
