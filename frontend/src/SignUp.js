import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/v1/auth/register", {
        email: email,
        password: password,
        firstName: firstname,
        familyName: lastname,
      })
      .then((res) => {
        setToken(res.data.token.accessToken);
        axios
          .get("/v1/auth/me", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((resData) => {
            console.log(resData);
          })
          .catch((err) => {
            console.log(err);
          });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <div>
      <h2>SignUp</h2>
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
        <input
          type="firstname"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="lastname"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
