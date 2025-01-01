import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>Error occurred while loading this app.</div>;
  },
});

// Export Single-SPA lifecycle functions
export const { bootstrap, mount, unmount } = lifecycles;
if (!window.singleSpaNavigate) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
