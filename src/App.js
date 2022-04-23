import React from "react";
import {
  Routes,
  Route,

} from "react-router-dom";


import About from "./routes/about/about.component"
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Details from "./routes/details/details.component";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      
        <Route path="details" element={<Details/> } />

      </Route>
    </Routes>
  );
}


