import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FilterBarComponent from "./component/FilterBarComponent";
import HeaderComponent from "./component/HeaderComponent";
import UnderConstruction from "./component/UnderConstruction";
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
