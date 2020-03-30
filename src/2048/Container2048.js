import React from "react";

import Game from "./Game";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Container2048 extends React.Component {
	render() {
		return <Game fieldSize={4} />;
	}
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

export default Container2048;
