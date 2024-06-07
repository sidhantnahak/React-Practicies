import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarComp = () => {

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "red",
        },
        position: "fixed",
        left: "0",
        height: "100%",
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/documentation" />}>
          {" "}
          Projects
        </MenuItem>
        <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComp;
