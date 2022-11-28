import React from "react";


function ColRight() {
    return (
        <div class="column">
            <div class="email-confirmed">
                <form class="form">
                    <h4>Entre com o email!</h4>
                    <div class="input-container">
                        <input class="email-input"
                            placeholder="exemplo@email.com" type="email" />
                        <span className="container-button">
                            <button class="btn button-input"
                                type="button">OK</button>
                        </span>
                    </div>
                </form>
            </div>

            <div class="painel">
                <div class="painel-header">
                    <a href="#" class="pull-right">Ver tudo</a>
                    <h4>Importancia agenda 2030</h4>
                </div>
                <div class="painel-body">
                    <p>
                        <img src="" class="img-circle pull-right" />
                        <a href="#">
                            Objetivos e beneficios para a humanidade
                        </a>
                    </p>
                    <div class="clearfix"></div>
                    <hr />
                    De forma geral, os Objetivos de Desenvolvimento Sustentável, 
                    propostos pela ONU com agenda até 2030, são um apelo global 
                    à ação para acabar com a pobreza, proteger o meio ambiente e 
                    o clima, garantindo que as pessoas, em todos os lugares, possam 
                    desfrutar de uma vida digna e justa.
                </div>
            </div>

            <div class="painel">
                <div class="painel-header"><a href="#" class="pull-right">Ver tudo</a>
                    <h4>Debates</h4>
                </div>
                <div class="painel-body">
                    <img src="" class="img-circle pull-right" />
                    <a href="#">Igualdade de gênero</a>
                    <div class="clearfix"></div>
                    <hr />
                    <p>
                        Alguma contribuição para a pauta?
                    </p>
                    <hr />
                    <form>
                        <div class="input-container">
                            <div class="container-button">
                                <button class="btn btn-default">+1</button>
                                <button class="btn btn-default">
                                    <i class="glyphicon glyphicon-share">
                                        C
                                    </i>
                                </button>
                            </div>
                            <input class="form-control" placeholder="Adicione um comentario..." type="text" />
                        </div>
                    </form>
                </div>
            </div>

            <div class="painel">
                <div class="painel-header">
                    <a href="#" class="pull-right">Ver tudo</a>
                    <h4>Outras publicações</h4>
                </div>
                <div class="painel-body">
                    <ul class="list-group">
                        <li class="list-group-item">Discussões</li>
                        <li class="list-group-item">Fotos / Videos</li>
                        <li class="list-group-item">Contribuições</li>
                    </ul>
                </div>
            </div>

            <div class="painel">
                <div class="painel-thumbnail">
                    <img src="" class="" />
                </div>
                <div class="painel-body">
                    <p class="lead">Meio Ambiênte</p>
                    <p>1,200 Followers, 83 Posts</p>
                    <p>
                        <img src="" height="28px" width="28px" />
                        <img src="" height="28px" width="28px" />
                        <img src="" height="28px" width="28px" />
                    </p>
                </div>
            </div>
        </div>
    );
}


export default ColRight;
