import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";

import App from "./modules/app/components/App";

const rootEl = document.getElementById("root");

ReactDOM.render(<Root currentApp={App} />, rootEl);

function Root({ currentApp }) {
  return (
    <BrowserRouter>
      {React.createElement(currentApp)}
    </BrowserRouter>
  );
}

if (module.hot) {
  module.hot.accept("./modules/app/components/App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./modules/app/components/App").default;

    ReactDOM.render(<Root currentApp={NextApp} />, rootEl);
  });
}
