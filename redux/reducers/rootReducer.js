// import totalReducer from "./totalReducer";
import { combineReducers } from "redux";
// import walletReducer from "./walletReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  // total: totalReducer,
  // wallet: walletReducer,
});

export default rootReducer;
