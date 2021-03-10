import React from "react";
import "./InfoButton.scss";

const InfoButton = ({action, blur}) => {
    return <button
        className="infoButton"
        onClick={action}
        onBlur={blur ? blur : null}
    >
        <span className="info">i</span>
    </button>
}

export default InfoButton;