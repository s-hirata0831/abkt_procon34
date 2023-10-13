import React from 'react';
import styles from '../../styles/Result.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(name,rank,score) {
     return { name, rank , score };
}

const rows = [
    createData('さブロー', '3' , '420'),
    createData('分太郎', '4' , '320'),
    createData('太郎', '1' , '1200'),
    createData('分シロー', '5' , '40'),
    createData('シロー', '2' , '650'),
  ];

export const Result_module = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <p className={styles.text}>～リザルト～</p>
                <p className={styles.text} style={{fontsSize:"100px"}}>個人成績</p>
                <div>
                <TableContainer >
                <Table sx={{ maxWidth: 800 , margin:'0 auto' }} aria-label="customized table" >
                    <TableHead >
                        <TableRow style={{backgroundColor:"#7882b0"}} >
                          <TableCell>順位</TableCell>
                          <TableCell >参加者名</TableCell>
                          <TableCell >得点</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                                key={row.rank} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{backgroundColor:"white"}}
                            >
                            <TableCell component="th" scope="row">
                            {row.rank}
                            </TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.score}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </div>
                <div style={{margin:"5% 0 0 0"}} >
                    <p className={styles.text}>～今回考案された呪文達～</p>
                </div>
                <div className={styles.spell}>
                    <ul className={styles.un_ordered}>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>トマト</p>
                        </li>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>ラーメン</p>
                        </li>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>サンドイッチ</p>
                        </li>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>チャーハン</p>
                        </li>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>ステーキ</p>
                        </li>
                        <li>
                            <img src="../../img/result_card.png"/>
                            <p>バナナ</p>
                        </li>
                    </ul>
                </div>
            </StyledEngineProvider>
        </>
    );
};