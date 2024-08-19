import { React } from "react";
import HeaderComponent from "../component/HeaderComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";

import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "fixed", zIndex: "100", top: "0px" }}>
        <HeaderComponent />
      </div>
      <div
        style={{
          position: "relative",
          marginTop: "50px",
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        <Outlet />
        <div
          className="footer"
          style={{
            position: "relative",
          }}
        >
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
