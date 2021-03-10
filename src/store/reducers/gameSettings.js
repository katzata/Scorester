import * as actions from "../actions";
import defaultValues from "../../apis/settings/defaultValues.json";

const initialState = {
    numberOfPlayers: defaultValues.game.numberOfPlayers,
    timerOn: defaultValues.game.timerOn
}

const reducer = (state = initialState, action) => {
    if (action.type === actions.gameSettings.SET_NUMBER_OF_PLAYERS) {
        return {
            ...state,
            numberOfPlayers: action.data
        }
    }
    
    return state;
}

export default reducer;