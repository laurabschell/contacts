import { combineReducers } from "redux";
import favReducer from "./favReducer";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  favReducer: favReducer
});

export default rootReducer;