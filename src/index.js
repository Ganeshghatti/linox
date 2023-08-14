import React from "react";
import ReactDOM from "react-dom/client";
import FullHome from "./components/FullHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./components/Market/Market";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FullHome/>} />
      <Route path="/market" element={<Market/>}/>
    </Routes>
  </BrowserRouter>
);
