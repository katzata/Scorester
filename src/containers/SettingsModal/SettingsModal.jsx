import React from "react";
import "./SettingsModal.scss";
import { connect } from "react-redux";

import CloseButton from "../../components/CloseButton/CloseButton";
import UserInfo from "../UserInfo/UserInfo";
import OptionsSection from "../SettingsSection/SettingsSection";

const SettingsModal = ({visible}) => {
    let styles = {
        opacity: "0",
        animationName: "fadeOut",
        transform: "scale(0, 0)"
    }

    if (visible) {
        styles = {
            opacity: "1",
            animationName: "fadeIn",
            transform: "scale(1, 1)"
        }
    }

    return <div className="settingsModal" style={styles}>
        <div className="settingsModalInternal">
            <CloseButton />
            <UserInfo />

            <OptionsSection />
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        visible: state.appSettings.optionsModalVisible
    };
};

export default connect(mapStateToProps)(SettingsModal);