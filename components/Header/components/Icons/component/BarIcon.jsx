import LayoutContext from "@/components/LayoutContext";
import { IconButton } from "@mui/material";
import React, { useContext } from "react";

const BarIcon = () => {
  const { drawerJson } = useContext(LayoutContext);
  return (
    <li>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={drawerJson.handleDrawerOpen}
        sx={{ ...(drawerJson.open && { display: "none" }), color: "black" }}
      >
        <a href="#" className="bar-opener side-opener">
          <span className="bar"></span>
          <span className="bar small"></span>
          <span className="bar"></span>
        </a>
      </IconButton>
    </li>
  );
};

export default BarIcon;
