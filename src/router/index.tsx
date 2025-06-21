import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../screens/Login";
import Home from "../screens/Home";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
