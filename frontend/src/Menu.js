import axios from "axios";
import { useEffect, useState } from "react";
import CheckSessionUser from "./CheckSessionUser";
function Menu() {
  CheckSessionUser();
  axios.defaults.withCredentials = true;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5050/menus", {
        restaurant_name: "starbar",
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
      <div>
        {menu.map((item) => (
          <div key={item.id}>{item.menu_name}</div>
        ))}
      </div>
    </>
  );
}
export default Menu;
