import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import HomePage from "./pages/home-page/HomePage";
import AboutMePage from "./pages/about-me-page/AboutMePage";
import Navbar from "./components/navbar/Navbar";
import PostPage from "./pages/post-page/PostPage";
import StoryPage from "./pages/story-page/StoryPage";
import DashBoardPage from "./pages/admin/dashboard-page/Dashboad";

import "./App.css";

function AdminApp() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Righteous"
        rel="stylesheet"
      ></link>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/stories" element={<StoryPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </div>
  );
}

export default AdminApp;