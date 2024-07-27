import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import "./css/Register.css";
import { useEffect, useState } from "react";
import sideImg from "../component/images/signupImg/Other 07.png";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [firstPassShow, setFirstPassShow] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [comparison, setComparison] = useState(true);
  const [errors, setError] = useState(false);

  useEffect(() => {
    if (password1 === password2 || password2 === "") {
      setComparison(true);
      setError(false);
    } else {
      setComparison(false);
      setError(true);
    }
  }, [password1, password2]);

  return (
    <Container
    maxWidth={"md"}

    sx={{
      bgcolor: "#EBEFFF",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:"10px",
      marginBottom:"10px"
      
    }}
    >
      <Grid
        container
        className="container"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "auto",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sm={6}
          className="imageSide"
          sx={{
            bgcolor: "#EBEFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={sideImg}
            alt="sideimages"
            style={{ marginTop: "150px", maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          className="signupSide"
          sx={{
            bgcolor: "white",
            marginTop: "77px",
            marginBottom: "78px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="form"
        >
          <Typography
            sx={{ color: "#1A1A1A", fontSize: "16px", fontWeight: "600" }}
          >
            Please Fill out form to Register!
          </Typography>
          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Name:</Typography>
            <TextField
              className="custom-textfield"
              type="input"
              fullWidth
              variant="outlined"
              size="small"
            />
          </div>
          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Email-Address:</Typography>
            <TextField
              className="custom-textfield"
              type="input"
              fullWidth
              variant="outlined"
              size="small"
            />
          </div>
          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>UserName:</Typography>
            <TextField
              className="custom-textfield"
              type="input"
              fullWidth
              variant="outlined"
              size="small"
            />
          </div>

          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Password:</Typography>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setFirstPassShow(!firstPassShow);
                      }}
                    >
                      {firstPassShow ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="custom-textfield"
              type={firstPassShow ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Re Enter Password:</Typography>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                    >
                      {showPass ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="custom-textfield"
              type={showPass ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
              error={errors}
              helperText={comparison ? "" : "Passwords do not match"}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "45px", width: "100%" }}>
            <Button sx={{ bgcolor: "#9EC9F7", width: "100%" }}>Register</Button>
          </div>
          <div className="register">
            <Typography
              sx={{ justifyContent: "space-between", marginTop: "10px" }}
              className="loggintext"
            >
              <span>Yes, I have an account?</span>
              <a
                style={{
                  cursor: "pointer",
                  marginLeft: "4px",
                  color: "blue",
                  textDecoration: "none",
                }}
                href="#login"
              >
                Login
              </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
