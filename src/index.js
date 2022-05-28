import React from 'react'
import { createRoot } from 'react-dom/client';
import './style/home.css'

import Laberinto from "./Componets/Laberinto/Laberinto.jsx";
import Inicio from "./Componets/Inicio/Inicio.jsx";
import Fin from "./Componets/Fin/Fin.jsx";

const App = () =>{
	const [mode, setMode] = React.useState(0);

	const changeMode = (mode)=>{
		setMode(mode)
	}

	return (
		<>
			{(mode===0)&&<Inicio changeMode={changeMode}/>}
			{(mode===1)&&<Laberinto changeMode={changeMode}/>}
			{(mode===2)&&<Fin changeMode={changeMode}/>}
		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
