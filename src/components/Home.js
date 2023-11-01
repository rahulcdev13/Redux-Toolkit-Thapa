import { Typography, Box } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
// import UserForm from "./UserForm";

const Home = () => {
  return (
    <>
      <Box sx={{mr: "-10px", ml: "12rem"}}>
        <Box sx={{bgcolor: "#F7F6F5"}} mb={2}> 
        <Typography pl={2}
          sx={{ fontSize: "12px", mt: "0.3rem", color: "black" }}
        >
          Join our Network
        </Typography>
        <Box sx={{ mt: "1.2rem" }}>
          <Typography pl={2}
            sx={{ fontSize: "18px", fontWeight: "bolder", color: "#6D9CDF" }}
          >
            Join our Network
          </Typography>
        </Box>
        </Box> 
        <Typography pl={2} pb={1} fontSize={15} fontWeight={500}>On Boarding Form</Typography>
      <Divider />
      </Box> 
    </>
  );
};

export default Home;
