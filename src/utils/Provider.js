import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import rootReducer from "../redux/store";

const store = createStore(rootReducer);

const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
