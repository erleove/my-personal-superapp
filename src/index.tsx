import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app";
import { CoreLayout } from "./components/Layouts/components/Core/Core";

const root = document.getElementById("app");

if (root)
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
