import React from "react";
import "./AddScoreButton.scss";
import { connect } from "react-redux";

const AddScoreButton = ({ action, currentLanguage }) => {
    const lang = require(`../../apis/localization/${currentLanguage}.json`).scoreSection;

    return <div className="addScoreButtonContainer">
        <div className="addScoreButtonText">
            {lang.addInput}
        </div>

        <div className="addScoreButtonPlus">
            <div className="iconSide1"></div>
            <div className="iconSide2"></div>
        </div>

        <button className="addScoreButton" onClick={() => { action("show") }}></button>
    </div>
}

const mapStateToProps = state => {
    return {
        currentLanguage: state.appSettings.currentLanguage
    };
};

export default connect(mapStateToProps)(AddScoreButton);