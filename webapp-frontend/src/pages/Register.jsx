import { Box, TextField, Container, Typography, Button } from "@mui/material";
import "./css/Register.css";
import { useEffect, useState } from "react";
import sideImg from "../component/images/signupImg/Other 07.png";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Lock from "@mui/icons-material/Lock";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [firstPassShow, setfirstPassShow] = useState(false);
  const [password1,setPassword1]=useState(null);
  const [password2,setPassword2]=useState(null);
  const [comaprision,setComparition]=useState(true);
  const [errors,setError]=useState(false);
  useEffect(
    ()=>{
      
      if(password1===password2 || password2==null){
        setComparition(true); 
        setError(false);    
      }
      else{
        setComparition(false);
        setError(true);
      }
    }
  )
  return (
    <Container
      className="container"
      maxWidth="lg"
      sx={{
        bgcolor: "#EBEFFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "920px",
        height: "672px",
        marginTop: "20px",
      }}
    >
      <Box
        className="imageSide"
        sx={{ bgcolor: "#EBEFFF" }}
        width={366}
        height={"auto"}
        marginBottom={3}
      >
        <img
          src={sideImg}
          alt="sideimages"
          style={{ marginTop: "150px", marginLeft: "20px" }}
        />
      </Box>
      <Box
        className="signupSide"
        width={366}
        height={517}
        sx={{
          bgcolor: "white",
          marginTop: "77px",
          marginBottom: "78px",
          marginRight: "95px",
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
        <div style={{ marginTop: "30px", position: "relative" }}>
          <Typography>Name:</Typography>
          <TextField
            className="custom-textfield"
            type="input"
            fullWidth
            variant="outlined"
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
          />
        </div>
        <div style={{ marginTop: "30px", position: "relative" }}>
          <Typography>Email-Address:</Typography>
          <TextField
            className="custom-textfield"
            type="input"
            fullWidth
            variant="outlined"
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
          />
        </div>
        <div style={{ marginTop: "30px", position: "relative" }}>
          <Typography>UserName:</Typography>
          <TextField
            className="custom-textfield"
            type="input"
            fullWidth
            variant="outlined"
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
          />
        </div>

        <div style={{ marginTop: "30px", position: "relative" }}>
          <Typography>Password:</Typography>

          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      if (firstPassShow == true) {
                        setfirstPassShow(false);
                      } else {
                        setfirstPassShow(true);
                      }
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
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
            onChange={(e)=>{
                    setPassword1(e.target.value);
            }}  
          />
        </div>
        <div style={{ marginTop: "30px", position: "relative" }}>
          <Typography>Re Enter Password:</Typography>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      if (showPass == true) {
                        setShowPass(false);
                      } else {
                        setShowPass(true);
                      }
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
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
            error={errors}
            helperText={comaprision? "":"not match"}
            onChange={(e)=>{
              setPassword2(e.target.value);
      }}
          />
        </div>
        <div style={{ marginTop: "45px", position: "relative" }} >
          <Button sx={{ bgcolor: "#9EC9F7", width: "346px" }}>Register</Button>
        </div>
        <div className="register">
          <Typography sx={{ justifyContent: "space-between",marginTop:"10px" }} className="loggintext">
            <spam>Yes i have an account?</spam>
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
            </a>{" "}
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Register;
