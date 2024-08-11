import React from "react";
<<<<<<< HEAD
import Register from "./pages/Register";
import SearchingAlertComponent from "./component/SearchingAlertComponent"
import  Login  from "./pages/Login";
import HeaderComponent from "./component/HeaderComponent";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
>>>>>>> c3c2d19e45f2dc09f4c4e41c788340c87ca099a0
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FilterBarComponent from "./component/FilterBarComponent";
const App = () => {  
  return (
    <div>
      {/* <Register></Register> */}
      
      <HeaderComponent/>
      {/*removed addbodime component */}
    </div>
  );
};

export default App;
