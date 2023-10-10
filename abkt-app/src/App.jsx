import React from "react";
import './styles/styles.css';
import './firebase.config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/modules/Header';
import { CreateRoom } from './components/pages/CreateRoom';
import { HomePage } from './components/pages/HomePage';
import { DummyHome } from "./components/pages/DummyHome";
import { FirstPhase } from './components/pages/FirstPhase';
import { FirstSide } from "./components/modules/FirstSide";
import { NotFound } from "./components/pages/NotFound";
import { Room } from "./components/pages/rooms/Room";
import { Login } from "./components/pages/Login";

export const App = () => {
return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DummyHome" element={<DummyHome />} />
        <Route path="/FirstPhase" element={<FirstPhase />} />
        <Route path="/FirstSide" element={<FirstSide />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/Room/:roomId" element={<Room />} />
        <Route path="/Room/:roomId/FirstPhase" element={<FirstPhase />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}