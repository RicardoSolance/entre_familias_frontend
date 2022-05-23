import React from "react";
import Home from "./Home";
import Forum from "./Forum";
import Blog from "./Blog";
import Dashboard from "./Dashboard/Dashboard";
import Maintenance from "./Maintenance";
import Privacy_politics from "./Privacy_politics/Privacy_politics";
import Cookies_politics from "./cookies_politics/cookies_politics";
import Profile from './Profile/Profile';
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
        <Route element={<Privacy_politics/>} path="/privacy"/>
        <Route element={<Cookies_politics/>} path="/cookies"/>
        <Route element={<Profile/>} path="/profile"/>
      </Routes>
    </main>
  )
};

export default Main;
