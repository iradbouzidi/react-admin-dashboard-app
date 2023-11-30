import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// https://www.youtube.com/watch?v=jx5hdo50a2M&ab_channel=JavaScriptMastery
// https://github1s.com/adrianhajdin/project_syncfusion_dashboard
