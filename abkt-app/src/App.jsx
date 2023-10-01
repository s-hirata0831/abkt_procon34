import React from "react";
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/modules/Header';
import { HomePage } from './components/pages/HomePage';
import { Initialize } from "./components/pages/Initialize";
import { FirstPhase } from './components/pages/FirstPhase';
import { FirstSide } from "./components/modules/FirstSide";
import { NotFound } from "./components/pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Initialize" element={<Initialize />} />
        <Route path="/FirstPhase" element={<FirstPhase />} />
        <Route path="/FirstSide" element={<FirstSide />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
/*<Button variant="outlined">
          <Link to="/FirstPhase">第1フェーズ</Link>
        </Button>*/