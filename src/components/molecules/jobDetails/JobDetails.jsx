/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./JobDetails.scss";
import SvgIcon from "@mui/material/SvgIcon";

const JobDetails = (props) => {
  return (
    <div className="container details-card">
      <h2 className="details-title">{props.title}</h2>
      <div className="program">
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <g clipPath="url(#clip0_1_706)">
              <path
                d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z"
                stroke="#0B0B0B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z"
                stroke="#0B0B0B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_706">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </SvgIcon>
        <p>{props.program}</p>
      </div>
      <div className="city">
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M16.6666 5.83337H3.33329C2.41282 5.83337 1.66663 6.57957 1.66663 7.50004V15.8334C1.66663 16.7538 2.41282 17.5 3.33329 17.5H16.6666C17.5871 17.5 18.3333 16.7538 18.3333 15.8334V7.50004C18.3333 6.57957 17.5871 5.83337 16.6666 5.83337Z"
              stroke="#0B0B0B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3333 17.5V4.16667C13.3333 3.72464 13.1577 3.30072 12.8451 2.98816C12.5326 2.67559 12.1087 2.5 11.6666 2.5H8.33329C7.89127 2.5 7.46734 2.67559 7.15478 2.98816C6.84222 3.30072 6.66663 3.72464 6.66663 4.16667V17.5"
              stroke="#0B0B0B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
        <p>{props.city}</p>
      </div>
      <br />
      <div className="button-row">
        <button className="apply" type="button">Aplica</button>
        <button className="details" type="button">Vezi detalii</button>
      </div>
    </div>
  );
};

export default JobDetails;
