import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Present from "./Present";

const App = () => {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/present"} element={<Present/>}/>
    </Routes>
    </>
  );
};

export default App;
