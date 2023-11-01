import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

export default function Navbar() {
  const [userIconVisible, setUserIconVisible] = React.useState(false);

  const handleUserIcon = () => {
    setUserIconVisible(!userIconVisible); 
  };
  return (
    <Box sx={{ flexGrow: 1, ml: "12rem", mt: "-5px", mr: "-6px" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "#454242" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Provider Portals
          </Typography>
          <Button onClick={handleUserIcon}>
            {" "}
            {userIconVisible ? <LogoutSharpIcon />: <LoginSharpIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
