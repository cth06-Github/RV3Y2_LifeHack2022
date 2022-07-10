import React from "react";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div style={{ paddingLeft: "50px" }}>
      <Link to="/">
        <button style={{ fontSize: "20px" }}>Home</button>
      </Link>
    </div>
  );
};

export default BackToHome;
