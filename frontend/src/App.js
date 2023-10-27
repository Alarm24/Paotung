import "./App.css";
import Home from "./Home";
// import OutlinedCard from "./Component/CardComponent.js";
import Login from "./Login";
import Menu from "./Menu";
import Restaurants from "./Restaurants";
import SignUp from "./SignUp";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
