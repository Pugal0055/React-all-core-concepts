import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { authenticateLogin } from "src/store/authentication";

const Login: React.FC = (): any => {
  const dispatch = useDispatch();
  const isAuthentication = useSelector(
    (state: any) => state.authentication.isAuthentication
  );

  const navigate = useNavigate();

  const username = useRef<any>();
  const password = useRef<any>();
  const submitHandler = (e: any) => {
    e.preventDefault();

    dispatch(
      authenticateLogin({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  useEffect(() => {
    if (isAuthentication) {
      navigate("home");
    }
  }, [isAuthentication]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          defaultValue="kminchelle"
          autoComplete="off"
          ref={username}
        ></input>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          defaultValue="0lelplR"
          autoComplete="off"
          ref={password}
        ></input>
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
