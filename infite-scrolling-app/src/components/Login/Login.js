import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setUsername("");
    setPassword("");
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  return (
    <div className="login-wrapper">
      {!isLoggedin ? (
        <>
          <h1>Please Log In</h1>
          <form onSubmit={login}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>User is logged in</h1>
          <button onClickCapture={logout}>logout user</button>
        </>
      )}
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
