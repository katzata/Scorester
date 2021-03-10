import React, { useState } from "react";
import "./ToggleButton.scss";
import { connect } from "react-redux";

const ToggleButton = ({ target }) => {
	const [isOn, setIsOn] = useState(false);
	const [indicatorOffset, setIndicatorOffset] = useState(0);
	const [bg, setBg] = useState(false);

	// console.log(target)

	let style = {
		bg: "",
		offset: ""
	}

	const toggle = () => {
		if (isOn) {
			setIsOn(false);
		} else {
			setIsOn(true);
		}
	}

	if (isOn) {
		style.offset = "translateX(22px)";
		style.bg = "#00A000";
	} else {
		style.offset = "translateX(0)";
		style.bg = "#A0A0A0";
	}

	return (
		<div className="toggle-button-container" data-option={""}>
			<div className={"toggle-button-bg toggle-button-left"} style={{backgroundColor: style.bg}/*style.bg*/}></div>
			<div className={"toggle-button-bg toggle-button-center"} style={{backgroundColor: style.bg}/*style.bg*/}></div>
			<div className={"toggle-button-bg toggle-button-right"} style={{backgroundColor: style.bg}/*style.bg*/}></div>
			
			<div className="toggle-button-indicator" style={{transform: style.offset}} onClick={toggle}></div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		currentLanguage: state.appSettings.currentLanguage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setNumberOfplayers: () => dispatch({ type: "SET_NUMBER_OF_PLAYERS" }),
		toggleInfo: () => dispatch({ type: "TOGGLE_INFO" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);