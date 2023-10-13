import React, { useState } from "react";
import styles from "../../styles/Explain.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import {StyledEngineProvider} from '@mui/material';

export const Whatabkt_explain = () => {
    return (
        <>
        <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div className={styles.flex}>
            <div className={styles.story}>
                <p className={styles.section_story}>ストーリー</p>
                <p>プレイヤー達はとある世界の魔術師見習いとして世紀の魔術書「<span>アブラカタブレイン</span>」の完成を目指し、呪文研究(アイデア出し)に臨む。</p>
                <p>呪文(アイデア)を共有し、評価しあうことで呪文(アイデア)は洗練されたものとなる。</p>
                <p>一番評価の良い呪文(アイデア)は魔術書の1節として追加される。</p>
            </div>
            <div>
                <img src='./img/abkt_explain.png' alt="実験" className={styles.img_story} />
            </div>
        </div>
        <div className={styles.flex}>
            <div>
                <img src='./img/how_to_test.png' alt="テスト中" className={styles.img_how_to} />
            </div>
            <div className={styles.how_to}>
                <p className={styles.section_how_to}>プレイの流れ</p>
                <p className={styles.phase}>準備段階</p>
                <p>ホストプレイヤーが呪文を唱える準備として事前情報を記入</p>
                <p>(例)昼食になに食べる？</p>
                <p>メンバーに部屋を共有して準備完了!!</p>
                <p className={styles.phase}>第一フェーズ</p>
                <p>お題から連想されるフレーズを出していく</p>
                <p className={styles.phase}>第二フェーズ</p>
                <p>フレーズをプレイヤーにランダムに再分配</p>
                <p>プレイヤーは配られたフレーズを基にアイデアを考える</p>
                <p className={styles.phase}>第三フェーズ</p>
                <p>アイデアを全員で共有し、評価しあう</p>
            </div>
        </div>
     
        </StyledEngineProvider>
        </>
    );
};