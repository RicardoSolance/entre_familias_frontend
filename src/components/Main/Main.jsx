import React from "react";
import Login from "./Login";
import Home from "./Home";
import Forum from "./Forum";
import Blog from "./Blog";
import Signup from "./Signup";
import Dashboard from "./Dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Forum/>} path="/forum"/>
        <Route element={<Blog/>} path="/blog"/>
        <Route element={<Signup />} path="/signup" />
        <Route element={<Dashboard/>} path="/dashboard"/>
      </Routes>
    </main>
  )
};

export default Main;
