import "./css/Header.css";
import logo from "./images/logo.png";
import logout from "./images/login.png";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const HeaderComponent = () => {
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let i=0;
    const handleResize = () => {
      setWidth(window.innerWidth);
      if(width>=1040){
        setSideBar(false);
      }
     
    };
    
    // Add event listener on mount
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      <header className="header" >
        <Container maxWidth="xl" className="container">
          <Grid container className="navbar">
            <div className="logodiv">
              <img src={logo} alt="logo" />
            </div>
            <Button variant="text">
              <a href="#explore">Explore</a>
            </Button>
            <Button variant="text">
              <a href="#addPlace">Add Place</a>
            </Button>
            <Button variant="text">
              <a href="#userAccount">User Account</a>
            </Button>
            <Button variant="text">
              <a href="#viewFavourite">View favorite</a>
            </Button>
            <Button variant="outlined" maxWidth="20px" className="logout">
              <img src={logout} alt="logout" />
              <a href="#logoutId">
                <span>Login in</span>
              </a>
            </Button>
            <Button variant="outlined" className="signin">
              <a href="#signInId">Sign in</a>
            </Button>
          </Grid>
        </Container>

        <MenuIcon
          className="menubar"
          onClick={() => {
            setSideBar(true);
          }}
        ></MenuIcon>
      </header>
      <div
        className="container2"
        style={{ right: `${sideBar ? "0px" : "-2000px"}`}}
      >
        <IconButton
          onClick={() => {
            setSideBar(false);
          }}
        >
          <CloseRoundedIcon></CloseRoundedIcon>
        </IconButton>
        <Grid container className="navbar2" direction={"column"}>
          <Button variant="text">
            <a href="#explore">Explore</a>
          </Button>
          <Button variant="text">
            <a href="#addPlace">Add Place</a>
          </Button>
          <Button variant="text">
            <a href="#userAccount">User Account</a>
          </Button>
          <Button variant="text">
            <a href="#viewFavourite">View favorite</a>
          </Button>
          <Button variant="outlined" maxWidth="20px" className="logout">
            <img src={logout} alt="logout" />
            <a href="#logoutId">
              <span>Login in</span>
            </a>
          </Button>
          <Button variant="outlined" className="signin">
            <a href="#signInId">Sign in</a>
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderComponent;
