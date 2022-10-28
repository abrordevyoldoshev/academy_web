import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";
import Home from "./view/pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="reg" element={<Register />} />
      <Route path="/pages" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
