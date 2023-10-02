import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return(
        <>
            <div className={styles.home_header}>
                <img src='./img/home_back.rokuta.jpg' />
                <Link to={`/FirstPhase/`}>
                    <img src='./img/brain.png' className={styles.icon} />
                </Link>
                <p className={styles.title}>アブラカタブレイン</p>
                <p className={styles.hold}>会議を開く</p>
                <p className={styles.join}>会議に参加する</p>
            </div>
            <div className={styles.what}>
                
                   <p className={styles.what_abkt}>What'sアブラカタブレイン</p>

               
                <div className={styles.explain_order}>
                   <div className={styles.explain}>
                       ・<span>ロールプレイング</span>と<span>ブレインストーミング</span>を融合させた画期的なアイデア出しの場をオンライン上で実現するシステム
                   </div>
                   <div className={styles.explain}>
                   ・各参加者にロールを割り当て、そのロールになりきってアイデア出しを行う
                   </div>
                </div>
            </div>
            
                <p className={styles.detail}>詳細はこちら</p>
                <img className={styles.book} src='./img/home_book.png'/>
            
            <div>
                <p className={styles.text}>大魔導書アブラカタブレイン</p>
            </div>
        </>
    );
}