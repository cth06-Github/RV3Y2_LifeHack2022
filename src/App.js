import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
