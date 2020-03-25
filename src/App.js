import React from "react";
import logo from "./logo.png";
import "./App.css";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
	across: {
		1: {
			clue:
				"Tortilla frita partida en cuadritos con una rica salsa roja o verde, crema y queso y se acompaña con pollo, arrachera o huevo.",
			answer: "CHILAQUILES",
			row: 3,
			col: 2
		},
		3: {
			clue:
				"Galleta con masa crujiente de origen belga, conformada por cuadros.",
			answer: "WAFFLE",
			row: 9,
			col: 1
		},
		5: {
			clue:
				"Pan plano, redondo y dulce, preparado con leche, mantequilla, huevos, harina, levadura, azúcar y vainilla.",
			answer: "hotcake",

			col: 1,
			row: 14
		},
		7: {
			clue:
				"Bebida preparada con café expreso y leche montada con vapor para crear la crema, nacido en Italia. Se compone de 125 ml de leche y 25 ml de café expreso.",
			answer: "capuchino",

			col: 4,
			row: 16
		},
		9: {
			clue: "Tipo de cafe, mezcla de expreso y agua caliente.",
			answer: "americano",

			col: 12,
			row: 20
		}
	},
	down: {
		2: {
			clue: "Todo lo que se prepara en Rojo _______ 😄",
			answer: "DELICIAS",
			row: 1,
			col: 10
		},
		4: {
			clue:
				"Pan largo y crujiente, de origen francés, relleno con tus ingredientes favoritos.",
			answer: "baguette",
			row: 2,
			col: 6
		},
		6: {
			clue:
				"Entre nuestras delicias ___________ tenemos plato de fruta, yogur con fruta, biónico y escamocha.",
			answer: "saludables",
			row: 3,
			col: 12
		},
		8: {
			clue: "La bebida más refrescante, base de limón, agua y azúcar.",
			answer: "limonada",
			col: 5,
			row: 9
		},
		10: {
			clue:
				"Bebida cremosa, caliente y sabe delicioso. Pista: se suele relacionar mucho con las abuelitas.",
			answer: "chocolate",
			col: 12,
			row: 14
		},
		12: {
			clue: "Mezcla de té con especias y hierbas aromáticas de origen indio.",
			answer: "chai",
			col: 9,
			row: 15
		},
		14: {
			clue:
				"Tipo de enchilada rellenas de pollo bañadas en salsa verde cremosa y queso gratinado.",
			answer: "suizas",
			col: 18,
			row: 16
		}
	}
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Nueva sección de juegos de tu restaurante favorito (en construcción).
				</p>
				<Crossword
					data={data}
					//columnBreakpoint="9999px"
					//gridBackground=""
					cellBackground="#ffe"
					cellBorder="#fca"
					textColor="black"
					numberColor="#9f9"
					focusBackground="#f00"
					highlightBackground="#f99"
				/>
				<a
					className="App-link"
					href="http://rojodelicias.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Regresa a casa
				</a>
			</header>
		</div>
	);
}

export default App;
