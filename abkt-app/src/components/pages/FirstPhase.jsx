import React, { useState } from "react";
import Header from '../modules/Header';
import FPModule from '../../styles/FirstPhase.module.css';
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { First } from '../modules/First';
import { FirstSide } from '../modules/FirstSide';

export const FirstPhase = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <div className={FPModule.whole}>
                    <CssBaseline />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <First />
                        </Grid>
                        <Grid item xs={4}>
                            <FirstSide />
                        </Grid>
                        <Grid item xs={8} className={FPModule.icon_around}>
                            <img src='../img/brainFirst.png' />
                        </Grid>
                    </Grid>
                </div>
            </StyledEngineProvider>
        </>
    );
};