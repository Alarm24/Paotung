import axios from "axios";

function Restaurant() {
  axios.get("http://localhost:5050/restaurant").then((res) => {
    const data = res;
  });
  return (
    <>
      <div></div>
    </>
  );
}
