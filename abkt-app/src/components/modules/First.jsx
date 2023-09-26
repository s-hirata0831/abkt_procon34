import React, { useState } from 'react';
import styles from "../../styles/First.module.css";
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
        onExpire: () => console.warn("onExpire called")});

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
            {/*SideBar*/}
            <div className={styles.side_bar}>
                <div className={styles.theme}>
                    <p>テーマ</p>
                    <p>秋の新商品を決める</p>
                </div>
                <div className={styles.time}>
                    <p>制限時間</p>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <button>魔法を全て唱えたよ！</button><br />
                <button>助けて！！！！！！！</button>
                <div className={styles.member}>
                    <p>メンバー</p>
                    <ul>
                        <li>舞鶴太郎</li>
                        <li>高専花子</li>
                        <li>舞鶴蟹子</li>
                    </ul>
                </div>
            </div>

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
                </ul>
            </div>
        </>
    );
}; 
