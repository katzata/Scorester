import React, { useState, useRef, useEffect } from "react";
import "./ScoresSection.scss";
import { connect } from "react-redux";

import ScoreField from "../../components/ScoreField/ScoreField";
import ScoreSectionInput from "../ScoreSectionInput/ScoreSectionInput";
import AddScoreButton from "../../components/AddScoreButton/AddScoreButton";

const ScoresSection = ({ scores, columnIndex }) => {
    const [columnInputVisible, setColumnInputVisible] = useState(false);

    const sectionRef = useRef(null)
    
    const sectionInputVisibility = (trigger) => {
        if (trigger === "show") {
            setColumnInputVisible(true);
        } else {
            setColumnInputVisible(false);
        }
    }

    useEffect(() => {
        sectionRef.current.scrollTo({
            top: sectionRef.current.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    })


    return <div className="scoresSection" >
        <ScoreSectionInput columnIndex={columnIndex} toggle={sectionInputVisibility} state={columnInputVisible} />
        
        <div className="scoresContainer" ref={sectionRef}>
            {
                scores[columnIndex].map((score, idx) => {
                    return <ScoreField
                        fieldIndex={columnIndex + idx}
                        score={score.toString()}
                        key={idx}
                    />
                })
            }
        </div>

        <AddScoreButton action={sectionInputVisibility}/>
    </div>
}

const mapStateToProps = state => {
    return {
        language: state.appSettings.currentLanguage,
        scores: state.sessionData.scores
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editPlayerScore: (index, score) => dispatch({
            type: "EDIT_PLAYER_SCORE",
            index: index,
            score: `${score}`
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoresSection);