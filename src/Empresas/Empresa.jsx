import React from "react";
import "./empresa.css";
import Navbar from "./Navbar/Navbar";


function Empresa() {
    return (
        <div className="container">
            <Navbar />
            <div className="inicio">
                <h2>Para qual empresa deseja doar?</h2>
            </div>
        
            <div className="empresas">
                <img src="./img/logo-home.png" alt="" />
                <img src="./img/c4410f60-95c3-4aee-90fb-5e89cee4fc39.png" alt="" />
                <img src="./img/instituto-socioambiental.png" alt="" /><br/>
                <img src="./img/takimundo-logo.png" alt="" />
                <img src="./img/58568d4c4f6ae202fedf2721.png" alt="" />
                <img src="./img/5a0c731b9642de34b6b65cee.png" alt="" />
            </div>
        </div>
    );
}


export default Empresa;
