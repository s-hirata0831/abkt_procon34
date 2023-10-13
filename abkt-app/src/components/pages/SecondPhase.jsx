import React, { useState } from "react";
import Header from '../modules/Header';
import FPModule from '../../styles/FirstPhase.module.css';
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Second } from '../modules/Second';
import { SecondSide } from '../modules/SecondSide';

export const SecondPhase = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <div className={FPModule.whole}>
                    <CssBaseline />
                    <Header />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Second />
                        </Grid>
                        <Grid item xs={4}>
                            <SecondSide />
                        </Grid>
                    </Grid>
                </div>
            </StyledEngineProvider>
        </>
    );
};