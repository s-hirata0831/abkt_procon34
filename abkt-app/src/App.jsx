import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/modules/Header';
import { First } from './components/modules/First';
import { FirstPhase } from './components/pages/FirstPhase';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FirstPhase />} />
        <Route path="/First" element={<First />} />
      </Routes>
    </BrowserRouter>
  );
};
/*<Button variant="outlined">
          <Link to="/FirstPhase">第1フェーズ</Link>
        </Button>*/