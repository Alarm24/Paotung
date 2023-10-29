import axios from "axios";
import { useEffect, useState } from "react";
import CheckSessionUser from "./CheckSessionUser";
import RestaurantCard from "./Component/RestaurantCard";

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
  return (
    <>
      <div>
        {restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}
export default Restaurants;
