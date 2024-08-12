import { Button, Grid, IconButton, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import boardimimg from "./images/BoardimCard.png";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import GradeIcon from "@mui/icons-material/Grade";
const BoardimCard = () => {
  const [faviorite, setFaviorite] = useState(false);
    const checkfaviorite=()=>{
        if (faviorite === true) {
            setFaviorite(false);
          } else {
            setFaviorite(true);
          }
    }
  return (
    <Grid
      sx={{
        width: "404px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        sx={{
          alignSelf: "center",
        }}
      >
        <img
          src={boardimimg}
          alt="boardim"
          style={{
            width: "300px",
            height: "250px",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: "40px",
        }}
      >
        <Rating readOnly></Rating>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            marginLeft: "20px",
          }}
        >
          Boardim name
        </Typography>
        <Typography
          sx={{
            marginRight: "10px",
          }}
        >
          Price
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          position: "left",
        }}
      >
        <Typography
          sx={{
            marginLeft: "20px",
          }}
        >
          Description
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={() => {
            {checkfaviorite()}
          }}
          sx={{
            
          }}
        >
          {faviorite ? <GradeIcon /> : <StarOutlineIcon />}<Typography>add faviorite</Typography> 
        </IconButton>

        <div>
          <Button
            sx={{
              background: "white",
              textDecoration: "none",
            }}
          >
            <FindInPageIcon />
            More Details
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoardimCard;
