import React, { useState, useRef } from "react";
import CRModule from "../../styles/CreateRoom.module.css"
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import db from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export const CreateRoom = () => {
    const [password, setPassword] = useState("");
    const [teamName, setTeamName] = useState("");
    const [ideaTheme, setIdeaTheme] = useState("");
    const [exampleIdea, setExampleIdea] = useState("");
    const [limitSecondPhase, setLimitSecondPhase] = useState("");
    const [peopleAmount, setPeopleAmount] = useState("");
    const inputRef = useRef(null);
    const [inputError, setInputError] = useState(false);

    const createRoom = async () => {
        //ランダムなIDを持つ部屋ドキュメント(Collection)を生成
        const roomCollection = collection(db, "rooms");
        //部屋のデータ
        const roomData = await addDoc(roomCollection, {
            //保存したいデータ
            password: password,
            teamName: teamName,
            ideaTheme: ideaTheme,
            exampleIdea: exampleIdea,
            limitSecondPhase: limitSecondPhase,
            peopleAmount: peopleAmount
        });
    };

    const handleChange = () => {
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setInputError(true);
            } else {
                setInputError(false);
            }
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className={CRModule.around_page}>
                    <Box className={CRModule.box}>
                        <p className={CRModule.title}>部屋を作成</p>
                        <div className={CRModule.around_icon}>
                            <img src='../img/brain_book.png' className={CRModule.icon} />
                        </div>
                        <p className={CRModule.body_text}>全て入力必須項目です。</p>
                        <TextField
                            fullWidth
                            margin="normal"
                            error={inputError}
                            inputProps={{ maxLength: 10, minLength: 2 }}
                            inputRef={inputRef}
                            defaultValue={""}
                            label="チーム名"
                            variant="standard"
                            helperText={inputRef?.current?.validationMessage}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            error={inputError}
                            inputProps={{ maxLength: 10, minLength: 2 }}
                            inputRef={inputRef}
                            defaultValue={""}
                            label="アイデア(呪文)を出すテーマ"
                            variant="standard"
                            helperText={inputRef?.current?.validationMessage}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </Box>
                </div>
            </StyledEngineProvider>
        </>
    )
};