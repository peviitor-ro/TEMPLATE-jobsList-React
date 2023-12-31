/* eslint-disable no-unused-vars */
import React from "react";
import "./InputSearch.scss";
import SvgIcon from "@mui/material/SvgIcon";

const InputSearch = () => {
  return (
    <div className="search-container">
      <SvgIcon className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="41"
          viewBox="0 0 24 25"
          stroke="#000000"
          fill="none">
          <path
            d="M18.9 20.8L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.146 15.8707 4.888 14.612C3.63 13.3533 3.00067 11.816 3 10C3 8.18333 3.62933 6.646 4.888 5.388C6.14667 4.13 7.684 3.50067 9.5 3.5C11.3167 3.5 12.854 4.12933 14.112 5.388C15.37 6.64667 15.9993 8.184 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L20.325 19.425C20.5083 19.6083 20.6 19.8333 20.6 20.1C20.6 20.3667 20.5 20.6 20.3 20.8C20.1167 20.9833 19.8833 21.075 19.6 21.075C19.3167 21.075 19.0833 20.9833 18.9 20.8ZM9.5 14.5C10.75 14.5 11.8127 14.0623 12.688 13.187C13.5633 12.3117 14.0007 11.2493 14 10C14 8.75 13.5623 7.68733 12.687 6.812C11.8117 5.93667 10.7493 5.49933 9.5 5.5C8.25 5.5 7.18733 5.93767 6.312 6.813C5.43667 7.68833 4.99933 8.75067 5 10C5 11.25 5.43767 12.3127 6.313 13.188C7.18833 14.0633 8.25067 14.5007 9.5 14.5Z"
            fill="black"
          />
        </svg>
      </SvgIcon>
      <input type="text" placeholder="Cauta job" />
    </div>
  );
};

export default InputSearch;
