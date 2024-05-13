import React, { useState } from "react"

import Scooby from "./FotosMain/Scooby.png"
import Ben10 from "./FotosMain/Ben10.png"
import Looney from "./FotosMain/Looney.png"

//A segunda section utilizaremos o map, map é um método que mapeia (percorre) array [].
import Gumball from "./FotosMain/Gumball.png"
import Meninas from "./FotosMain/GirlPower.png"
import TomJerry from "./FotosMain/TomJerry.png"


import * as S from "./MainStyle"

function Main() {

    //sintaxe do useState
    //const [estado , setEstado] = useState()

    const [galeria, setGaleria] = useState([
        Gumball, Meninas, TomJerry
    ])

    return (
        <S.Main>

            <S.PrimeiraSection>
                <S.Img src={Scooby} alt="Scooby" />
                <S.Img src={Ben10} alt="Ben10" />
                <S.Img src={Looney} alt="Looney" />
            </S.PrimeiraSection>


            <S.SegundaSection>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.SegundaSection>


        </S.Main>
    )
}

export default Main