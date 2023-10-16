import ESModule from "../../styles/LastSide.module.css";
import { StyledEngineProvider } from "@mui/material";
import Card from "@mui/material/Card";
//import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import CssBaseline from "@mui/material/CssBaseline";

import React from "react";

export const LastSide = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div className={"${ESModule.right} ${ESModule.side_bar} "}>
          <Card position="static" style={{ backgroundColor: "#FDF5DE" }}>
            <List component="nav">
              <div className={ESModule.title}>ログ</div>
              <Divider />
              <div className={ESModule.idealist}>
                <div className={ESModule.idea}>
                  肉丸うどん,たまらない一品です。
                </div>
                <div className={ESModule.idea}>栗</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>イモ</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
                <div className={ESModule.idea}>鮎</div>
              </div>
            </List>
          </Card>
        </div>
      </StyledEngineProvider>
    </>
  );
};