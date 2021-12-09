import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function MainRouter() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
