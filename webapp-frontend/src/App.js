import React from "react";
import Register from "./pages/Register";
import SearchingAlertComponent from "./component/SearchingAlertComponent"
import  Login  from "./pages/Login";
import HeaderComponent from "./component/HeaderComponent";


const App = () => {  
  return (
    <div>
      {/* <Register></Register> */}
      <Login></Login>
      <HeaderComponent/>
    </div>
  );
};

export default App;
