import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockData = { bulb: 1000 };

function Home() {
  const [name, setName] = useState("");
  const [bulb,setBulb] = useState(0)
  const navigate = useNavigate("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (res.data.status) {
          setName(res.data.data.user)
          setBulb(res.data.data.bulb)
          //setBulb(res.data.data.bulb)
        } else {
          navigate("/login");
        }
        console.log(res);
      })
      .then().catch((err) => console.log(err));
    console.log('click')
  });

  return (
    <div>
      <h1>{name}</h1>
      <h1>{bulb}</h1>
      <button >โรงอหาร</button>
      <button>สุ่ม</button>
     
    </div>
  );
}

export default Home;
