import React from "react";
import { connect } from "react-redux";
import "./AppInfo.scss";

const AppInfo = ({ visible, toggle }) => {
    const text = require(`../../apis/localization/${"bg"}.json`).header.appInfo;

    let styles = {
        opacity: "1",
        transform: "translate(45%, -50%) scale(0, 0)"
    }

    if (visible) {
        styles = {
            opacity: "1",
            transform: "translate(0, 0) scale(1, 1)"
        }
    }

    return <div className="appInfo" style={styles}>
        <div className="appVersion">{"version: " + text.version}</div>

        {
            text.techStack.map((techInfo) => {
                return <span className="techInfo" key={techInfo}>{techInfo}</span>
            })
        }
    </div>
}

const mapStateToProps = state => {
    return {
        visible: state.appSettings.infoVisible
    };
};

export default connect(mapStateToProps)(AppInfo);