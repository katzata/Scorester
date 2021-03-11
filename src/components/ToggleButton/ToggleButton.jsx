import React from "react";
import "./ToggleButton.scss";
import { connect } from "react-redux";

const ToggleButton = ({ target, action, size, gameSettings, dispatchAction }) => {
	let style = {
		bg: {
			backgroundColor: "#A0A0A0",
			width: size ? `${size}px` : "28px",
			height: size ? `${size}px` : "28px"
		},
		indicator: {
			transform: "translateX(0)",
			width: size ? `${size}px` : "28px",
			height: size ? `${size}px` : "28px"
		}
	}

	if (gameSettings[target]) {
		style = {
			bg: {
				backgroundColor: "#00A000",
				width: size ? `${size}px` : "28px",
				height: size ? `${size}px` : "28px"
			},
			indicator: {
				transform: `translateX(${size ? size : 28}px)`,
				width: size ? `${size}px` : "28px",
				height: size ? `${size}px` : "28px"
			}
		}
	}

	return (
		<div className="toggleButtonContainer" onClick={() => dispatchAction(action)}>
			<div className={"toggleButtonBg toggleButtonLeft"} style={ style.bg }></div>
			<div className={"toggleButtonBg toggleButtonCenter"} style={ style.bg }></div>
			<div className={"toggleButtonBg toggleButtonRight"} style={ style.bg }></div>
			
			<button className="toggleButtonIndicator" style={ style.indicator }></button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		gameSettings: state.gameSettings
	};
};

const mapDispatchToProps = dispatch => {
	return {
		dispatchAction: action => dispatch({ type: `${action}`})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);