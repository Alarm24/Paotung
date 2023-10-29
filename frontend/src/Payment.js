import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment({ detail }) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const home = useNavigate();
  const [money, setMoney] = useState(10000);
  const [dataUser, setDataUser] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (!res.data.status) {
          navigate("/login");
        } else {
          setDataUser(res.data.value);
          setToken(res.data.value.token);
          setEmail(res.data.value.email);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(token);
  console.log(email);
  axios
    .get("https://paotooong.thinc.in.th/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token directly from the constant.
      },
    })
    .then((res) => {
      console.log(res);
      setMoney(res.money);
    })
    .catch((err) => console.log(err));
  const location = useLocation();
  const details = location.state;
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(details.price);
  const price = details.price;
  const id_restaurant = details.id_restaurant;
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (event) => {
    const timeString = event.target.value;
    const [hours, minutes] = timeString.split(":").map(Number);
    const updatedTime = new Date();
    updatedTime.setHours(hours, minutes);
    setTime(updatedTime);
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleclick = () => {
    axios
      .post(
        `https://paotooong.thinc.in.th/v1/wallet/pay/{${id_restaurant}}`,
        {
          amount: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token directly from the constant.
          },
        }
      )
      .then((res) => {
        axios
          .post("http://localhost:5050/history", {
            email: email,
            restaurant_name: details.restaurant_name,
            menu_name: details.menu_name,
            totalPrice: totalPrice,
            time: time,
          })
          .then((res) => console.log("success"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    home(`/restaurants/${details.restaurant_name}`);
  };
  return (
    <div>
      <h1>ชำระเงิน</h1>
      <span>
        Codeส่วนลด : <input placeholder="Code ส่วนลด"></input>
      </span>
      <div>
        จำนวน{" "}
        <select
          value={amount}
          onChange={(e) =>
            setAmount(
              Number(e.target.value),
              setTotalPrice(Number(e.target.value * price))
            )
          }
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <div onChange={(e) => setTotalPrice(Number(e.target.value))}>
          ราคารวม : {totalPrice}
        </div>
        <div>
          เลือกเวลาในการรับอาหาร :{" "}
          <span>
            <input
              type="time"
              value={formatTime(time)}
              onChange={handleTimeChange}
            />
          </span>
        </div>
        <button onClick={handleclick}>ชำระเงิน</button>
      </div>
    </div>
  );
}
