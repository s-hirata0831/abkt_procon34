import React, { useState } from "react";
import styles from "../../styles/Last.module.css";
import { StyledEngineProvider } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

export const Last = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Card
          position="static"
          style={{ backgroundColor: "#FDF5DE" }}
          className={styles.whole}
        ></Card>

        <div className={styles.card_area}>
          <div className={styles.card}>カード1</div>
          <div className={styles.card}>カード2</div>
          <div className={styles.card}>カード3</div>
          <div className={styles.card}>カード4</div>
        </div>
        <div className={styles.card_area}>
          <div className={styles.card_center}>カード1</div>
        </div>
        <div className={styles.card_area}>
          <div className={styles.card}>カード1</div>
          <div className={styles.card}>カード2</div>
          <div className={styles.card}>カード3</div>
          <div className={styles.card}>カード4</div>
        </div>

        {/*InputArea*/}
        <div className={styles.input_area}>
          <div className={styles.input_form}>
            <TextField label={"アイデアを入力"} variant="filled" />
          </div>
          <div className={styles.input_button}>
            <Button
              variant="contained"
              startIcon={<AddCommentIcon />}
              style={{ backgroundColor: "#7882b0" }}
              size="large"
            >
              追加
            </Button>
          </div>
        </div>
      </StyledEngineProvider>
    </>
  );
};