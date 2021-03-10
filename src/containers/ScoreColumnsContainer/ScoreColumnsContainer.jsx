import React from "react";
import "./ScoreColumnsContainer.scss";
import { connect } from "react-redux";

import ScoreColumn from "../ScoreColumn/ScoreColumn";

const ScoreColumnsContainer = ({ playerScores, numberOfPlayers }) => {

    return <section className="scoreColumnsContainer">
        {
            [...Array(Number(numberOfPlayers)).keys()].map((idx) => {
                return <ScoreColumn
                    columnIndex={idx}
                    key={idx}
                />;
            })
        }
    </section>
};

const mapStateToProps = state => {
    return {
        numberOfPlayers: state.gameSettings.numberOfPlayers
    };
};

export default connect(mapStateToProps)(ScoreColumnsContainer);