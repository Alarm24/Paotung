// src/components/Login.js

import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CheckSessionLogin from "./CheckSessionLogin";

export const ApiDataContext = createContext();

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  CheckSessionLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/login", {
        user: username,
        pass: password,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/Signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
}

export default Login;
