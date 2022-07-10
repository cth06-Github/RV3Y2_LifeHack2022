import React from "react";
import { Link } from "react-router-dom";

const BackToAction = () => {
  return (
    <div style={{ float: "left" }}>
      <Link to="/TakeActionPage">
        <button style={{ fontSize: "20px" }}>Quiz</button>
      </Link>
    </div>
  );
};

export default BackToAction;
