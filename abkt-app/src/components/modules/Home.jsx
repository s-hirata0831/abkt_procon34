import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {StyledEngineProvider} from '@mui/material';

export const Home = () => {
    return(
        <>
        <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div className={styles.icon}>
            <img src='./img/home.icon.png' className={styles.icon} />
        </div>
        
        <div className={styles.home_header} >
            <Link to={`/FirstPhase/`}>
            <Button variant="contained" style={{backgroundColor:"#7882b0"}} size="large" className={styles.buttons}>
                会議を開く
            </Button>
            </Link>
            </div>
        <div className={styles.home_header} >
            <Button variant="outlined"  size="large" className={styles.buttons}>
                    会議に参加する
            </Button>
        </div>

        </StyledEngineProvider>
        </>
    );
}