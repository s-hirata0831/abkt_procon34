import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";  // 修正: importステートメントを正しく修正
import LModule from "../../styles/Login.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const backToHome = () => {
        navigate("/");
    };

    const handleLogin = async () => {
        try {
            const db = getFirestore();
            const usersCollection = collection(db, "users"); // 修正: "users"はFirestoreのコレクション名に置き換えてください

            const q = query(usersCollection, where("id", "==", id), where("password", "==", password));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.docs.length > 0) {
                // ユーザーが見つかった場合の処理
                alert("ログイン成功！");
            } else {
                // ユーザーが見つからなかった場合の処理
                alert("IDまたはパスワードが正しくありません。");
            }
        } catch (error) {
            alert("ログインに失敗しました。エラーが発生しました。");
            console.error(error);
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Box className={LModule.box}>
                    <p className={LModule.title}>ログイン</p>
                    <div className={LModule.around_icon}>
                        <img src='../img/brain.png' className={LModule.icon} alt="Brain Icon" />
                    </div>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="ID"
                        variant="standard"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="パスワード"
                        variant="standard"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Stack spacing={2} my={2} direction="row" justifyContent="end" className={LModule.button_around}>
                        <Button variant="outlined" style={{ color: "#7882b0" }} className={LModule.button_icon} onClick={backToHome}>Homeへ戻る</Button>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0", color: "white" }} className={LModule.button_icon} onClick={handleLogin}>参加</Button>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
};
