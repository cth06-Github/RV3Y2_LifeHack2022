import AwareNext from "../components/AwareNext";

const HomePage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Aware, Act, Affirm</h1>
      <h2 style={{ textAlign: "center" }}>
        Reducing food waste for a better Singapore!
      </h2>
      <p
        style={{
          textAlign: "center",
          padding: "40px",
          border: "4px solid green"
        }}
      >
        Thank you for visiting this website! Through this interactive website,
        we hope that you will have an enjoyable time understanding the food
        waste situation in Singapore and how you can play a part! It is
        estimated that you will only take about 5mins!
      </p>
      <br />
      <div>
        <AwareNext />
      </div>
    </>
  );
};

export default HomePage;
