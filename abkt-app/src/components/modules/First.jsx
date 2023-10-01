import React, { useState } from 'react';
import styles from "../../styles/First.module.css";
import AddCommentIcon from '@mui/icons-material/AddComment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';

export const First = () => {

    return (
        <>
            <CssBaseline />
            <Card position="static" style={{ backgroundColor: "#FDF5DE" }} className={styles.whole}>
                {/*TitleArea*/}
                <div className={styles.title_area}>
                    <p className={styles.title}>アイデアを記入しましょう</p>
                    <p className={styles.title_string}>例：さつまいも，月見</p>
                </div>

                {/*InputArea*/}
                <div className={styles.input_area}>
                    <div className={styles.input_form}>
                        <TextField label={'アイデアを入力'} variant="filled" />
                    </div>
                    <div className={styles.input_button}>
                        <Button variant="contained" startIcon={<AddCommentIcon />} style={{backgroundColor:"#7882b0"}} size="large">
                            追加
                        </Button>
                    </div>
                </div>

                {/*IdeaList*/}
                <div className={styles.idea_area}>
                    <p className={styles.title}>思いついたアイデア</p>
                    <ul>
                        <div className={styles.idea_list}>
                            <li>サツマイモ</li>
                            <Button variant="contained" startIcon={<DeleteOutlineIcon />} style={{backgroundColor:"#7882b0"}} size="small">
                                削除
                            </Button>
                        </div>
                        <div className={styles.idea_list}>
                            <li>松茸</li>
                            <Button variant="contained" startIcon={<DeleteOutlineIcon />} style={{backgroundColor:"#7882b0"}} size="small">
                                削除
                            </Button>
                        </div>
                        <div className={styles.idea_list}>
                            <li>松茸</li>
                            <Button variant="contained" startIcon={<DeleteOutlineIcon />} style={{backgroundColor:"#7882b0"}} size="small">
                                削除
                            </Button>
                        </div>
                    </ul>
                </div>
            </Card>
        </>
    );
}; 
