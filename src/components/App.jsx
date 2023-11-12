import React from "react";
import MainPage from "../Pages/MainPage"; // Assuming you have a file named "index.js" or "index.jsx" in the current directory
import OnePage from "../Pages/OnePage.jsx";
import { Route, Routes } from "react-router-dom";

// You are missing parentheses in the function declaration
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/one" element={<OnePage />} />

    </Routes>
  );
}

export default App; // Fix typo: change "Ap" to "App"
