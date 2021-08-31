import { combineReducers } from "redux";
import favReducer from "./favReducer";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  fav: favReducer
});

export default rootReducer;