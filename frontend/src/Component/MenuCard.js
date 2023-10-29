import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px", // Add 'px' to the numeric value
  backgroundColor: "white", // Use camelCase and a valid CSS color value
  border: "2px solid #000",
  boxShadow: "24px", // Add 'px' to the numeric value
  padding: "16px", // Add 'px' to the numeric value, assuming you meant padding
};
function MenuCard({ menus }) {
  const payment = useNavigate();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        if (!res.data.status) {
          navigate("/login");
        } else {
          setDataUser(res.data.value);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  function handleOpen() {
    payment("/payment");
  }
  const details = {
    menu_name: menus.menu.menu_name,
    price: menus.menu.menu_price,
    id_restaurant: menus.id,
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          border: "20px solid black",
          margin: "10px",
          padding: "10px",
        }}
      >
        <img
          src={menus.menu.image_url}
          alt={menus.menu.menu_name}
          style={{ width: "100px", height: "100px" }}
        />
        <div>{menus.menu.menu_name}</div>
        <div>{menus.menu.menu_price}</div>
      </div>
    </div>
  );
}

export default MenuCard;
