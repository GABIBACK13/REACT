import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Home from "./Pages/Home";
import LoremArticle from "./Pages/LoremArticle";
import Header from "./components/Header";
import Posts from "./Pages/Posts";
import Redirect from "./Pages/Redirect";
import RedirectNormal from "./components/RedirectNormal";
import RedirectRGB from "./components/RedirectRGB";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<LoremArticle />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/redirect" element={<Redirect />}>
          {/* I can use Index, but I need to learn "Outlet props"*/}
          <Route path="flick" element={<RedirectNormal />} />
          <Route path="rgb" element={<RedirectRGB />} />
        </Route>

        <Route path="*" element={() => <h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
