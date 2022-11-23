import React from "react";
import "./Login.css";


function Login() {
    return (
        <div className="container">
            <div>
                <div className="logo"><img src="../../public/imgs/takimundo-logo.png" /></div>
                <h1 className="TextoLogin">Fazer login</h1>
            </div>
            <div>
                <form>
                    {/* Adicionado uma nova div para alinhar */}
                    <div className="login-infos">
                        <div className="formFild2">
                            <input type="email" name="email" id="email" placeholder="E-mail" />
                            <div className="error" id="emailRequiredError">E-mail é obrigatório</div>
                            <div className="error" id="emailInvalidError">E-mail é inválido</div>
                        </div>
                        <div className = "formFild2">
                            <input type="password" name="password" id="password" className="password" placeholder="Senha" />
                            <div className="error" id="passwordRequiredError">Senha é obrigatória</div>
                            <div className="error" id="passwordInvalidError">Senha é inválida</div>
                        </div>
                    </div>
                    <div className="formFild3">
                        <input type="checkbox" name="checkboxButton" id="checkboxButton" className="checkboxButton" />
                        <p name="checkboxText" className="checkboxText"> Lembrar-me</p>
                        <p><a href="">Esqueci a senha</a></p>
                    </div>
                    <div className="buttonContainer">
                        <button type="button" className="outline" id="registerButton" onclick="newLogin()">Logar</button>
                    </div>
                    <a className="cadastre" href="../Cadastro/cadastro.html">Cadastre-se</a>
                </form>
            </div>
        </div>
    );
}


export default Login;
