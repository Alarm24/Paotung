import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
}

export default Home;
