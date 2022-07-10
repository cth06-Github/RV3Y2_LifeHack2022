import { createStore } from "redux";
import { rootReducer } from "./reducer";
//store logic
export const store = createStore(rootReducer);
