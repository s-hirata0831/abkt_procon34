import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import db from "../../../firebase.config";
import RoomModule from "../../../styles/Room.module.css";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

export const Room = () => {
    const { roomId } = useParams();

    useEffect(() => {
        console.log(`URLが変更されました: ${roomId}`);
    }, [roomId]);
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <div>
                <p>ID: {roomId}</p>
            </div>
        </StyledEngineProvider>
    );
};