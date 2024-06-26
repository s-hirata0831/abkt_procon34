import React, { useState } from 'react';
import FSModule from "../../styles/FirstSide.module.css";
import { StyledEngineProvider } from "@mui/material";
import Button from "@mui/material/Button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CssBaseline from '@mui/material/CssBaseline';
import { useStopwatch, Navigate } from "react-timer-hook";
import { useNavigate } from 'react-router-dom';

function Timer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        restart,
    } = useStopwatch({ autoStart: true });

    return (
        <div className='time'>
            <span>{hours}</span>時間<span>{minutes}</span>分<span>{seconds}秒</span>
        </div>
    );
}

export const FirstSide = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds());

    const navigate = useNavigate();
    const goOnSecond = () => {
        navigate("/room/")
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className={FSModule.side_bar}>
                    <Card position="static" style={{ backgroundColor: "#FDF5DE" }}>
                        <List component="nav">
                            <div className={FSModule.icon_around}>
                                <img src={`${process.env.PUBLIC_URL}/img/brainFirst.png`} className="{FSModule.icon_around}" />
                            </div>
                            <Divider />
                            <div className={FSModule.theme}>
                                <p className={FSModule.title}>テーマ</p>
                                <p className={FSModule.themename}>秋の新商品を決める</p>
                            </div>
                            <Divider />
                            <div className={FSModule.time}>
                                <p className={FSModule.title}>経過時間</p>
                                <div className={FSModule.time_body}>
                                    <Timer expiryTimestamp={time} />
                                </div>
                            </div>
                            <div className={FSModule.button_area}>
                                <Button variant="contained" endIcon={<AutoFixHighIcon />} style={{ backgroundColor: "#7882b0" }} size="small" className={FSModule.magic_button} onClick={goOnSecond}>
                                    すべて唱えた！
                                </Button>
                                <Button variant="contained" endIcon={<PsychologyAltIcon />} style={{ backgroundColor: "#7882b0" }} size="small" className={FSModule.magic_button}>
                                    助けて！！！
                                </Button>
                            </div>
                            <Divider />
                            <div className={FSModule.member}>
                                <p className={FSModule.title}>メンバー</p>
                                <ul>
                                    <li>舞鶴太郎</li>
                                    <li>高専花子</li>
                                    <li>舞鶴蟹子</li>
                                </ul>
                            </div>
                        </List>
                    </Card>
                </div>
            </StyledEngineProvider>
        </>
    );
};