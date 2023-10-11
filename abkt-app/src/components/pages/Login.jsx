import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../../firebase.config";
import LModule from "../../styles/Login.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const Login = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    //Login
    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSubmit = async () => {
        //e.preventDefault();
        //const inId = loginId + '@example.com';
        //setLoginId(inId);

        try {
            await signInWithEmailAndPassword(
                auth,
                loginId + '@example.com',
                loginPassword
            );
        } catch (error) {
            alert("IDまたはパスワードが間違っています。");
        }
    };

    //Login判定
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    return (
        <>
            {/*ログインしている場合に，待機場所へ飛ぶ設定*/}
            {user ? (
                <Navigate to={`/FirstPhase`} />
            ) : (
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
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label="パスワード"
                            variant="standard"
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <Stack spacing={2} my={2} direction="row" justifyContent="end" className={LModule.button_around}>
                            <Button variant="outlined" style={{ color: "#7882b0" }} className={LModule.button_icon} onClick={backToHome}>Homeへ戻る</Button>
                            <Button variant="contained" style={{ backgroundColor: "#7882b0", color: "white" }} className={LModule.button_icon} onClick={handleSubmit}>参加</Button>
                        </Stack>
                    </Box>
                </StyledEngineProvider>
            )}
        </>
    );
};
