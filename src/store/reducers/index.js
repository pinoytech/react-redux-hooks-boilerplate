import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import loggedInReducer from "./loggedInReducer";
import nameReducer from "./nameReducer";
import lastNameReducer from "./lastNameReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  loggedIn: loggedInReducer,
  name: nameReducer,
  lastNameReducer
});

export default rootReducer;
