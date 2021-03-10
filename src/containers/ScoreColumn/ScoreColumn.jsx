import React from 'react';
import "./ScoreColumn.scss";
import { connect } from "react-redux";

import NameField from "../../components/NameField/NameField";
import ScoresSection from "../ScoresSection/ScoresSection";


const ScoreColumn = ({ columnIndex, numberOfPlayers, scores}) => {
    let styles = {
        width: `${100 / numberOfPlayers}%`,
        height: "100%"
    };

    if (numberOfPlayers > 3) {
        styles = {
            width: `${100 / Math.ceil(numberOfPlayers / 2)}%`,
            height: "50%"
        };
    };

    console.log(scores[columnIndex].length)

    return <div className="scoreColumn" style={styles}>
        <div className="playerNameContainer">
            <NameField fieldIndex={columnIndex} />
        </div>

        <ScoresSection scores={scores[columnIndex]} columnIndex={columnIndex} />
        
        <div className="scoresTotalContainer">
            <span>{scores.reduce((a, b) => Number(a) + Number(b), 0)}</span>
        </div>
    </div>
}

const mapStateToProps = state => {
    console.log(state.sessionData.scores)
    return {
        numberOfPlayers: state.gameSettings.numberOfPlayers,
        scores: state.sessionData.scores
    };
};

export default connect(mapStateToProps)(ScoreColumn);