import React, { useState, useEffect } from "react";
import Header from '../modules/Header';
import RFModule from '../../styles/ReadyFirst.module.css';
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, set, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const ReadyFirst = () => {
    //ログイン状態
    const [id, setId] = useState("None");
    const [loggedInUsersCount, setLoggedInUsersCount] = useState(0);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userEmail = user.email;
                const cleanedId = userEmail.replace("@example.com", "");
                setId(cleanedId);
            } else {
                setId("None");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // Firebase Realtime Databaseのリファレンスを取得
    const database = getDatabase();
    const loggedInUsersCountRef = ref(database, 'users/loggedInUsersCount');

    useEffect(() => {
        // ユーザーのログイン状態を監視
        const auth = getAuth();
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                // ユーザーがログインした場合、同時ログインユーザーカウンターをインクリメント
                update(loggedInUsersCountRef, { value: (loggedInUsersCount) + 1 });

                const userEmail = user.email;
                const cleanedId = userEmail.replace("@example.com", "");
                setId(cleanedId);
            } else {
                setId("None");
            }
        });

        // 同時ログインユーザーカウンターの変更を監視
        const unsubscribeCount = onValue(loggedInUsersCountRef, (snapshot) => {
            const count = snapshot.val();
            setLoggedInUsersCount(count);
        });

        return () => {
            // コンポーネントがアンマウントされたときに監視を停止
            unsubscribeAuth();
            unsubscribeCount();
        };
    }, [loggedInUsersCountRef]);

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Box className={RFModule.box}>
                    <p className={RFModule.title}>まもなく始まります...</p>
                    <div className={RFModule.around_icon}>
                        <img src={`${process.env.PUBLIC_URL}/img/abkt_explain.png`} className={RFModule.icon} />
                    </div>
                    <div className={RFModule.button_around}>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0", color: "white" }} className={RFModule.button_icon}>今の参加者数で始める</Button>
                    </div>
                    <p>{id}</p>
                    <p>参加者数：{loggedInUsersCount}</p>
                </Box>
            </StyledEngineProvider>
        </>
    );
};