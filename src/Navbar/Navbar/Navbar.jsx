import React from "react";
import "./Navbar.css";


function Navbar() {
    return (
        <div class="Navbar">
            <div>
                <div>
                    <img src="../img/takimundo-logo.png" alt="Takimundo" title="Takimundo" />
                </div>
                <div class="Pesquisa">
                    <input class="input-pesquisa" type="text" placeholder="Pequisar..." />
                </div>
            </div>
            <div class="Atalhos">
                <div>
                    <a class="nome-link" href="">
                        <img class="img-atalhos" src="../img/icons8-home-64.png" alt="home" />
                        Home
                    </a>
                </div>
                <div>
                    <a class="nome-link" href="">
                        <img class="img-atalhos" src="../img/falar.png" alt="postar" />
                        Postar
                    </a>
                </div>
                <div>
                    <a class="nome-link" href="">
                        <img class="img-atalhos" src="../img/bank.png" alt="doar" />
                        Doar
                    </a>
                </div>
            </div>
            <div class="Perfil">
                <img class="img-perfil" src="../img/icons8-nome-48.png" alt="Perfil" title="Meu perfil" />
            </div>
        </div>
    );
}


export default Navbar;
