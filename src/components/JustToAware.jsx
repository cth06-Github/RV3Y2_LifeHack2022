import React from "react";
import { Link } from "react-router-dom";

const JustToAware = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "5px"
      }}
    >
      <Link to="/EducatePage">
        <button style={{ fontSize: "20px" }}>Aware</button>
      </Link>
    </div>
  );
};

export default JustToAware;
