import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detail from "../pages/Detail";
import Home from "../pages/Home";
import React from "react";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
