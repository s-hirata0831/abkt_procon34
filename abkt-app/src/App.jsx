import React from "react";
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/modules/Header';
import { HomePage } from './components/pages/HomePage';
import { DummyHome } from "./components/pages/DummyHome";
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
        <Route path="/DummyHome" element={<DummyHome />} />
        <Route path="/FirstPhase" element={<FirstPhase />} />
        <Route path="/FirstSide" element={<FirstSide />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/Whatabkt_explain" element={<Whatabkt_explain/>} />
        <Route path="/Whatabkt" element={<Whatabkt/>} />
      </Routes>
    </BrowserRouter>
  );
}