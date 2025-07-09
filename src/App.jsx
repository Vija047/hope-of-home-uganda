import React from "react";
import NavbarFunctional from "./components/navbar_functional";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import DonationPage from "./components/pages/dontion";
import MonthlyReports from "./components/pages/reports";
import News from "./components/pages/news";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarFunctional />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/reports" element={<MonthlyReports />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
