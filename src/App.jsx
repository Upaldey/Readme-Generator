import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import React, { useState, useEffect } from "react";
import useReadmeStore from "./store/readmeStore";
import EditorPage from "./pages/EditorPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { create } from "zustand";
import ReactMarkdown from "react-markdown";
function App() {
  const sections = useReadmeStore((state) => state.sections);

  useEffect(() => {
    localStorage.setItem("readme-builder-state", JSON.stringify(sections));
  }, [sections]);

  return (
    <Router basename="/Readme-Generator">
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
