import axios from "axios";
import { useEffect, useState } from "react";

function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/restaurant")
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
        {restaurant.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}
