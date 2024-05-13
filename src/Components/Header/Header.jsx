import React from "react";
import * as S from "./EstiloDaHeader.jsx"


//Importando fotos da Header
import Logo from "./ImgHeader/Logo.png"
import Jogo from "./ImgHeader/Jogo.png"
import Programação from "./ImgHeader/Programação.png"

function Header (){
    return (
    <S.HeaderStyle>
        <S.Img src={Logo} alt="" />

<S.Section>
        <S.Div>
            <img src={Jogo} alt=""/>
            <h2>JOGOS</h2>
        </S.Div>

        <S.Div>
            <img src={Programação} alt="" />
            <h2>PROGRAMAÇÃO</h2>
        </S.Div>

        </S.Section>
    </S.HeaderStyle>
    )
}

export default Header