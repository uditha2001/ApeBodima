import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AddBodim from "./pages/AddBodim";
import FilterBar from "./component/FilterBarComponent";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/addBodim" element={<AddBodim />} />
          <Route path="/a" element={<AboutUs />} />
          <Route path="/filter" element={<FilterBar />} />
        </Route>
      </Routes>
    </BrowserRouter>

export default App;
