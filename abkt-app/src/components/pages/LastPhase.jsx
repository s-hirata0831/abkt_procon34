import React, { useState } from "react";
import EPModule from "../../styles/LastPhase.module.css";
import Header from '../modules/Header';
import { Last } from "../modules/Last";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { LastSide } from "../modules/LastSide";

export const LastPhase = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className={EPModule.whole}>
          <CssBaseline />
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Last />
            </Grid>
            <Grid item xs={4}>
              <LastSide />
            </Grid>
          </Grid>
        </div>
      </StyledEngineProvider>
    </>
  );
};