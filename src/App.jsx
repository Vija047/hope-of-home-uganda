import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import DonationPage from "./components/pages/dontion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
