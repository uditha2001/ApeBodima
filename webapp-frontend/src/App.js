import React from "react";
import { BrowserRouter,Route,Router ,Routes} from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path=""/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
