import React from "react";
import "./CloseButton.scss";
import { connect } from "react-redux";

const CloseButton = ({toggleModal}) => {
    return <div className="closeButtonContainer">
        <div className="closeButtonColumn1"></div>
        <div className="closeButtonColumn2"></div>

        <button className="closeButton" onClick={toggleModal}></button>
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({ type: "TOGGLE_MODAL" })
    };
};

export default connect(null, mapDispatchToProps)(CloseButton);