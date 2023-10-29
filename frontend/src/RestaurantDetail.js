import { useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const restaurant = useNavigate();
  function handleClickRestaurant() {
    restaurant("/restaurants");
  }

  return (
    <>
      <button onClick={handleClickRestaurant}>โรงอาหาร</button>
    </>
  );
}
export default RestaurantDetail;
