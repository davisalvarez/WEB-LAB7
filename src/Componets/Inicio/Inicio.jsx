import React from "react";
import {Howl, Howler} from 'howler';
import "./Inicio.css"

import rola from "./img/rolona.mp3"
import imgInicio from "./img/inicio.jpg"
//Importamos css con ayudada de 'Emotion'
import { css } from '@emotion/css'

const cssImgInicio = css`
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("${imgInicio}");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Inicio = ({changeMode}) =>{
    React.useEffect(()=>{
        const sound = new Howl({
            src: rola
        });
        sound.play();
        Howler.volume(0.65);
    },[])

    return(
        <>
            <div className={cssImgInicio}>
                <h1 className={"titleInicio"}>¡Bienvenido al Laberinto!</h1>
                <button className={"btnInicio"}
                        onClick={()=>changeMode(1)}>
                    Iniciar
                </button>
            </div>
        </>
    );
}
export default Inicio