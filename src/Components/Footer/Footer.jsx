import React from "react";
import * as S from "./EstilodoFooter.jsx"

//importando as imagens do Footer
import Wb from "./FotosFooter/Wb.png"
import GitHub from "./FotosFooter/GitHub.png"
import Linkedin from "./FotosFooter/Linkedin.png"

export default function Footer (){

    return(
        <footer>
           <S.PrimeiraSectionFooter>
<img src={Wb} alt="" />

<S.UL>
    <li>Sobre nós</li>
    <li>Produtos</li>
    <li>Personagens</li>
</S.UL>

<S.Div>
<img src={GitHub} alt="" />
<img src={Linkedin} alt="" />
</S.Div>

        </S.PrimeiraSectionFooter>
    
    <S.SegundaSectionFooter>
        <p>@ 2024 Cartoon Netwwork</p>
    </S.SegundaSectionFooter>
    </footer>
    )

}
