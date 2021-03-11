import * as actions from "../actions";
import defaultValues from "../../apis/settings/defaultValues.json";

const initialState = {
    names: defaultValues.session.names,
    scores: defaultValues.session.scores,
    timeElapsed: defaultValues.session.timeElapsed
}

const reducer = (state = initialState, action) => {
    if (action.type === actions.session.NUMBER_OF_PLAYERS_CHANGED) {
        let tempNames = state.names;
        let tempScores = state.scores;
        
        if (action.numberOfPlayers < state.scores.length) {
            tempNames.splice(action.numberOfPlayers);
            tempScores.splice(action.numberOfPlayers);
        } else {
            while (state.scores.length < action.numberOfPlayers) {
                tempNames.push("");
                tempScores.push([]);
            };
        }
        
        return {
            ...state,
            // names: tempNames,
            scores: tempScores
        }
    };

    if (action.type === actions.session.SET_PLAYER_NAME) {
        let tempNames = state.names;
        tempNames[action.index] = action.name;

        return {
            ...state,
            names: tempNames
        }
    };

    if (action.type === actions.session.ADD_PLAYER_SCORE) {
        if (action.score !== "") {
            let tempScores = state.scores;
            tempScores[action.index].push(action.score)

            return {
                ...state,
                scores: tempScores
            }
        }
    };

    if (action.type === actions.session.EDIT_PLAYER_SCORE) {
        console.log(action)

        return {
            ...state
        }
    };

    return state;
}

export default reducer;