import { React} from "react";
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
        display: "grid",
        gap: "10px",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "fixed", zIndex: "100" }}>
        <HeaderComponent />
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "80px",
          alignContent: "center",
          justifyContent: "center",
          width:"100%",
        }}
      >
        <Outlet />
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
