import React, {useState} from "react";
import db from "../../firebase.config";

export const Initialize= () => {
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
        const newTeam = [...{addBrain}, placeText];
        addBrain(newTeam);
    }

    return (
        <>
            <input value={placeText} />
            <button onClick={onClickAdd}>生成</button>
        </>
    );
};