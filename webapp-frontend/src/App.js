import React from "react";
import Register from "./pages/Register";
import SearchingAlertComponent from "./component/SearchingAlertComponent"
import  Login  from "./pages/Login";
import HeaderComponent from "./component/HeaderComponent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FilterBarComponent from "./component/FilterBarComponent";
const App = () => {  
  return (
    <div>
      {/* <Register></Register> */}
      
      <HeaderComponent/>
      <FilterBarComponent/>
    </div>
  );
};

export default App;
