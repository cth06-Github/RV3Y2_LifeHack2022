import { combineReducers } from "redux";

//Reducer logic
const initialState = [];
const blogReducer = (state = initialState, action) => {
  if (action.type === "blog/add") {
    return [
      ...state,
      {
        title: action.payload
      }
    ];
  }
  if (action.type === "blog/delete") {
    return state.filter((x, index) => index !== action.payload);
  }

  return state;
};

export const rootReducer = combineReducers({
  blog: blogReducer
});
