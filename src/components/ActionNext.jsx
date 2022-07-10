import React from "react";
import { Link } from "react-router-dom";

const ActionNext = () => {
  return (
    <div>
      <Link to="/TakeActionPage">
        <button style={{ fontSize: "20px" }}>Next</button>
      </Link>
    </div>
  );
};

export default ActionNext;
