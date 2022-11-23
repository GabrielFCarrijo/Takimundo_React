import React from "react";
import "./Cadastro.css";


function Cadastro() {
    return (
        <div className="container">
            <div>
                <div className="logo"><img src="../../public/imgs/takimundo-logo.png" /></div>
                <h1 className="TextoCadastro">Cadastre-se</h1>
            </div>
            <div>
                <form>
                    <div className="formFild">
                        <input type="name" name="nome" id="name" placeholder="Nome" />
                        <div className="error" id="nameRequiredError">Nome é obrigatório</div>
                        <div className="error" id="nameInvalidError">Nome é inválido</div>
                    </div>
                    <div className="formFild">
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <div className="error" id="emailRequiredError">E-mail é obrigatório</div>
                        <div className="error" id="emailInvalidError">E-mail é inválido</div>
                    </div>
                    <div className="formFild2">
                        <div>
                            <input type="date" name="dtNasc" id="dtNasc" className="dtNasc" />
                            <div className="error" id="dtNascRequiredError">Data de nascimento é obrigatória</div>
                            <div className="error" id="dtNascInvalidError">Data inválida</div>
                        </div>
                        <div>
                            <input type="password" name="password" id="password" className="password"  placeholder="Senha"/>
                            <div className="error" id="passwordRequiredError">Senha é obrigatória</div>
                            <div className="error" id="passwordInvalidError">Senha é inválida</div>
                        </div>
                    </div>
                    <div className="formFild3">
                        <input type="checkbox" name="checkboxButton" id="checkboxButton" className="checkboxButton" />
                        <p name="checkboxText" className="checkboxText"> Li e concordo com os <a className="termosDeUso">Termos de uso</a> </p>
                    </div>

                    <div className="buttonContainer">
                        <button type="button" className="outline" id="registerButton" onclick="newCadastro()">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Cadastro;
