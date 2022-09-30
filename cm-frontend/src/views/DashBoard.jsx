import React from "react";
import Alpha from "./Alpha";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import NoPage from "../error/NoPage";
import Index from "./Index";
import Home from "./Home";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import Profile3 from "./Profile3";
import NoPage2 from "../error/NoPage2";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default function DashBoard() {
  return (
    <div className="container px-5">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile2" element={<Profile2 />} />
          <Route path="profile3" element={<Profile3 />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NoPage2 />} />
        </Route>
      </Routes>
    </div>
  );
}
