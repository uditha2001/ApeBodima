import {React,useRef,useEffect} from "react";
import HeaderComponent from "../component/HeaderComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import './MainLayout.css'
const MainLayout = () => {
  

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "10px",
        flexDirection: "column",
        position: "relative",
        overflowX:"inherit",
        alignContent:"center",
        justifyContent:"center"
      }}
    >
      <div style={{ position: "fixed", zIndex: "100" }}>
        <HeaderComponent />
      </div>
      <div
        style={{
          flex: "1",
          position: "absolute",
          marginTop: "80px",
          marginBottom: "100px",
        }}
      >
        <Outlet />
        <div
        className="footer"
      >
        <FooterComponent />
      </div>
      </div>
     
    </div>
  );
};

export default MainLayout;
