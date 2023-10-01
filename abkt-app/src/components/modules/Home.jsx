import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return(
        <>
            <div className={styles.home_header}>
                <img src='./img/home_back.JPG' />
                <Link to={`/FirstPhase/`}>
                    <img src='./img/brain.png' className={styles.icon} />
                </Link>
                <p className={styles.title}>アブラカタブレイン</p>
            </div>
            <p className={styles.text}>上記画像のアイコンをクリックするとプレイを始められます。</p>
        </>
    );
}