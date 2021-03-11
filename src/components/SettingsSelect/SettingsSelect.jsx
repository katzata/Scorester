import React from "react";
import "./SettingsSelect.scss";
import { connect } from "react-redux";

const SettingsSelect = ({action, options, dispatchAction}) => {
    const actions = {
        numberOfPlayers: "SET_NUMBER_OF_PLAYERS",
        languages: "SET_LANGUAGE"
    }

    return <select
        className="settingsSelect"
        onChange={(e) => {dispatchAction(actions[`${action}`], e.target.value)}}
    >
        {
            options.map((option) => {
                return <option value={option} key={option}>
                    {option}
                </option>
            })
        }
    </select>
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAction: (action, data) => {
            dispatch({ type: `${action}`, data: `${data}` })
        }
    };
};

export default connect(null, mapDispatchToProps)(SettingsSelect);