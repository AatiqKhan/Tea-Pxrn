import React from "react";
import Logo from "./logo";
import "./App.css";
import { Main } from "./main";
import { Footer } from "./footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu";
import Store from "./store";
import Gallerysection from "./gallerysection";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gallery" element={<Gallerysection />} />
      </Routes>
    </Router>
  );
}

export default App;
