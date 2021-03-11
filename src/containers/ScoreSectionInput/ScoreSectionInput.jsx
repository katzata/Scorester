import React, { useRef } from "react";
import "./ScoreSectionInput.scss";
import { connect } from "react-redux";

const ScoreSectionInput = ({ language, addPlayerScore, columnIndex, toggle, state}) => {
    const columnInputRef = useRef(null)
    const lang = require(`../../apis/localization/${language}.json`).scoreSection;

    let styles = {
        backgroundColor: "transparent",
        transform: "scale(0, 0)",
        opacity: "0"
    }

    if (state) {
        styles = {
            backgroundColor: "rgba(0, 0, 0, .75)",
            transform: "scale(1, 1)",
            opacity: "1"
        }

        columnInputRef.current.focus();
    }
    return <div className="columnInputContainer" style={styles}>
        <div className="columnInputExternalShadow">
            <input className="columnInput" ref={columnInputRef} type="number" />
        </div>

        <div className="inputButtonsContainer">
            <button className="submitInput" onClick={() => {
                console.log(columnInputRef.current.value)
                addPlayerScore(columnIndex, columnInputRef.current.value);
                toggle("hide");
                columnInputRef.current.blur();
                columnInputRef.current.value = "";
            }}>
                {lang.submitInput}
            </button>

            <button className="cancelInput" onClick={() => {
                toggle("hide");
                columnInputRef.current.blur();
                columnInputRef.current.value = "";
            }}>
                {lang.cancelInput}
            </button>
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        language: state.appSettings.currentLanguage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayerScore: (index, score) => dispatch({
            type: "ADD_PLAYER_SCORE",
            index: index,
            score: `${score}` 
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSectionInput);