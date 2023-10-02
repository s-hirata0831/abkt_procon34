import React, { useState } from 'react';
import FSModule from "../../styles/FirstSide.module.css";
import Button from "@mui/material/Button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CssBaseline from '@mui/material/CssBaseline';
import { useStopwatch } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        restart,
    } = useStopwatch({autoStart: true});

    return (
        <div className='time'>
            <span>{hours}</span>時間<span>{minutes}</span>分<span>{seconds}秒</span>
        </div>
    );
}

export const FirstSide = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds());//10分タイマー

    return (
        <>
            <CssBaseline />
            <div className={FSModule.side_bar}>
                <Card position="static" style={{ backgroundColor: "#FDF5DE" }}>
                    <List component="nav">
                        <div className={FSModule.icon_around}>
                            <img src='../img/brainFirst.png' className="{FSModule.icon_around}" />
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
                            <Button variant="contained" endIcon={<AutoFixHighIcon />} size="small" className={FSModule.magic_button}>
                                すべて唱えた！
                            </Button>
                            <Button variant="contained" endIcon={<PsychologyAltIcon />} size="small" className={FSModule.magic_button}>
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
        </>
    );
};