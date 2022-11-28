import React from "react";


function ColLeft() {
    return (
        <div className="column">
            <div className="painel">
                <div className="painel-thumbnail">
                    <img src="" />
                </div>
                <div className="painel-body">
                    <p className="name">ONU</p>
                    <p>148 Seguidores, 38 Posts</p>
                    <p>
                        <img src="" width="28px" height="28px" />
                    </p>
                </div>
            </div>

            <div className="painel">
                <div className="painel-header">
                    <a href="#" className="pull-right" >Ver tudo</a>
                    <h4>Publicações</h4>
                </div>
                <div className="painel-body">
                    <div class="list-group">
                        <a href="http://usebootstrap.com/theme/facebook"
                            class="list-group-item">Discussões</a>
                        <a href="http://usebootstrap.com/theme/facebook"
                            class="list-group-item">Fotos / Videos</a>
                        <a href="http://usebootstrap.com/theme/facebook"
                            class="list-group-item">Contribuidores</a>
                    </div>
                </div>
            </div>
            <div class="well">
                <form class="form" role="form">
                    <h4>O que há de novo?</h4>
                    <div class="form-group">
                        <input type="text" class="form-control"
                            placeholder="Atualize sobre o mundo!">
                        </input>
                    </div>
                    <button class="btn post-button pull-right" type="button">Postar</button>
                    <ul class="list-inline">
                        <li>
                            <a href="">
                                <i class="glyphicon glyphicon-upload"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="glyphicon glyphicon-camera"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="glyphicon glyphicon-map-marker"></i>
                            </a>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="painel">
                <div class="painel-header">
                    <a href="#" class="pull-right">Ver tudo</a>
                    <h4>Sobre o perfil</h4>
                </div>
                <div class="painel-body">
                    <img src="assets/img/onu.webp" class="img-circle pull-right"/>
                    <a href="#">União das Nações Unidas</a>
                    <div class="clearfix"></div>
                    Organização das Nações Unidas (ONU) fundada em 24 de outubro de 1945
                    como resultado das conferências de paz realizadas no final da Segunda Guerra Mundial
                    <hr />
                    <ul class="list-unstyled">
                        <li>
                            Objetivos da agenda 2030
                        </li>
                        <li>
                            <a href="http://usebootstrap.com/theme/facebook">01 - Erradicação da Pobreza</a>
                        </li>
                        <li>
                            <a href="http://usebootstrap.com/theme/facebook">02 - Fome zero e agricultura sustentável</a>
                        </li>
                        <li>
                            <a href="http://usebootstrap.com/theme/facebook">03 - Saúde e bem-estar</a>
                        </li>
                        <li>
                            <a href="http://usebootstrap.com/theme/facebook">04 - Educação de qualidade</a>
                        </li>
                        <li>
                            <a href="http://usebootstrap.com/theme/facebook">+13 outros</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="painel">
                <div className="painel-header">
                    <h4>Carta da ONU</h4>
                </div>
                <div className="painel-body">
                    “Nós, os povos das Nações Unidas, decididos: 
                    a preservar as gerações vindouras do flagelo da 
                    guerra que por duas vezes, no espaço de uma vida humana, 
                    trouxe sofrimentos indizíveis à humanidade; a reafirmar 
                    a nossa fé nos direitos fundamentais do homem, na dignidade 
                    e no valor da pessoa humana, na igualdade de direitos dos 
                    homens e das mulheres, assim como das nações, grandes e 
                    pequenas”, tendo como primeiro objetivo “Manter a paz e 
                    a segurança internacionais e para esse fim: tomar medidas 
                    coletivas eficazes para prevenir e afastar ameaças à paz e 
                    reprimir os atos de agressão, ou outra qualquer ruptura da paz 
                    e chegar, por meios pacíficos, e em conformidade com os 
                    princípios da justiça e do direito internacional, a um 
                    ajustamento ou solução das controvérsias ou situações 
                    internacionais que possam levar a uma perturbação da paz”.
                </div>
            </div>
        </div>
    );
}


export default ColLeft;
