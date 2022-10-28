import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store,  { persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter >
        <ToastContainer />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
