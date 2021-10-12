import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const appId = "UeAbfYO3C29W5EHdz5c5BuCItODRdOw8RcHDpAud";
const serverUrl = "https://qvgfrpeymufw.bigmoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
