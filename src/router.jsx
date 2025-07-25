import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SuccessPage from "./pages/SuccessPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import Blog from "./pages/BlogPage";
import BachelorPage from "./pages/BachelorPage";
import App from "./App";
import HomePage from "./pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/bachelor" element={<BachelorPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}
