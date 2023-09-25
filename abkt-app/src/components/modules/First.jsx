import React, { useState } from 'react';
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
            <div className='side-bar'>
                <div className='theme'>
                    <p>テーマ</p>
                    <p>秋の新商品を決める</p>
                </div>
                <div className='time'>
                    <p>制限時間</p>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <button>魔法を全て唱えたよ！</button><br />
                <button>助けて！！！！！！！</button>
                <div className='member'>
                    <p>メンバー</p>
                    <ul>
                        <li>舞鶴太郎</li>
                        <li>高専花子</li>
                        <li>舞鶴蟹子</li>
                    </ul>
                </div>
            </div>

            {/*TitleArea*/}
            <div className="title-area">
                <p className='title'>アイデアを記入しましょう</p>
                <p>例：さつまいも，月見</p>
            </div>

            {/*InputArea*/}
            <div className="input-area">
                <input placeholder='アイデアを入力' onChangeText />
                <button>追加</button>
            </div>

            {/*IdeaList*/}
            <div className='idea-area'>
                <p className="title">思いついたアイデア</p>
                <ul>
                    <div className='idea-list'>
                        <li>サツマイモ</li>
                        <button>削除</button>
                    </div>
                    <div className='idea-list'>
                        <li>松茸</li>
                        <button>削除</button>
                    </div>
                </ul>
            </div>
        </>
    );
}; 
