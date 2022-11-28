import React from "react";
import "./Main.css";

import Navbar from "../Empresas/Navbar/Navbar";
import ColLeft from "./components/ColLeft";
import ColRight from "./components/ColRight";


function Main() {
    return (
        <div className="main">
            <Navbar />
            <div className="row">
                <ColLeft />
                <ColRight />
            </div>
        </div>
    );
}


export default Main;
