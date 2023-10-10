import React from "react";
import { useNavigate } from 'react-router-dom';
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

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Box className={LModule.box}>
                    <p className={LModule.title}>ログイン</p>
                    <div className={LModule.around_icon}>
                        <img src='../img/brain.png' className={LModule.icon} />
                    </div>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="ID"
                        variant="standard"
                        defaultvalue={""}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="パスワード"
                        variant="standard"
                        defaultValue={""}
                    />
                    <Stack spacing={2} my={2} direction="row" justifyContent="end" className={LModule.button_around}>
                        <Button variant="outlined" style={{ color: "#7882b0" }} className={LModule.button_icon} onClick={backToHome}>Homeへ戻る</Button>
                        <Button varant="contained" style={{ backgroundColor: "#7882b0", color:"white" }} className={LModule.button_icon}>参加</Button>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    )
}