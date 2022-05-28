import React from "react";

//Importamos css con ayudada de 'Emotion'
import { css } from '@emotion/css'
//Importamos imagen con ayudada de 'file-loader'
import imgLogo from"./img/logo.jpeg"
//Importamos SVG con ayuda de 'svg-url-loader'
import svgLetras from "./img/letras.svg"

const containerCSS = css`
    display: grid;
    grid-template-rows: 80% 20%;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 100%;
`

const imgLogoCSS = css`
    grid-column: 2/3;
    grid-row: 2/3;
    height: 130px;
    justify-self: end;
    align-self: baseline;
    margin-right: 20px;
`
const svgLetrasCSS = css`
    grid-column: 1/2;
    grid-row: 2/3;
    margin-left: 20px;
    margin-top: 20px;
    height: 80px;
`
const btnLab = css`
    background: white;
    border: 2px solid  #4B5320;;
    width: 200px;
    height: 100px;

    color:  #4B5320;
    font-size: 25px;
    font-weight: bold;
    &:hover{
        background: #4B5320;
        color:  white;
    }
`


const Laberinto = ({changeMode}) =>{
    return(
        <>
            <div className={containerCSS}>
                <div  className={""}>
                    <button className={btnLab}
                            onClick={()=>{changeMode(2)}}> Terminar...</button>
                </div>
                <img src={imgLogo} className={imgLogoCSS}/>
                <img src={svgLetras} className={svgLetrasCSS}/>
            </div>
        </>
    );
}
export default Laberinto