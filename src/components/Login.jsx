import React, { useState } from "react";
import { Link } from "react-router-dom";
import google_icon from "../assets/static/google-icon.png";
import twitter_icon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";
import { connect } from "react-redux";
import { loginRequest } from "../actions";

const Login = ({ loginRequest, history }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputs = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
    loginRequest(formValues);
    console.log(formValues);
    history.push("/");
  };



  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form">
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInputs}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInputs}
          />
          <button type="submit" className="button" onClick={handleClickSubmit}>
            Iniciar sesión
          </button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={google_icon} /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitter_icon} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register"> Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
