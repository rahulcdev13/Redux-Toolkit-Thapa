import React from "react";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom/dist";
import SidebarDrawer from "../components/SidebarDrawer";
import Navbar from "../components/Navbar";
// import UserForm from "../components/UserForm";
const Routing = () => {
  return (
    <>
      <Navbar />
      <SidebarDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/userForm" element={<UserForm />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
