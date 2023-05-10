import { useRef } from "react";
import { useDispatch } from "react-redux";

// import { authenticateUser } from "../store/authThunk" *** Thunk hook;

import { authenticateUser } from "../../store/authOwnThunk";

import classes from "./Auth.module.css";

const Auth: React.FC = () => {
  const username = useRef<any>("");
  const password = useRef<any>("");

  const dispatch = useDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();

    // dispatch(authAction.login()); ***  Simple Auth ***

    dispatch(
      authenticateUser({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">username</label>
            <input
              type="email"
              id="email"
              disabled
              value="kminchelle"
              ref={username}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              disabled
              value="0lelplR"
              ref={password}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
