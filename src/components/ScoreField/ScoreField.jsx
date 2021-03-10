import React, { useState, useEffect } from "react";
import "./ScoreField.scss";

const ScoreField = ({score, isLocked}) => {
    const [value, setValue] = useState(score);

    const handleValue = (value) => {
        setValue(value)
    }

    const handleBlur = (value) => {
        if (!value.length < 0) setValue(0)
    }

    return <div className="scoreFieldContainer">
        <div className="scoreFieldEffect"></div>
        
        <input
            className="scoreField"
            type="number"
            value={value || ""}
            onChange={isLocked ? null : (e) => handleValue(setValue(e.target.value) )}
            onFocus={isLocked ? null : (e) =>  {
                e.target.select();

            }}
            onBlur={isLocked ? null : (e) => { handleBlur(e.target.value) }}
        />
    </div>
}

export default ScoreField;