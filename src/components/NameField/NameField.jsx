import React from "react";
import "./NameField.scss";
import { connect } from "react-redux";

const NameField = ({ currentNames, fieldIndex, setPlayerName }) => {
    return <input
        className="nameField"
        type="text"
        defaultValue={currentNames[fieldIndex]}
        onBlur={(e) => setPlayerName(fieldIndex, e.target.value)}
    />
}

const mapStateToProps = state => {
    return {
        numberOfPlayers: state.gameSettings.numberOfPlayers,
        currentNames: state.sessionData.names
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlayerName: (fieldIndex, name) => dispatch({
            type: "SET_PLAYER_NAME",
            index: fieldIndex,
            name: `${name}`
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameField);