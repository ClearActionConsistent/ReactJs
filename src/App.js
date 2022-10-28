import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/components/Home";
import AboutPage from "./views/components/About";
import NotFoundPage from "./views/components/NotFound";
import AddTask from "./views/components/AddTask";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTask />} />
      <Route path="/home" exact element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
};

export default App;
