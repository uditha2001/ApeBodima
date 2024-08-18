import "./css/Header.css";
import ApeBODIMA from "./images/APEBODIMA.svg";
import { useEffect, useState, useRef } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Register from "../pages/Register";
import Modal from "@mui/material/Modal";
import Login from "../pages/Login";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef0 = useRef(null);
  const [regStatus, setRegStatus] = useState(false);
  const [closeDialog, setCloseDialog] = useState(true);
  const [logStatus, setLogStatus] = useState(false);
  const [closeLogDialog, setLogCloseDialog] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      let fullWidth = window.screen.availWidth;
      setWidth(window.innerWidth);
      if (width >= 730 || fullWidth) {
        setSideBar(false);
        console.log(width);
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
    <div>
      <header className="header">
        <div className="logodiv">
          <IconButton>
          <img
            src={ApeBODIMA}
            alt="logo"
            style={{
              width: "100px",
              height: "60px",
              cursor: "pointer",
            }}
            onClick={() => handCllick(linkRef0)}
          />
          </IconButton>
          <Link ref={linkRef0} to="/"></Link>
        </div>
        <Button variant="text" onClick={() => handCllick(linkRef1)}>
          Explore
        </Button>
        {<Link ref={linkRef1} to="/explore"></Link>}
        <Button variant="text" onClick={() => handCllick(linkRef2)}>
          Add Place
        </Button>
        <Link ref={linkRef2} to="/addBodim"></Link>
        <Button variant="text" onClick={() => handCllick(linkRef3)}>
          User Account
        </Button>
        <Link ref={linkRef3} to="/userAccount"></Link>
        <Button variant="text" onClick={() => handCllick(linkRef4)}>
          view favorite
        </Button>
        <Link ref={linkRef4} to="/viewfaviourite"></Link>

        <Button
          variant="outlined"
          maxWidth="20px"
          className="logout"
          onClick={() => {
            setLogCloseDialog(false);
            setLogStatus(true);
          }}
        >
          <span>Login in</span>
        </Button>
        <Modal
          open={logStatus}
          onClose={closeLogDialog}
          disableScrollLock
          sx={{ overflowY: "auto", height: "100%" }}
        >
          <Login closeLogDialog={closeLogDialog} logStatus={setLogStatus} />
        </Modal>
        <Button
          variant="outlined"
          className="signin"
          onClick={() => {
            setRegStatus(true);
            setCloseDialog(false);
          }}
        >
          Sign in
        </Button>
        <Modal
          open={regStatus}
          onClose={closeDialog}
          disableScrollLock
          sx={{ overflowY: "auto", height: "100%" }}
        >
          <Register closeDialog={closeDialog} registerStatus={setRegStatus} />
        </Modal>

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
          <Button variant="text" onClick={() => handCllick(linkRef1)}>
            Explore
          </Button>
          {<Link ref={linkRef1} to="/explore"></Link>}
          <Button variant="text" onClick={() => handCllick(linkRef2)}>
            Add Place
          </Button>
          <Link ref={linkRef2} to="/addBodim"></Link>
          <Button variant="text" onClick={() => handCllick(linkRef3)}>
            User Account
          </Button>
          <Link ref={linkRef3} to="/userAccount"></Link>
          <Button variant="text" onClick={() => handCllick(linkRef4)}>
            view favorite
          </Button>
          <Link ref={linkRef4} to="/viewfaviourite"></Link>
          <Button
            variant="outlied"
            maxWidth="20px"
            className="logout"
            onClick={() => {
              setLogCloseDialog(false);
              setLogStatus(true);
            }}
          >
            <span>Login in</span>
          </Button>
          <Modal
            open={logStatus}
            onClose={closeLogDialog}
            disableScrollLock
            sx={{ overflowY: "auto", height: "100%" }}
          >
            <Login closeLogDialog={closeLogDialog} logStatus={setLogStatus} />
          </Modal>
          <Button
            variant="outlined"
            className="signin"
            onClick={() => {
              setRegStatus(true);
              setCloseDialog(false);
            }}
          >
            Sign in
          </Button>
          <Modal
            open={regStatus}
            onClose={closeDialog}
            disableScrollLock
            sx={{ overflowY: "auto", height: "100%" }}
          >
            <Register closeDialog={closeDialog} registerStatus={setRegStatus} />
          </Modal>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderComponent;
