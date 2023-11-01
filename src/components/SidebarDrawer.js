import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
const drawerWidth = 200;

export default function SidebarDrawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography>Logo Placeholder</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <NavLink
              to="/"
              activeClassName="active-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText>Dashboard</ListItemText>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <NavLink
              to="/userForm"
              activeClassName="active-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText>Onboarding</ListItemText>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <NavLink
              to="/"
              activeClassName="active-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText>Home</ListItemText>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <NavLink
              to="/userForm"
              activeClassName="active-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText>User Form</ListItemText>
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List> 
    </Drawer>
  );
}
