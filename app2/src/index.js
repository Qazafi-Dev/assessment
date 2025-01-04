import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const RenderApp = (props) => {
  console.log(props, "kokokokok");
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RenderApp,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here
    return <div>Something went wrong!</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
