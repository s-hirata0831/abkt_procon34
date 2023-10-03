import React from "react";
import DHomeModule from "../../styles/DummyHome.module.css";
import { StyledEngineProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import Modal from "@mui/material/Modal";

export const DummyHome = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className={DHomeModule.DummyHome}>
                    <div className={DHomeModule.title_icon}>
                        <img src='../img/title_around_white.png' className={DHomeModule.icon} />
                    </div>
                    <div className={DHomeModule.button_area}>
                        <Button variant="outlined" style={{ color: "#666" }} size="large" className={DHomeModule.dummy_button}>部屋に入る</Button>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0" }} size="large" className={DHomeModule.dummy_button}> 部屋を作る</Button>
                    </div>
                </div>
            </StyledEngineProvider>
        </>
    );
}