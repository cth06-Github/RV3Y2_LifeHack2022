import pic6 from "../images/pic6.png";
import correct from "../images/correct.png";
import React, { useState } from "react";
import Popup from "./Popup";
import AffirmNext from "../components/AffirmNext";
import specialwrong from "../images/specialwrong.png";

const LastQuiz = () => {
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
      <h2 style={{ textAlign: "center" }}>Your Last Scenario!</h2>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <img src={pic6} alt="" width="40%" />
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
                  <h1>Correct Answer!</h1>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={correct} alt="" width="40%" />
                  </div>
                  <AffirmNext />
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
                  <h1>Wrong Answer!</h1>
                  <div style={{ paddingTop: "10px" }}>
                    <img src={specialwrong} alt="" width="40%" />
                  </div>
                  <h3>Try Again!</h3>
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

export default LastQuiz;
