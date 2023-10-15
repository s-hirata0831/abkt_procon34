import React, { useState } from 'react';
import styles from "../../styles/First.module.css";
import { StyledEngineProvider } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import db from "../../firebase.config";
import { Link } from "react-router-dom";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebase.config.js";

export const Second = () => {
    const [ideaText, setIdeaText] = useState("");
    const [idea, setIdea] = useState([]);
    const onChangeText = (event) => setIdeaText(event.target.value);

    const onClickAdd = () =>{
        if (ideaText === "") return;
        const newIdea = [...idea, ideaText];
        setIdea(newIdea);
        setIdeaText("");
    };

    const onClickDelete = (index) => {
        const newIdea = [...idea];
        newIdea.splice(index, 1);
        setIdea(newIdea);
    }

    const [jumon, setJumon] = useState("");
    const inJumon = async () => {
        const jumonCollection = collection(db, "jumons");
        const jumonData = await addDoc(jumonCollection, {
            jumon : jumon
        });
    }
    return (
        <>
            <StyledEngineProvider injectFijumonrst>
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
                            <TextField label={'アイデアを入力'} variant="filled" value={ideaText} onChange={onChangeText} />
                        </div>
                        <div className={styles.input_button}>
                            <Button variant="contained" startIcon={<AddCommentIcon />} style={{ backgroundColor: "#7882b0" }} size="large" onClick={onClickAdd}>
                                追加
                            </Button>
                        </div>
                    </div>

                    {/*Shuffled list*/}
                    <p className={styles.title}>シャッフルされたアイデア</p>
                    <ul>
                        <li>
                            栗ご飯
                        </li>
                        <li>
                            まつたけ
                        </li>
                        <li>
                            読書とつなげる
                        </li>
                    </ul>

                    {/*IdeaList*/}
                    <div className={styles.idea_area}>
                        <p className={styles.title}>思いついたアイデア</p>
                        <ul>
                            {idea.map((list, index) => {
                                return (
                                    <div key={list} className={styles.idea_list}>
                                        <li>{list}</li>
                                        <Button variant="contained" startIcon={<DeleteOutlineIcon />} style={{backgroundColor: "#7882b0"}} size="small" onClick={() => onClickDelete(index)}>削除</Button>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </Card>
            </StyledEngineProvider>
        </>
    );
}; 
