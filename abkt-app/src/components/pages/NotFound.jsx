import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../styles/NotFound.module.css';

export const NotFound = () => {
    return (
        <>
            <CssBaseline />
            <div className={styles.page}>
                <h1>404 Not Found</h1>
                <p>お探しのページは見つかりませんでした。</p>
                <Link to={`/`}>Topページに戻る</Link>
            </div>
        </>
    );
}