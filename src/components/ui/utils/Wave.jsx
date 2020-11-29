import React from "react";

export default function Wave() {
  return (
    <div className="wave_parent w-100">
      <div className="blue_wave"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,160L80,133.3C160,107,320,53,480,69.3C640,85,800,171,960,192C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
