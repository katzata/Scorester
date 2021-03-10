import React from "react";
import "./SettingsSection.scss";
import { connect } from "react-redux";

import ToggleButton from "../../components/ToggleButton/ToggleButton";
import OptionSelect from "../../components/SettingsSelect/SettingsSelect";

const SettingsSection = ({ settingValues, currentLanguage }) => {
    const language = require(`../../apis/localization/${currentLanguage}.json`).gameSettings;
    const settings = require(`../../apis/settings/settings.json`);

    return <div className="optionsContainer">
        {
            Object.values(settings.game).map((setting, idx) => {
                return <div className="option" key={Object.keys(settings)[idx]}>
                    <span className="optionTitle">{language[Object.keys(settings.game)[idx]]}</span>

                    {
                        setting.type === "select" ?
                        <OptionSelect targetAction={Object.keys(settings.game)[idx]} options={setting.value} /> :
                        <ToggleButton target={Object.keys(settings.game)[idx]} />
                    }
                </div>
            })
        }
    </div>
}

const mapStateToProps = state => {
    return {
        currentLanguage: state.appSettings.currentLanguage,
        settingValues: state.gameSettings
    };
};

export default connect(mapStateToProps)(SettingsSection);