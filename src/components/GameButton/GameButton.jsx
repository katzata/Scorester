import React from "react";
import "./GameButton.scss";

const GameButton = ({subClass, title}) => {
	return <button className={"button" + (subClass ? subClass : "")}>
		{title}
	</button>;
}

export default GameButton;