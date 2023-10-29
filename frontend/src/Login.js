// src/components/Login.js

import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CheckSessionLogin from "./CheckSessionLogin";
import { useUser } from "./UserContext";

export const ApiDataContext = createContext();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  axios.defaults.withCredentials = true;

  CheckSessionLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        window.alert('wrong username or answer')
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <Link to = '/testpayment'><button>testpay</button></Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
