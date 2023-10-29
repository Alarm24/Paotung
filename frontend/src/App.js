import "./App.css";
import Home from "./Home";
// import OutlinedCard from "./Component/CardComponent.js";
import Login from "./Login";
import Restaurants from "./Restaurants";
import SignUp from "./SignUp";
import RestaurantDetail from "./RestaurantDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
