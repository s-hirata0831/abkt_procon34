import React, { useState } from "react";
import "../../styles/CreateRoomModal.module.css"
import { StyledEngineProvider } from "@mui/material";
import db from "../../firebase.config";

export const CreateRoomModal = () => {
    const addBrain = () => {
        const teamName = prompt("Please enter the team name");

        if (teamName) {
            db.collection("rooms").add({
                name: teamName,
            });
        }
    };

    const [placeText, setPlaceText] = useState('');
    const onClickAdd = () => {
        if (placeText === "") return;
        const newTeam = [...{ addBrain }, placeText];
        addBrain(newTeam);
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <p>死んでください。</p>
                <input value={placeText} />
                <button onClick={onClickAdd}>生成</button>
            </StyledEngineProvider>
        </>
    );
};