import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./pages/discover/Discover";
import MakeBurger from "./pages/makeBurger/MakeBurger";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="make-burger" element={<MakeBurger />} />
        <Route path="terms&conditions" element={<Terms />} />
        <Route path="privacy-policy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
