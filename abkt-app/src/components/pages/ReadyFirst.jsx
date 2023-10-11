import React, { useState } from "react";
import Header from '../modules/Header';
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

export const ReadyFirst = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
            </StyledEngineProvider>
        </>
    )
};