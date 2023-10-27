import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockData = { bulb: 1000 };

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.username);
        } else {
          navigate("/login");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
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
