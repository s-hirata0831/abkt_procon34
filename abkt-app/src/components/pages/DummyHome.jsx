import React, { useState } from "react";
import DHomeModule from "../../styles/DummyHome.module.css";
import { Link } from 'react-router-dom';
import { CreateRoomModal } from "../modules/CreateRoomModal";
import { StyledEngineProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import Modal from "@mui/material/Modal";

export const DummyHome = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const id = 123;

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className={DHomeModule.DummyHome}>
                    <div className={DHomeModule.title_icon}>
                        <img src='../img/title_around_white.png' className={DHomeModule.icon} />
                    </div>
                    <div className={DHomeModule.button_area}>
                        <Button onClick={handleOpen} variant="outlined" style={{ color: "#666" }} size="large" className={DHomeModule.dummy_button}>部屋を作る</Button>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className={DHomeModule.modal}
                        >
                            <Box className={DHomeModule.modal_box}>
                                <CreateRoomModal onClose={handleClose}/>
                            </Box>
                        </Modal>
                        <Button variant="contained" style={{ backgroundColor: "#7882b0" }} size="large" className={DHomeModule.dummy_button}> 部屋に入る</Button>
                        <Button variant="outlined" style={{ color: "#666"}} size="large" className={DHomeModule.dummy_button}>
                            <Link to={`/Room/${id}`}>部屋を見る</Link>
                        </Button>
                        <Button variant="outlined" style={{ color: "#666"}} size="large" className={DHomeModule.dummy_button}>
                            <Link to={`/CreateRoom`}>部屋を作る</Link>
                        </Button>
                    </div>
                </div>
            </StyledEngineProvider>
        </>
    );
}