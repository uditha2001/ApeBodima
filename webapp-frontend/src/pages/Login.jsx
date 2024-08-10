

import { Box, TextField, Container, Typography, Button , Link} from "@mui/material";
// import { useEffect, useState } from "react";
import sideImg from "../component/images/login_image.png";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const Login = () => {
  // const [showPass, setShowPass] = useState(false);
  // const [firstPassShow, setfirstPassShow] = useState(false);
  // const [password1,setPassword1]=useState(null);
  // const [password2,setPassword2]=useState(null);
  // const [comaprision,setComparition]=useState(true);
  // const [errors,setError]=useState(false);
  // useEffect(
  //   ()=>{
      
  //     if(password1===password2 || password2==null){
  //       setComparition(true); 
  //       setError(false);    
  //     }
  //     else{
  //       setComparition(false);
  //       setError(true);
  //     }
  //   }
  // )
  return (
    <Container
      className="container"
      maxWidth="lg"
      
      sx={{
        bgcolor: "#FFFFFF", 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "920px",
        height: "672px",
        marginTop: "20px",
        borderRadius: "8px",
        overflow: "hidden", 
      }}
    >
       <Box
        className="imageSide"
        sx={{ bgcolor: "#EBEFFF" }} 
        width={366}
        height={"auto"}
        marginBottom={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={sideImg}
          alt="sideimages"
          style={{ marginTop: "50px", marginLeft: "-10px", marginRight: "-10px" }}
        />
      </Box>
      <Box
        className="signupSide"
        width={800}
        height={800}
        sx={{
          bgcolor: "white",
          marginTop: "0px",
          marginBottom: "0px",
          marginRight: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
      >
        <Typography
  sx={{ color: "#1A1A1A", fontSize: "24px", fontWeight: "600", marginTop: "50px" }}
>
  Login to your account
</Typography>
        <div style={{ marginTop: "80px", position: "relative" }}>
          
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
          <Typography>Password:</Typography>

          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      // if (firstPassShow === true) {
                      //   // setfirstPassShow(false);
                      // } else {
                      //   setfirstPassShow(true);
                      // }
                    }}
                  >
                    {/* {firstPassShow ? 
                      <VisibilityOutlinedIcon />
                     : 
                      <VisibilityOffOutlinedIcon />
                    } */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            // type={firstPassShow ? "text" : "password"}
            fullWidth
            variant="outlined"
            sx={{ position: "relative", height: "8px", width: "346px" }}
            size="small"
            // onChange={(e)=>{
            //         setPassword1(e.target.value);
            // }}  
          />

            <Link
              href="#forgot"
              sx={{ position: "absolute", right: "10px", top: "13px", transform: "translateY(-50%)", fontSize: "12px", color: "#007BFF" }}
            >
              Forgot?
            </Link>
        </div>
        
        <div style={{ marginTop: "45px", position: "relative" }} >
        <Button
  variant="contained"
  sx={{
    bgcolor: "#1A73E8",
    color: "white",
    width: "346px",
    height: "40px",
    textTransform: "none",
    fontWeight: "bold",
    ":hover": { bgcolor: "#1558b3" },
  }}
>
  Login now
</Button>

        </div>
        <div className="register">
          <Typography sx={{ justifyContent: "space-between",marginTop:"10px" }} className="loggintext">
            <spam>Don't Have An Account?</spam>
            <a
              style={{
                cursor: "pointer",
                marginLeft: "4px",
                color: "blue",
                textDecoration: "none",
              }}
              href="#login"
            >
              Sign Up
            </a>{" "}
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
