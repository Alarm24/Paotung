import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckSessionUser from "./CheckSessionUser";
import { useUser } from "./UserContext";

function Home() {
  const [dataUser, setDataUser] = useState("");
  const [money, setMoney] = useState(10000);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (!res.data.status) {
          navigate("/login");
        } else {
          setDataUser(res.data.value);
          setToken(res.data.value.token);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(token);
  axios
    .get("https://paotooong.thinc.in.th/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token directly from the constant.
      },
    })
    .then((res) => {
      console.log(res);
      setMoney(res.data.user.money);
    })
    .catch((err) => console.log(err));
  // Data User
  console.log(dataUser);

  const navigate = useNavigate();
  function handleClickRestaurant() {
    navigate("/restaurants");
  }
  const { user } = useUser();
  axios.defaults.withCredentials = true;

  function handleClickGacha() {
    navigate("/gacha");
  }

  return (
    <div>
      <h1>Hi {dataUser.firstName}</h1>
      <h1>{money}</h1>
      <button onClick={handleClickRestaurant}>โรงอาหาร</button>
      <button onClick={handleClickGacha}>สุ่ม</button>
    </div>
  );
}

export default Home;
