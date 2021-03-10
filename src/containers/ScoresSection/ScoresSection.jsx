import React from "react";
import "./ScoresSection.scss";
import { connect } from "react-redux";

import ScoreField from "../../components/ScoreField/ScoreField";

const ScoresSection = ({ language, scores, columnIndex }) => {
    const lang = require(`../../apis/localization/${language}.json`).scoreSection;
    const submitScore = () => {
        console.log(columnIndex)
    };

    const handleFocus = () => {
        console.log("x")
    }

    return <div
        className="scoresSection"
    >
        <div className="columnInputContainer">
            <input className="columnInput" type="text"/>
            <button className="submitInput" onClick={submitScore}>{lang.submitInput}</button>
        </div>

        <div className="scoresContainer" onFocus={handleFocus}>
            {
                scores.map((score, idx) => {
                    return <ScoreField
                        fieldIndex={columnIndex + idx}
                        score={score.toString()}
                        key={idx}
                    />
                })
            }
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        language: state.appSettings.currentLanguage
    };
};

export default connect(mapStateToProps)(ScoresSection);