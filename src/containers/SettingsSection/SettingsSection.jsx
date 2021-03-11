import React from "react";
import "./SettingsSection.scss";
import { connect } from "react-redux";

import ToggleButton from "../../components/ToggleButton/ToggleButton";
import SettingsSelect from "../../components/SettingsSelect/SettingsSelect";

const SettingsSection = ({ currentLanguage }) => {
    const language = require(`../../apis/localization/${currentLanguage}.json`).gameSettings;
    const settings = require(`../../apis/settings/settings.json`);

    const dispatchActions = {
        app: {
            currentLanguage: "",
            infoVisible: "TOGGLE_INFO",
            optionsModalVisible: "TOGGLE_MODAL",
            columnInputsVisible: ""
        },
        game: {
            numberOfPlayers: "SET_NUMBER_OF_PLAYERS",
            timerOn: "TOGGLE_TIMER",
            unlockScoreFields: "UNLOCK_SCORE_FIELDS"
        }
    }

    const handleSettingType = (setting, idx) => {
        const titles = Object.keys(settings.game);
        const appp = Object.keys(settings.app);

        if (setting.type === "select") {
            return <SettingsSelect
                action={titles[idx]}
                options={setting.value}
            />;
        };

        if (setting.type === "toggle") {
            return <ToggleButton
                target={titles[idx]}
                action={dispatchActions.game[titles[idx]]}
            />;
        };
    }

    return <div className="settingsContainer">
        {
            Object.values(settings.game).map((setting, idx) => {
                return <div className="setting" key={Object.keys(settings.game)[idx]}>
                    <span className="settingTitle">
                        {language[Object.keys(settings.game)[idx]]}
                    </span>

                    { handleSettingType(setting, idx) }
                </div>
            })
        }
    </div>
}

const mapStateToProps = state => {
    return {
        currentLanguage: state.appSettings.currentLanguage
    };
};

export default connect(mapStateToProps)(SettingsSection);