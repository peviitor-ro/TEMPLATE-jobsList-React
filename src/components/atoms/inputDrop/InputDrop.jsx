/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./InputDrop.scss";
import SvgIcon from "@mui/material/SvgIcon";

const InputDrop = (props) => {
  return (
    <div className="dropdown">
      <input type={props.text} placeholder={props.placeholder} />
        <SvgIcon className="drop-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none">
            <path
              d="M21.5751 9.79998L13.1751 18.225C13.0751 18.325 12.9668 18.396 12.8501 18.438C12.7335 18.48 12.6085 18.5007 12.4751 18.5C12.3418 18.5 12.2168 18.479 12.1001 18.437C11.9835 18.395 11.8751 18.3243 11.7751 18.225L3.35012 9.79998C3.11679 9.56665 3.00012 9.27498 3.00012 8.92498C3.00012 8.57498 3.12512 8.27498 3.37512 8.02498C3.62512 7.77498 3.91679 7.64998 4.25012 7.64998C4.58346 7.64998 4.87512 7.77498 5.12512 8.02498L12.4751 15.375L19.8251 8.02498C20.0585 7.79165 20.3461 7.67498 20.6881 7.67498C21.0301 7.67498 21.3258 7.79998 21.5751 8.04998C21.8251 8.29998 21.9501 8.59165 21.9501 8.92498C21.9501 9.25832 21.8251 9.54998 21.5751 9.79998Z"
              fill="black"
            />
          </svg>
        </SvgIcon>
    </div>
  );
};

export default InputDrop;
