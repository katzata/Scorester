import React, { useState } from "react";
import "./ScoreField.scss";
import { connect } from "react-redux";

import CheckButton from "../CheckButton/CheckButton";
import CloseButton from "../CloseButton/CloseButton";

const ScoreField = ({ fieldIndex, score, unlocked}) => {
    const [currentlyEditing] = useState(false);
    const [value, setValue] = useState(score);

    const handleValue = (value) => {
        setValue(value);
    };

    const handleBlur = (value) => {
        if (!value.length < 0) setValue(0);
    };

    return <div className="scoreFieldContainer">
        <div className="scoreFieldInternal">
            <input
                className="scoreField"
                type="number"
                readOnly={!unlocked}
                value={value || ""}
                onChange={!unlocked ? null : (e) => handleValue(setValue(e.target.value))}
                onFocus={!unlocked ? null : (e) => { e.target.select() }}
                onBlur={!unlocked ? null : (e) => { handleBlur(e.target.value) }}
            />

            <div className="scoreFieldEditButtonsContainer">
                {/* <CheckButton
                    target={fieldIndex}
                    action={"TOGGLE_MODAL"}
                    size={10}
                /> */}
                <CloseButton
                    target={fieldIndex}
                    action={"CLOSE_SCORE_FIELD"}
                    size={11}
                />
            </div>
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        unlocked: state.gameSettings.unlockScoreFields
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editPlayerScore: (fieldIndex, name) => dispatch({
            type: "EDIT_PLAYER_SCORE",
            index: fieldIndex,
            name: `${name}`
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreField);