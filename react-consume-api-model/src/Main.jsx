import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles/style.css";
import "./styles/loading.css";
import "react-toastify/dist/ReactToastify.css";

import MyRoutes from "./routes/routes";
import { RecoilProvider } from "./components/RecoilProvider";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilProvider>
        <Header />
        <MyRoutes />
        <ToastContainer autoClose={3000} className={"toast-container"} />
      </RecoilProvider>
    </BrowserRouter>
  </React.StrictMode>
);
