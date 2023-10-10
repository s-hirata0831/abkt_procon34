import React from "react";
import LModule from "../../styles/Login.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const Login = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Box className={LModule.body_text}>
                    <p className={LModule.title}>ログイン</p>
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
                </Box>
            </StyledEngineProvider>
        </>
    )
}