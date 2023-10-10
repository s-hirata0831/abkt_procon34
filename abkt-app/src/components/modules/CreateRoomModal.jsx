import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import CRModule from "../../styles/CreateRoomModal.module.css"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const CreateRoomModal = ({ roomId, password }) => {
    const [resultText, setResultText] = useState(roomId);
    const [passwordText, setPasswordText] = useState(password);

    const copyToClipboard = async () => {
        await global.navigator.clipboard.writeText(resultText);
    };

    const copyPassword = async () => {
        await global.navigator.clipboard.writeText(passwordText);
    };

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    //PDF
    const saveAsImage = uri => {
        const downloadLink = document.createElement("a");

        if (typeof downloadLink.download === "string") {
            downloadLink.href = uri;

            //FileName
            downloadLink.download = "Setting.png";

            //ダウンロードリンクが設定されたaタグをクリック
            downloadLink.click();
        }
    }

    const onClickExport = () => {
        //画像に変換するcomponentのidを指定
        const target = document.getElementById("target-component");
        html2canvas(target, { scale: 2.5 }).then(canvas => {
            const targetImgUri = canvas.toDataURL("img/svg", 1.0);
            let pdf = new jsPDF();
            pdf.addImage(targetImgUri, 'SVG', 5, 10, canvas.width / 18, canvas.height / 18);
            pdf.save(`SettingId_abkt.pdf`)
        });
    }


    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div id='target-component'>
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
                        <p className={CRModule.content}>パスワード：{password}</p>
                        <Tooltip title="クリップボードにコピー" placement="top" arrow>
                            <IconButton color="primary" size="small" onClick={copyPassword}>
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack spacing={2} my={2} direction="row" justifyContent="end">
                        <Button className={CRModule.button_icon} onClick={onClickExport}>PDFで保存</Button>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0" }} className={CRModule.button_icon} onClick={backToHome}>第１フェーズに進む</Button>
                    </Stack>
                </div>
            </StyledEngineProvider>
        </>
    );
};