import * as actions from "../actions";
import defaultValues from "../../apis/settings/defaultValues.json";

const initialState = {
    currentLanguage: defaultValues.app.languages,
    infoVisible: defaultValues.app.infoVisible,
    optionsModalVisible: defaultValues.app.optionsModalVisible,
    columnInputsVisible: defaultValues.app.columnInputsVisible
}

const reducer = (state = initialState, action) => {
    if (action.type === actions.appSettings.TOGGLE_INFO) return {
        ...state,
        infoVisible: !state.infoVisible
    };
    
    if (action.type === actions.appSettings.TOGGLE_MODAL) return {
        ...state,
        optionsModalVisible: !state.optionsModalVisible
    };

    return state;
}

export default reducer;