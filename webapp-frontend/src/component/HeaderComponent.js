import "./css/Header.css";
import ApeBODIMA from "./images/APEBODIMA.svg";
import { useEffect, useState, useRef } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Register from "../pages/Register";
import Modal from "@mui/material/Modal";
import Login from "../pages/Login";
import { HashLink } from "react-router-hash-link";

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleClick = (linkRef) => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logodiv">
          <IconButton onClick={() => handleClick(linkRef0)}>
            <img
              src={ApeBODIMA}
              alt="logo"
              style={{
                width: "100px",
                height: "60px",
                cursor: "pointer",
              }}
            />
          </IconButton>

          <HashLink ref={linkRef0} smooth to="/#headerSection"></HashLink>
        </div>
        <Button variant="text" onClick={() => handleClick(linkRef1)}>
          Explore
        </Button>
        <HashLink ref={linkRef1} smooth to="/explore#headerSection"></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef2)}>
          Add Place
        </Button>
        <HashLink ref={linkRef2} smooth to="/addBodim#headerSection"></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef3)}>
          User Account
        </Button>
        <HashLink
          ref={linkRef3}
          smooth
          to="/userAccount#headerSection"
        ></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef4)}>
          view favorite
        </Button>
        <HashLink
          ref={linkRef4}
          smooth
          to="/viewfaviourite#headerSection"
        ></HashLink>

        <Button
          variant="outlined"
          maxwidth="20px"
          className="logout"
          onClick={() => {
            setLogCloseDialog(false);
            setLogStatus(true);
          }}
        >
          <span>Log in</span>
        </Button>
        <Modal
          open={logStatus}
          onClose={() => setLogCloseDialog(false)}
          disableScrollLock
          sx={{ overflowY: "auto", height: "100%" }}
        >
          <div>
            <Login closeLogDialog={closeLogDialog} logStatus={setLogStatus} />
          </div>
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
          onClose={() => setCloseDialog(false)}
          disableScrollLock
          sx={{ overflowY: "auto", height: "100%" }}
        >
          <div>
            <Register closeDialog={closeDialog} registerStatus={setRegStatus} />
          </div>
        </Modal>

        <MenuIcon
          className="menubar"
          onClick={() => {
            setSideBar(true);
          }}
        />
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
          <CloseRoundedIcon />
        </IconButton>
        <Grid container className="navbar2" direction={"column"}>
          <Button variant="text" onClick={() => handleClick(linkRef1)}>
            Explore
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef2)}>
            Add Place
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef3)}>
            User Account
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef4)}>
            view favorite
          </Button>
          <Button
            variant="outlied"
            maxwidth="20px"
            className="logout"
            onClick={() => {
              setLogCloseDialog(false);
              setLogStatus(true);
            }}
          >
            <span>Log in</span>
          </Button>
          <Modal
            open={logStatus}
            onClose={() => setLogCloseDialog(false)}
            disableScrollLock
            sx={{ overflowY: "auto", height: "100%" }}
          >
            <div>
              <Login closeLogDialog={closeLogDialog} logStatus={setLogStatus} />
            </div>
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
            onClose={() => setCloseDialog(false)}
            disableScrollLock
            sx={{ overflowY: "auto", height: "100%" }}
          >
            <div>
              <Register
                closeDialog={closeDialog}
                registerStatus={setRegStatus}
              />
            </div>
          </Modal>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderComponent;
