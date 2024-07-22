import "./css/Header.css";
import logo from "./images/logo.png";
import logout from "./images/login.png";
import { useEffect, useState, useRef } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const HeaderComponent = () => {
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);
  const linkRef6 = useRef(null);
  useEffect(() => {
    let i = 0;
    const handleResize = () => {
      let fullWidth=window.screen.availWidth;
      setWidth(window.innerWidth);
      if (width >= 730 || fullWidth) {
        setSideBar(false);
        console.log(width)
      }
      

    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  });
  const handCllick = (linkRef) => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div >
      <header className="header">
            <div className="logodiv">
              <img src={logo} alt="logo" />
            </div>
            <Button variant="text" onClick={()=>handCllick(linkRef1)}>
                Explore
            </Button>
            <a ref={linkRef1} href="#explore" style={{display:"none"}}/>
            <Button variant="text" onClick={()=>handCllick(linkRef2)}>
                Add Place
            </Button>
            <a ref={linkRef2} href="#addPlace" style={{display:"none"}}/>
            <Button variant="text" onClick={()=>handCllick(linkRef3)}>
                User Account
            </Button>
            <a ref={linkRef3} href="#userAccount" style={{display:"none"}}/>
            <Button variant="text"  onClick={()=>handCllick(linkRef4)}>
               view favorite
            </Button>
            <a ref={linkRef2} href="#viewfavorite" style={{display:"none"}}/>

            <Button
              variant="outlined"
              maxWidth="20px"
              className="logout"
              onClick={()=>handCllick(linkRef5)}
            >
              <img src={logout} alt="logout" />
                <span>Login in</span>
            </Button>
            <a ref={linkRef5} href="#logoutId" style={{display:"none"}}/>
            <Button
              variant="outlined"
              className="signin"
              onClick={()=>handCllick(linkRef6)}
            >
                Sign in
            </Button>
            <a ref={linkRef6} href="#signInId" style={{display:"none"}}/>
          

        <MenuIcon
          className="menubar"
          onClick={() => {
            setSideBar(true);
          }}
        ></MenuIcon>
      </header>
      <div
        className="container2"
        style={{ right: `${sideBar ? "0px" : "-2000px"}` }}
        
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
