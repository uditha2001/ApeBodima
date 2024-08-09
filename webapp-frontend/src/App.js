import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AddBodim from "./pages/AddBodim";
import BoardimCard from "./component/BoardimCard"
const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/addBodim" element={<AddBodim />} />
          <Route path="/a" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
