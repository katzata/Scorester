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
        
        const tempState = {
            names: state.names,
            scores: state.scores
        }
        
        if (action.numberOfPlayers < state.scores.length) {
            tempScores.splice(action.numberOfPlayers);
        } else {
            while (state.scores.length < action.numberOfPlayers) {
                tempScores.push([]);
            };
        }
        
        return {
            ...state,
            scores: tempScores,
        }
    };

    if (action.type === actions.session.SET_PLAYER_NAME) {
        console.log(state.names)
        let tempNames = state.names.splice(action.index, 1, action.name)
        console.log(tempNames)
        return {
            ...state,
            names: state.names.splice(action.index, 1, action.name)
        }
    };

    if (action.type === actions.session.SET_SCORES) {
        console.log(action.data)
        return {
            ...state,
            scores: []
        }
    };

    if (action.type === actions.session.SET_TIME_ELAPSED) {
        console.log(action.data)
        return {
            ...state,
            timeElapsed: 2
        }
    };

    return state;
}

export default reducer;