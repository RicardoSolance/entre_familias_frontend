import React from "react";
import Home from "./Home";
import Forum from "./Forum";
import Blog from "./Blog";
import Dashboard from "./Dashboard/Dashboard";
import Maintenance from "./Maintenance";
import {Route, Routes} from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Forum/>} path="/forum"/>
        <Route element={<Blog/>} path="/blog"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<Maintenance/>} path="/maintenance"/>
      </Routes>
    </main>
  )
};

export default Main;
