import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
(() => {
  kintone.events.on("app.record.index.show", (e) => {
    const $el = document.createElement("div");
    $el.setAttribute("id", "js-customize-container");
    document.body.appendChild($el);
    ReactDOM.render(<App />, $el);
  });
})();
