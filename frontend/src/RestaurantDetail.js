import axios from "axios";
import { useEffect, useState } from "react";
import CheckSessionUser from "./CheckSessionUser";
import { useNavigate, useParams } from "react-router-dom";
import MenuCard from "./Component/MenuCard";

function RestaurantDetail() {
  const restaurant = useNavigate();
  function handleClickRestaurant() {
    restaurant("/restaurants");
  }
  let { id } = useParams();

  CheckSessionUser();
  axios.defaults.withCredentials = true;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5050/menus", {
        restaurant_name: id,
      })
      .then((res) => {
        setMenu(res.data); // Set the restaurant data using the setter
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <h1>{id}</h1>
      {menu.map((item) => (
        <div key={item.menu_name}>
          <MenuCard menus={item} />
        </div>
      ))}
      <button onClick={handleClickRestaurant}>โรงอาหาร</button>
    </>
  );
}
export default RestaurantDetail;
