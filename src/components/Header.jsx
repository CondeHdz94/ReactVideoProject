import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import {logoutRequest} from "../actions"

const Header = ({ user, logoutRequest }) => {
  const hasUser = Object.keys(user).length > 0;
  const handleClose = () => {
    logoutRequest({});
   }

   const headerClass =
  //  useLocation().pathname === "/register" ||
   useLocation().pathname === "/login"
     ? "greenHeader"
     : "";
  return (
    <header className={`header ${headerClass}`}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt="" />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>

        {hasUser ? (
          <ul>
            <li>
              <Link to="/login">{user.email}</Link>{" "}
            </li>
            <li>
              <Link to="/" onClick={handleClose}>Cerrar Sesión</Link>
            </li>
          </ul>
        ) : 
        <ul><li>
        <Link to="/login">Login</Link>{" "}
      </li></ul>}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
