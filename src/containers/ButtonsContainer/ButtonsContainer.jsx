import React from "react";
import "./ButtonsContainer.scss";

import GameButton from "../../components/GameButton/GameButton";

const ButtonsContainer = () => {
    return <section className="buttonsContainer">
        <GameButton title="START"/>
    </section>
}

export default ButtonsContainer;