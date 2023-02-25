import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageDeDemarage from "./pages/PageDeDemarrage";
import QuiSommesNous from "./pages/QuiSommesNous";
import Logement from "./pages/Logement";
import PageErreur from "./pages/PageErreur";
import Header from "./composants/Entete";
import Footer from "./composants/PiedPage";
import "./css/Style.css";
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PageDeDemarage />} />
          <Route path="/QuiSommesNous" element={<QuiSommesNous />} />
          <Route path="/logement/:fichelogement" element={<Logement />} />
          <Route path="*" element={<PageErreur />} />
        </Routes>
        <Footer />
      </Router>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
