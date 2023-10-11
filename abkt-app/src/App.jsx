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
import { Whatabkt_explain } from "./components/modules/Whatabkt_explain";
import { Whatabkt } from "./components/pages/Whatabkt";

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
        <Route path="/Whatabkt_explain" element={<Whatabkt_explain/>} />
        <Route path="/Whatabkt" element={<Whatabkt/>} />
      </Routes>
    </BrowserRouter>
  );
};
/*<Button variant="outlined">
          <Link to="/FirstPhase">第1フェーズ</Link>
        </Button>*/