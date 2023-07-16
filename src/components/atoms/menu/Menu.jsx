/* eslint-disable no-unused-vars */
import React from "react";
import "./Menu.scss";
import SvgIcon from "@mui/material/SvgIcon";

const Menu = () => {
  return (
    <div>
      <SvgIcon className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none">
          <path
            d="M5.15625 22.9688H24.8438M5.15625 15.4688H24.8438M5.15625 7.96875H24.8438"
            stroke="#131313"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SvgIcon>
    </div>
  );
};

export default Menu;
