import pic4 from "../images/pic4.png";
import correct from "../images/correct.png";
import wrong from "../images/wrong.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Popup from "./Popup";

const FourthQuiz = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Your Fourth Scenario!</h2>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <img src={pic4} alt="" width="40%" />
      </div>

      <div style={{ display: "inline", align: "center" }}>
        <div style={{ float: "left", padding: "10px" }}>
          <input
            type="button"
            value="Turn Left"
            onClick={togglePopup2}
            style={{ fontSize: "16px", borderRadius: "7px" }}
          />

          {isOpen1 && (
            <Popup
              content={
                <>
                  <h1>Wrong Answer!</h1>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={wrong} alt="" width="40%" />
                  </div>
                  <p>You should not waste food! What are the other options?</p>
                  <h3>Try Again!</h3>
                </>
              }
              handleClose={togglePopup1}
            />
          )}
        </div>

        <div style={{ float: "right", padding: "10px" }}>
          <input
            type="button"
            value="Turn Right"
            onClick={togglePopup1}
            style={{ fontSize: "16px", borderRadius: "7px" }}
          />

          {isOpen2 && (
            <Popup
              content={
                <>
                  <b>Correct Answer!</b>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={correct} alt="" width="40%" />
                  </div>
                  <p>
                    It's always good to make full use of what you have instead of wasting them!
                  </p>
                  <Link to="/FifthQuiz">
                    <button style={{ fontSize: "20px" }}>Next Question!</button>
                  </Link>
                </>
              }
              handleClose={togglePopup2}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FourthQuiz;
