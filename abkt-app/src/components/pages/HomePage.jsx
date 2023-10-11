import React from "react";
import Header from '../modules/Header';
import { Home } from '../modules/Home';
import { Whatabkt_explain } from '../modules/Whatabkt_explain'

export const HomePage = () =>{
    return (
        <>
            <Home />
            <Whatabkt_explain />
        </>
    );
};