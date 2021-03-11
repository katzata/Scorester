import React, { useState, useEffect, useRef } from "react";
import "./ScoresTotal.scss";

const ScoresTotal = ({ scores, columnIndex }) => {
    const [fontSize, setFontSize] = useState(18);
    const totalContainerRef = useRef(null);
    const totalRef = useRef(null);
    
    const handleTotalsFontSize = () => {
        if (totalRef.current.offsetWidth > totalContainerRef.current) {
            setFontSize(fontSize - 1);
        }
    }

    useEffect(() => {
        if (totalRef.current.offsetWidth > totalContainerRef.current.offsetWidth - 20) {
            setFontSize(fontSize - 1);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleTotalsFontSize);
        return () => window.removeEventListener('resize', handleTotalsFontSize)
    }, []);

    return <div className="scoresTotalContainer" ref={totalContainerRef}>
        <span className="scoresTotal" ref={totalRef} style={{fontSize: `${fontSize}px`}}>
            {parseInt(scores[columnIndex].reduce((a, b) => Number(a) + Number(b), 0))}
        </span>
    </div>
}

export default ScoresTotal;