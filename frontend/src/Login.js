// src/components/Login.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (res.data.status) {
          navigate("/");
        } else {
          navigate("/login");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const handleget = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5050/menus", {restaurant_name:'starbar'}).then(res=>console.log(res))
  };


  return (
    <div>
      <button onClick={handleget}>getna</button>
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
