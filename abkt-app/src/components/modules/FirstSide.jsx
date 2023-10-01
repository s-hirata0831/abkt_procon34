import React, { useState } from 'react';
import FSModule from "../../styles/FirstSide.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunnning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called")
    });

    return (
        <div className='time'>
            <span>{days}</span>日<span>{hours}</span>時間<span>{minutes}</span>分<span>{seconds}秒</span>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button
                onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time);
                }}
            >Restart</button>
        </div>
    );
}

export const FirstSide = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);//10分タイマー

    return (
        <>
            <CssBaseline />
            <div className={FSModule.side_bar}>
                <Card position="static" style={{backgroundColor: "#FDF5DE"}}>
                    <List component="nav">
                        <div className={FSModule.theme}>
                            <p className={FSModule.title}>テーマ</p>
                            <p className={FSModule.themename}>秋の新商品を決める</p>
                        </div>
                        <Divider />
                        <div className={FSModule.time}>
                            <p className={FSModule.title}>制限時間</p>
                            <MyTimer expiryTimestamp={time} />
                        </div>
                        <button>魔法を全て唱えたよ！</button><br />
                        <button>助けて！！！！！！！</button>
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