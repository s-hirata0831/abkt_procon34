import React from "react";
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

    return (
        <>
            <input value={addBrain.teamName} />
            <button>生成</button>
        </>
    );
};