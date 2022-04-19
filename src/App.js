import React from "react";
import {
  Routes,
  Route,

} from "react-router-dom";

import Home from "./routes/home/home.component";
import About from "./routes/about/about.component"
import Navigation from "./routes/navigation/navigation.component";
import Dashboard from "./routes/dashboard/dashboard.component";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}


