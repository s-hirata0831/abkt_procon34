import React from "react";
import './styles/styles.css';
import './firebase.config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CreateRoom } from './components/pages/CreateRoom';
import { HomePage } from './components/pages/HomePage';
import { DummyHome } from "./components/pages/DummyHome";
import { FirstPhase } from './components/pages/FirstPhase';
import { FirstSide } from "./components/modules/FirstSide";
import { NotFound } from "./components/pages/NotFound";
import { Room } from "./components/pages/rooms/Room";
import { Login } from "./components/pages/Login";
import { ReadyFirst } from "./components/pages/ReadyFirst";
import { Whatabkt_explain } from "./components/modules/Whatabkt_explain";
import { Whatabkt } from "./components/pages/Whatabkt";
import { SecondPhase } from "./components/pages/SecondPhase";
import { LastPhase } from "./components/pages/LastPhase";

export const App = () => {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DummyHome" element={<DummyHome />} />
        <Route path="/FirstPhase" element={<FirstPhase />} />
        <Route path="/FirstSide" element={<FirstSide />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Whatabkt_explain" element={<Whatabkt_explain/>} />
        <Route path="/Whatabkt" element={<Whatabkt/>} />
        <Route path="/SecondPhase" element={<SecondPhase />} />
        <Route path="/LastPhase" element={<LastPhase />} />

        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/Room/:roomId" element={<Room />} />
        <Route path="/Room/:roomId/ReadyFirst" element={<ReadyFirst />} />
        <Route path="/Room/:roomId/FirstPhase" element={<FirstPhase />} />
        <Route path="/Room/:roomId/SecondPhase" element={<SecondPhase />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}