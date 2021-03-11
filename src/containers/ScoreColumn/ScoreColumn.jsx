import React from 'react';
import "./ScoreColumn.scss";
import { connect } from "react-redux";

import NameField from "../../components/NameField/NameField";
import ScoresSection from "../ScoresSection/ScoresSection";
import ScoresTotal from "../../components/ScoresTotal/ScoresTotal";

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

    return <div className="scoreColumn" style={styles}>
        <NameField fieldIndex={columnIndex} />
        <ScoresSection columnIndex={columnIndex} />
        <ScoresTotal scores={scores} columnIndex={columnIndex}/>
    </div>
}

const mapStateToProps = state => {
    const newScores = [...state.sessionData.scores];
    
    return {
        numberOfPlayers: state.gameSettings.numberOfPlayers,
        scores: newScores
    };
};

export default connect(mapStateToProps, null)(ScoreColumn);