import React, { useState } from 'react';
import styles from "../../styles/First.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

export const First = () => {
    const [inputText, setInputText] = useState('');
    const onChangeText = (event) => setInputText(event.target.value);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);//10分タイマー

    const onClickAdd = () => {
        if (inputText === "") return;


    };

    return (
        <>
            <CssBaseline />
            <Card position="static" style={{backgroundColor: "#FDF5DE"}} className={styles.whole}>
                {/*TitleArea*/}
                <div className={styles.title_area}>
                    <p className={styles.title}>アイデアを記入しましょう</p>
                    <p className={styles.title_string}>例：さつまいも，月見</p>
                </div>

                {/*InputArea*/}
                <div className={styles.input_area}>
                    <input placeholder='アイデアを入力' onChangeText />
                    <button>追加</button>
                </div>

                {/*IdeaList*/}
                <div className={styles.idea_area}>
                    <p className={styles.title}>思いついたアイデア</p>
                    <ul>
                        <div className={styles.idea_list}>
                            <li>サツマイモ</li>
                            <button>削除</button>
                        </div>
                        <div className={styles.idea_list}>
                            <li>松茸</li>
                            <button>削除</button>
                        </div>
                        <div className={styles.idea_list}>
                            <li>松茸</li>
                            <button>削除</button>
                        </div>
                    </ul>
                </div>
            </Card>
        </>
    );
}; 
