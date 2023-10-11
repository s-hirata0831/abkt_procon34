import React, { useState, useRef, useEffect } from "react";
import CRModule from "../../styles/CreateRoom.module.css";
import { useNavigate } from 'react-router-dom'
import { CreateRoomModal } from "../modules/CreateRoomModal";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import db from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const CreateRoom = () => {
    const [password, setPassword] = useState("");
    const [teamName, setTeamName] = useState("");
    const [ideaTheme, setIdeaTheme] = useState("");
    const [exampleIdea, setExampleIdea] = useState("");
    const [limitSecondPhase, setLimitSecondPhase] = useState("");
    const [peopleAmount, setPeopleAmount] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [roomId, setRoomId] = useState(null);
    const [roomPass, setRoomPass] = useState("");

    //auth
    const [registerId, setRegisterId] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

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

    // createRoom 関数内での検証とエラーメッセージの設定
    const createRoom = async () => {
        // フォームの各項目の検証を行う
        const isTeamNameValid = teamNameInputRef.current && teamNameInputRef.current.validity.valid;
        const isIdeaThemeValid = ideaThemeInputRef.current && ideaThemeInputRef.current.validity.valid;
        const isExampleIdeaValid = exampleIdeaInputRef.current && exampleIdeaInputRef.current.validity.valid;
        const isPeopleAmountValid = peopleAmountInputRef.current && peopleAmountInputRef.current.validity.valid;
        const isLimitSecondPhaseValid = limitSecondPhaseInputRef.current && limitSecondPhaseInputRef.current.validity.valid;
        const isPasswordValid = passwordInputRef.current && passwordInputRef.current.validity.valid;

        // 各項目の検証結果をもとにエラーステートを更新
        setTeamNameError(!isTeamNameValid);
        setIdeaThemeError(!isIdeaThemeValid);
        setExampleIdeaError(!isExampleIdeaValid);
        setPeopleAmountError(!isPeopleAmountValid);
        setLimitSecondPhaseError(!isLimitSecondPhaseValid);
        setPasswordError(!isPasswordValid);

        // すべての項目が正しく入力されているか確認
        if (isTeamNameValid && isIdeaThemeValid && isExampleIdeaValid && isPeopleAmountValid && isLimitSecondPhaseValid && isPasswordValid) {
            // 正しく入力されていれば部屋を作成
            const roomCollection = collection(db, "rooms");   //ランダムなIDを持つ部屋(Collection)ドキュメントを生成
            //部屋のデータ
            const roomData = await addDoc(roomCollection, {
                password: password,
                teamName: teamName,
                ideaTheme: ideaTheme,
                exampleIdea: exampleIdea,
                limitSecondPhase: limitSecondPhase,
                peopleAmount: peopleAmount
            });

            // 新しいメールアドレスを設定
            const newRegisterId = roomData.id + '@example.com';
            setRegisterId(newRegisterId);

            try {
                await createUserWithEmailAndPassword(
                    auth,
                    newRegisterId,
                    password
                );
            } catch (error) {
                console.error("エラー発生", error);
                alert("正しく入力してください");
            }

            setRoomId(roomData.id);
            setPassword(String(password));
            setModalOpen(true);

        } else {
            // 入力に誤りがある場合はエラーメッセージを表示
            alert("入力に誤りがあります。確認してください。");
        }
    };

    useEffect(() => {
        console.log("登録されたメアド:", registerId);
    },[registerId]);

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

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
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
                            inputProps={{ maxLength: 40, minLength: 1 }}
                            inputRef={exampleIdeaInputRef}
                            defaultValue={""}
                            label="アイデア(呪文)の例 [40文字以内]"
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
                            inputProps={{ maxLength: 25, minLength: 6, pattern: "^[0-9A-Za-z]+$" }}
                            inputRef={passwordInputRef}
                            type="password"
                            defaultValue={""}
                            label="パスワード [半角英数字6文字以上25文字以内]"
                            variant="standard"
                            helperText={passwordInputRef?.current?.validationMessage}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setRoomPass();
                                handleChange(passwordInputRef, setPasswordError);
                            }}
                        />
                        <Stack spacing={2} my={2} direction="row" justifyContent="end" className={CRModule.button_around}>
                            <Button variant="outlined" style={{ color: "#7882b0" }} className={CRModule.button_icon} onClick={backToHome}>Homeへ戻る</Button>
                            <Button variant="contained" style={{ backgroundColor: "#7882b0" }} className={CRModule.button_icon} onClick={createRoom}>完了</Button>
                        </Stack>

                        {modalOpen && (
                            <Modal
                                open={modalOpen}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                className={CRModule.modal}
                            >
                                <Box className={CRModule.modal_box}>
                                    <CreateRoomModal roomId={roomId} password={password} />
                                </Box>
                            </Modal>
                        )}
                    </Box>
                </div>
            </StyledEngineProvider>
        </>
    )
};