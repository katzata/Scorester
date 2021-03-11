import React from "react";
import "./CloseButton.scss";
import { connect } from "react-redux";

const CloseButton = ({ target, action, size, dispatchAction }) => {
    let styles = {
        width: "30px",
        height: "30px"
    }

    if (size) {
        styles = {
            width: `${size}px`,
            height: `${size}px`
        }
        console.log(styles)
    }

    return <div className="closeButtonContainer" style={styles}>
        <div className="closeButtonColumn1"></div>
        <div className="closeButtonColumn2"></div>

        <button className="closeButton" onClick={() => dispatchAction(action)}></button>
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAction: (action, target) => dispatch({ type: `${action}`, data: `${target}` })
    };
};

export default connect(null, mapDispatchToProps)(CloseButton);