import React from "react";
import NavbarFunctional from "./components/navbar_functional";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import DonationPage from "./components/pages/dontion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarFunctional />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
