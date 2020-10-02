import React from "react";
import { reduxForm } from "redux-form";
import {
  maxLength,
  requiredField,
  minLength,
  passIsLetterAndNumbre,
} from "../../utils/validator";
import { createFielde, Input } from "../common/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/index.module.css";

const maxLength30 = maxLength(30);
const minLength6 = minLength(6);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.remembreMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createFielde(
        "Email",
        "email",
        [requiredField, maxLength30, minLength6],
        Input
      )}
      {createFielde(
        "Password",
        "password",
        [requiredField, maxLength30, minLength6, passIsLetterAndNumbre],
        Input,
        { type: "password" }
      )}
      {createFielde(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl &&
        createFielde(
          "Symbols from image",
          "captcha",
          [requiredField],
          Input,
          {}
        )}
      {error ? (
        <div>
          <span className={s.formsControlsError}>{error}</span>
        </div>
      ) : (
        ""
      )}

      <button> Login</button>
    </form>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default connect(mapStateToProps, { login })(Login);
