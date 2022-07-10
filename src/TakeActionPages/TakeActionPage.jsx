import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BackToAware from "../components/BackToAware";
import BackToHome from "../components/BackToHome";

const TakeAction = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to the Quiz!</h1>
      <p style={{ textAlign: "center" }}>
        Your journey begins here! Click the button below to start the quiz!
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/FirstQuiz">
          <button style={{ fontSize: "20px" }}>Start</button>
        </Link>
      </div>
      <br />
      <div style={{ height: 100 }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <BackToAware />
        <BackToHome />
      </div>
    </>
  );
};

export default TakeAction;
