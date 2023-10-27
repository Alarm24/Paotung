import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckSessionUser from "./CheckSessionUser";

const mockData = { bulb: 1000 };

function Home() {
  axios.defaults.withCredentials = true;
  CheckSessionUser();
  return (
    <div>
      <h1>Hi</h1>
      <h1>{mockData.bulb}</h1>
      <button>โรงอาหาร</button>
      <button>สุ่ม</button>
    </div>
  );
}

export default Home;
