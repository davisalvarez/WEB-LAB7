import React from "react";
import "./Fin.css"

import imgFin from "./img/fin.jpg"
//Importamos css con ayudada de 'Emotion'
import { css } from '@emotion/css'

const cssFin = css`
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("${imgFin}");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Fin = ({changeMode}) =>{

    return(
        <>
            <div className={cssFin}>
                <button className={"btnFin"}
                        onClick={()=>changeMode(0)}>
                    Volver al Inicio
                </button>
            </div>
        </>
    );
}
export default Fin