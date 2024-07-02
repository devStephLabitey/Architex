import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Pages.module.css";
import Navbar from "../fixeComponents/Navbar";

export default function SearchPage(){
    return(
        <>
            <div className={style.SearchPage}>
                <Navbar/>    
            </div>        
        </>
    );
}