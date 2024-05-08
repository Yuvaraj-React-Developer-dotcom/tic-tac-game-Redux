import React from "react";
import { Routes, Route } from "react-router-dom";
import TicTacScreen from "../pages/TicTacScreen";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TicTacScreen />}></Route>
    </Routes>
  );
};

export default MainRouter;
