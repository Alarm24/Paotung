import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckSessionUser from "./CheckSessionUser";
import { useUser } from "./UserContext";

function Home() {
  const navigate = useNavigate();
  function handleClickRestaurant() {
    navigate("/restaurants");
  }
  const { user } = useUser();
  axios.defaults.withCredentials = true;
  CheckSessionUser();
  return (
    <div>
      <h1>Hi</h1>
      <h1>{user?.bulb}</h1>
      <button onClick={handleClickRestaurant}>โรงอาหาร</button>
      <button>สุ่ม</button>
    </div>
  );
}

export default Home;
