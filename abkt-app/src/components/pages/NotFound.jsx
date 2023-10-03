import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../styles/NotFound.module.css';
import { StyledEngineProvider } from "@mui/material";

export const NotFound = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className={styles.page}>
                    <h1>404 Not Found</h1>
                    <p>お探しのページは見つかりませんでした。</p>
                    <Link to={`/`}>Topページに戻る</Link>
                </div>
            </StyledEngineProvider>
        </>
    );
}