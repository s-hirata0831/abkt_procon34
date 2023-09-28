import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/modules/Header';
import { HomePage } from './components/pages/HomePage';
import { FirstPhase } from './components/pages/FirstPhase';
import { FirstBar } from "./components/modules/FirstBar";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FirstPhase" element={<FirstPhase />} />
        <Route path="/FirstBar" element={<FirstBar />} />
      </Routes>
    </BrowserRouter>
  );
};
/*<Button variant="outlined">
          <Link to="/FirstPhase">第1フェーズ</Link>
        </Button>*/