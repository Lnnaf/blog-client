import { useEffect, useState } from "react";
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
import PostDetail from "./pages/post-page/PostDetailPage";
import PostDetailPage from "./pages/post-page/PostDetailPage";

function App() {

  useEffect(() => {
    document.title = "Blog";
  }, []);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Righteous"
        rel="stylesheet"
      ></link>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/stories" element={<StoryPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/Dashboard/post" element={<DashBoardPage />} />
        <Route path="/post/*" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
