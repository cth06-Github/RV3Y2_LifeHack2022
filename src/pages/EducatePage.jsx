import ActionNext from "../components/ActionNext";
import BackToHome from "../components/BackToHome";

const EducatePage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Aware</h1>
      <h2 style={{ textAlign: "center" }}>
        Let's understand the severity of foodwaste!
      </h2>

      <div style={{ textAlign: "justify" } && { padding: 50 }}>
        <p style={{ fontSize: 30 }}>
          <b>Did you know?</b>
        </p>
        <p> According to towardszerowaste website:</p>
        <p>
          "Food waste is one of the <b>biggest</b> waste streams in Singapore
          and the amount of food waste generated has grown by around 20% over
          the last 10 years. In 2019, Singapore generated around 744 million kg
          of food waste. That is equivalent to 2 bowls of rice per person per
          day, or around 51,000 double decker buses. Singapore imports over 90%
          of our total food supply!"{" "}
        </p>
        <p>
          Quoted from: Towards Zero Waste Singapore. (n.d.). Food Waste.
          Retrieved from https://www.towardszerowaste.gov.sg/foodwaste/{" "}
        </p>
        {""}

        <p>
          Now that we understand the severity of the food waste situation, let's
          us click next to see what we can do to combat food waste.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ActionNext />
        <BackToHome />
      </div>
    </>
  );
};

export default EducatePage;
