import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return(
        <>
        <div>
            <div className={styles.home_header}>
                <Link to={`/FirstPhase/`}>
                    <img src='./img/brain.png' className={styles.icon} />
                </Link>
            </div>
        </div>
        </>
    );
}