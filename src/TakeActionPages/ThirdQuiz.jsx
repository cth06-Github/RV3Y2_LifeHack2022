import pic3 from "../images/pic3.png";
import specialcorrect from "../images/specialcorrect.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Popup from "./Popup";
import wrong from "../images/wrong.png";

const ThirdQuiz = () => {
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
      <h2 style={{ textAlign: "center" }}>Your Third Scenario!</h2>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <img src={pic3} alt="" width="40%" />
      </div>

      <div style={{ display: "inline", align: "center" }}>
        <div style={{ float: "left", padding: "10px" }}>
          <input
            type="button"
            value="Turn Left"
            onClick={togglePopup1}
            style={{ fontSize: "16px", borderRadius: "7px" }}
          />

          {isOpen1 && (
            <Popup
              content={
                <>
                  <b>Correct Answer!</b>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={specialcorrect} alt="" width="40%" />
                  </div>
                  <Link to="/FourthQuiz">
                    <button style={{ fontSize: "20px" }}>Next Question!</button>
                  </Link>
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
            onClick={togglePopup2}
            style={{ fontSize: "16px", borderRadius: "7px" }}
          />

          {isOpen2 && (
            <Popup
              content={
                <>
                  <b>Correct Answer!</b>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={specialcorrect} alt="" width="40%" />
                  </div>
                  <Link to="/FourthQuiz">
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

export default ThirdQuiz;
