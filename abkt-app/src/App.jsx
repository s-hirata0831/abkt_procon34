import React from "react";
import { Button } from "@mui/material";
import Header from './components/modules/Header';

export const App = () => {
  return (
    <>
    <Header />
    <p>Hello Abkt!</p>
    <Button>日本人</Button>
    <Button variant="contained">contained</Button>
    <Button variant="outlined">outlined</Button>
    </>
  );
};