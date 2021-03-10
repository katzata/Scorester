import React from "react";
import "./AppBody.scss";

import Header from "../Header/Header";
import ScoreColumnsContainer from "../ScoreColumnsContainer/ScoreColumnsContainer";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";
import SettingsModal from "../SettingsModal/SettingsModal";
// import localization from "../../localization/localization.js";

const AppBody = ({localization}) => {
	return (
		<main>
			<Header />
			<ScoreColumnsContainer />
			<ButtonsContainer />
			<SettingsModal />
		</main>
	);
}

export default AppBody;