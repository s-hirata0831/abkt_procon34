import React, { useState } from "react";
import CRModule from "../../styles/CreateRoomModal.module.css"
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import db from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export const CreateRoomModal = ({onClose}) => {
    const [password, setPassword] = useState("");

    const createRoom = async () => {
        //ここでコレクション名を定義
        const collectionRef = collection(db, "rooms");
        //ここで部屋のデータを作成
        const docRef = await addDoc(collectionRef, {
            //ここに保存したいデータを記入
            password: password,
        });
        console.log("部屋のidです", docRef.id,"私のパスワード", password);
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <p className={CRModule.title}>パスワード設定</p>
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Stack spacing={2} my={2} direction="row" justifyContent="end">
                    <Button variant="outlined" style={{color:"#7882b0"}} className={CRModule.button_icon} onClick={onClose}>閉じる</Button>
                    <Button variant="contained" style={{backgroundColor: "#7882b0"}} className={CRModule.button_icon} onClick={createRoom}>作成</Button>
                </Stack>
            </StyledEngineProvider>
        </>
    );
};