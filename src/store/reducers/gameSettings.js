import * as actions from "../actions";
import defaultValues from "../../apis/settings/defaultValues.json";

const initialState = {
    numberOfPlayers: defaultValues.game.numberOfPlayers,
    timerOn: defaultValues.game.timerOn,
    unlockScoreFields: defaultValues.game.unlockScoreFields
}

const reducer = (state = initialState, action) => {
    if (action.type === actions.gameSettings.SET_NUMBER_OF_PLAYERS) return {
        ...state,
        numberOfPlayers: action.data
    }

    if (action.type === actions.gameSettings.TOGGLE_TIMER) return {
        ...state,
        timerOn: !state.timerOn
    }

    if (action.type === actions.gameSettings.UNLOCK_SCORE_FIELDS) return {
        ...state,
        unlockScoreFields: !state.unlockScoreFields
    }
    
    return state;
}

export default reducer;