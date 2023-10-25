import "./App.css";
// import OutlinedCard from "./Component/CardComponent.js";
import Login from "./Login";
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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
