import React from "react";
import "./static/NavBar.css"



export default function NavBar({onclick}){

    return(
        <nav><button id="new-btn" onClick={(e) =>{ onclick() }}>Novo</button></nav>
    )
}