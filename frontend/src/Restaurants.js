import axios from "axios";
import { useEffect, useState } from "react";
import CheckSessionUser from "./CheckSessionUser";
import RestaurantCard from "./Component/RestaurantCard";
import { useNavigate } from "react-router-dom";

function Restaurants() {
  CheckSessionUser();
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/restaurants")
      .then((res) => {
        setRestaurant(res.data); // Set the restaurant data using the setter
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const home = useNavigate();
  function handleClickHome() {
    home("/");
  }
  return (
    <>
      <div>
        <h1>I-Canteen</h1>
        {restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
        <button onClick={handleClickHome}>Home</button>
      </div>
    </>
  );
}
export default Restaurants;
