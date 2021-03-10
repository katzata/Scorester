import React from "react";
import "./SettingsSelect.scss";
import { connect } from "react-redux";

const SettingsSelect = ({targetAction, options, dispatchAction}) => {
    const allActions = {
        numberOfPlayers: "SET_NUMBER_OF_PLAYERS"
    }

    return <select
        className="settingsSelect"
        onChange={(e) => {dispatchAction(allActions[`${targetAction}`], e.target.value)}}
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

const mapStateToProps = state => {
    return {
        currentLanguage: state.appSettings.currentLanguage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchAction: (currentAction, currentData) => {
            console.log(currentAction)
            if (currentAction === "SET_NUMBER_OF_PLAYERS") {
                dispatch({ type: `${currentAction}`, data: `${currentData}` })
                dispatch({ type: "NUMBER_OF_PLAYERS_CHANGED", numberOfPlayers: `${currentData}` })
            } else {
                dispatch({ type: `${currentAction}`, data: `${currentData}`})
            }

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSelect);