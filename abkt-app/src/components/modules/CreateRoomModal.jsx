import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import CRModule from "../../styles/CreateRoomModal.module.css"
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const CreateRoomModal = ({ roomId, copyPass}) => {
    const [resultText, setResultText] = useState(roomId);
    const [passwordText, setPasswordText] = useState(copyPass);
    alert(copyPass);

    const copyToClipboard = async () => {
        await global.navigator.clipboard.writeText(resultText);
    };

    const copyPassword = async () => {
        await global.navigator.clipboard.writeText(passwordText);
    };

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                    <p className={CRModule.title}>設定完了</p>
                    <p className={CRModule.text}>ID・パスワードを忘れた場合は，部屋を作り直してください。</p>
                    <Stack spacing={2} my={2} direction="row" alignItems="center" justifyContent="center">
                        <p className={CRModule.content}>部屋のID：{roomId}</p>
                        <Tooltip title="クリップボードにコピー" placement="top" arrow>
                            <IconButton color="primary" size="small" onClick={copyToClipboard}>
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack spacing={2} my={2} direction="row" alignItems="center" justifyContent="center">
                        <p className={CRModule.content}>パスワード：{copyPass}</p>
                        <Tooltip title="クリップボードにコピー" placement="top" arrow>
                            <IconButton color="primary" size="small" onClick={copyPassword}>
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack spacing={2} my={2} direction="row" justifyContent="end">
                        <Button className={CRModule.button_icon}>PDFで保存</Button>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0" }} className={CRModule.button_icon} onClick={backToHome}>第１フェーズに進む</Button>
                    </Stack>
            </StyledEngineProvider>
        </>
    );
};