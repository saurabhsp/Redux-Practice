import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Wrap your App component with the Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
