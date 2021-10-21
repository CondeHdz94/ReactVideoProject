import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import { connect } from "react-redux";
import { registerRequest } from "../actions";

const Register = ({registerRequest, history}) => {
  const [formUserRegister, setFormUserRegister] = useState({});

  const handleOnChangeInputs = (event) => {
    setFormUserRegister({
      ...formUserRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
    registerRequest(formUserRegister);
    history.push('/');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form
          className="register__container--form"
          onSubmit={handleClickSubmit}
        >
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleOnChangeInputs}
          />
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleOnChangeInputs}
          />
          <input
            name="passowrd"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleOnChangeInputs}
          />
          <button type="submit" className="button">
            Registrarme
          </button>
        </form>
        <Link to="/login"> Iniciar sesión </Link>
      </section>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  registerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
