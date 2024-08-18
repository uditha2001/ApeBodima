import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AddBodim from "./pages/AddBodim";
<<<<<<< HEAD


=======
import FilterBar from "./component/FilterBarComponent";
import Explore from "./pages/Explore";
import UserManagement from "./pages/UserManagement";
>>>>>>> d0c8155a84102bd6fc1811b8d02d9c563ff2189f
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/addBodim" element={<AddBodim />} />
          <Route path="/a" element={<AboutUs />} />
<<<<<<< HEAD
=======
          <Route path="/filter" element={<FilterBar />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/userAccount" element={<UserManagement/>}/>
>>>>>>> d0c8155a84102bd6fc1811b8d02d9c563ff2189f
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
