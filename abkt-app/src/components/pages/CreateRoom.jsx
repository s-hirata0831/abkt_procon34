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

    //入力内容が規則に沿っているかの評価関数
    const [teamNameError, setTeamNameError] = useState(false);
    const [ideaThemeError, setIdeaThemeError] = useState(false);
    const [exampleIdeaError, setExampleIdeaError] = useState(false);
    const [peopleAmountError, setPeopleAmountError] = useState(false);
    const [limitSecondPhaseError, setLimitSecondPhaseError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const teamNameInputRef = useRef(null);
    const ideaThemeInputRef = useRef(null);
    const exampleIdeaInputRef = useRef(null);
    const peopleAmountInputRef = useRef(null);
    const limitSecondPhaseInputRef = useRef(null);
    const passwordInputRef = useRef(null);

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

    const handleChange = (inputRef, setError) => {
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setError(true);
            } else {
                setError(false);
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
                            required
                            margin="normal"
                            error={teamNameError}
                            inputProps={{ maxLength: 10, minLength: 1 }}
                            inputRef={teamNameInputRef}
                            defaultValue={""}
                            label="チーム名 [10文字以内]"
                            variant="standard"
                            helperText={teamNameInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setTeamName(e.target.value);
                                handleChange(teamNameInputRef, setTeamNameError);
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            error={ideaThemeError}
                            inputProps={{ maxLength: 25, minLength: 1 }}
                            inputRef={ideaThemeInputRef}
                            defaultValue={""}
                            label="アイデア(呪文)を出すテーマ [25文字以内]"
                            variant="standard"
                            helperText={ideaThemeInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setIdeaTheme(e.target.value);
                                handleChange(ideaThemeInputRef, setIdeaThemeError);
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            error={exampleIdeaError}
                            inputProps={{ maxLength: 25, minLength: 1 }}
                            inputRef={exampleIdeaInputRef}
                            defaultValue={""}
                            label="アイデア(呪文)の例 [25文字以内]"
                            variant="standard"
                            helperText={exampleIdeaInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setExampleIdea(e.target.value);
                                handleChange(exampleIdeaInputRef, setExampleIdeaError);
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            error={peopleAmountError}
                            type="number"
                            inputProps={{ min: 2, max: 50 }}
                            inputRef={peopleAmountInputRef}
                            defaultValue={""}
                            label="参加人数 [2人以上]"
                            variant="standard"
                            helperText={peopleAmountInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setPeopleAmount(e.target.value);
                                handleChange(peopleAmountInputRef, setPeopleAmountError);
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            error={limitSecondPhaseError}
                            type="time"
                            inputProps={{ min: "00:30" }}
                            inputRef={limitSecondPhaseInputRef}
                            defaultValue="00:30"
                            label="第2フェーズの制限時間 [30秒以上]"
                            variant="standard"
                            helperText={limitSecondPhaseInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setLimitSecondPhase(e.target.value);
                                handleChange(limitSecondPhaseInputRef, setLimitSecondPhaseError);
                            }}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            error={passwordError}
                            inputProps={{ maxLength: 25, minLength: 2, pattern:"^[0-9A-Za-z]+$" }}
                            inputRef={passwordInputRef}
                            type="password"
                            defaultValue={""}
                            label="パスワード [半角英数字25文字以内]"
                            variant="standard"
                            helperText={passwordInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleChange(passwordInputRef, setPasswordError);
                            }}
                        />
                        <Button variant="outlined" style={{color:"#7882b0"}} onClick={createRoom}>作成</Button>
                    </Box>
                </div>
            </StyledEngineProvider>
        </>
    )
};