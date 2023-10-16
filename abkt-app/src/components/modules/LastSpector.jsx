import React, { useState } from "react";
import styles from "../../styles/LastSpectator.module.css";
import styles_spectator from "../../styles/EndSpectator.module.css";
import { StyledEngineProvider } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

export const EndSpectator = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Card
          position="static"
          style={{ backgroundColor: "#FDF5DE" }}
          className={styles.whole}
        ></Card>

        <div className={styles_spectator.card_area}>
          <div className={styles_spectator.card}>カード1</div>
          <div className={styles_spectator.card}>カード2</div>
          <div className={styles_spectator.card}>カード3</div>
          <div className={styles_spectator.card}>カード4</div>
        </div>
        <div className={styles_spectator.card_area}>
          <ul>
            <div className={styles_spectator.card_center}>カード1</div>
            <div
              className={
                "&{styles_spectator.button_container} ${styles_spectator.chiled}"
              }
            >
              <input type="radio" id="button1" name="buttons" />
              <label for="button1" className={styles_spectator.label}>
                超イイネ！
              </label>

              <input type="radio" id="button2" name="buttons" />
              <label for="button2" className={styles_spectator.label}>
                グッド
              </label>

              <input type="radio" id="button3" name="buttons" />
              <label for="button3" className={styles_spectator.label}>
                SoSo
              </label>

              <input type="radio" id="button4" name="buttons" />
              <label for="button4" className={styles_spectator.label}>
                まあまあ
              </label>

              <input type="radio" id="button5" name="buttons" />
              <label for="button5" className={styles_spectator.label}>
                うーん
              </label>
            </div>
          </ul>
        </div>
        <div className={styles_spectator.card_area}>
          <div className={styles_spectator.card}>カード1</div>
          <div className={styles_spectator.card}>カード2</div>
          <div className={styles_spectator.card}>カード3</div>
          <div className={styles_spectator.card}>カード4</div>
        </div>

        {/*InputArea*/}
        <div className={styles.input_area}>
          <div className={styles.input_form}>
            <TextField label={"アイデアを入力"} variant="filled" />

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
        </div>
        <div className={styles_spectator.card_area}>
          <div className={styles_spectator.card}>カード1</div>
          <div className={styles_spectator.card}>カード2</div>
          <div className={styles_spectator.card}>カード3</div>
          <div className={styles_spectator.card}>カード4</div>
        </div>
      </StyledEngineProvider>
    </>
  );
};