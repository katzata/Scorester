import React, {useState} from "react";
import "./MenuModal.scss";

import Login from "../Login/Login";
import ToggleButton from "../ToggleButton/ToggleButton";

const infoIcon = require("../../assets/icons/info.svg");
const closeIcon = require("../../assets/icons/close.svg");

const MenuModal = (props) => {
	const [close, setClose] = useState(false);

	let opacity;
	let zIndex;
	let animationName;
	
	if (props.state) {
		opacity = "1";
		zIndex = 2;
		animationName = "open";
	} else {
		opacity = "0";
		zIndex = -1;
		animationName = "close";
	}

	const capitalise = (title) => {
		return title.replace(title.charAt(0), title.charAt(0).toUpperCase());
	}

	const handleClose = () => {
		setClose(true)
		if (close) {
			animationName = "close";
		console.log("x")
		}
	}

	return (
		<div className="menu-modal-container"
			style={{opacity: opacity, zIndex: zIndex, animationName: `${close ? "close" : "open"}`}}
			onAnimationEnd={close ? props.toggleMenu : null}
		>
			<div className="menu-modal">
				<button className="close-button" onClick={() => {handleClose()}}>
					<img className="close-button-icon" src={closeIcon} alt=""/>
				</button>

				<div className="menu-top-container login-container">
					<Login text={props.text.login}/>
				</div>

				<div className="menu-option-container players-select-container">
					<p className="players-select-title">{props.text.gameSettings.titles[0]}</p>

					<select className="players-select" onChange={(e) => {props.setNumberOfPlayers(Number(e.target.value))}}>
						<option value="1">1 {capitalise(props.text.gameSettings.numberOfPlayers[0])}</option>
						<option value="2">2 {capitalise(props.text.gameSettings.numberOfPlayers[1])}</option>
						<option value="3">3 {capitalise(props.text.gameSettings.numberOfPlayers[1])}</option>
						<option value="4">4 {capitalise(props.text.gameSettings.numberOfPlayers[1])}</option>
					</select>
				</div>

				<div className="checkbox-container">
					{
						// props.text.gameSettings.checkboxTitles.map((title, idx) => {
						// 	return (
						// 		<div className="checkbox-internal" key={title}>
						// 			{title}
						// 			<ToggleButton title={title} />
						// 		</div>
						// 	);
						// })
					}
				</div>

				<div className="menu-option-container language-select-container">
					<p className="players-select-title">{props.text.appSettings.titles[0]}</p>

					<select className="language-select">
						{
							Object.entries(props.localization).map((lang, idx) => {
								return (
									<option value={idx} key={lang[0]}>{capitalise(lang[0])}</option>
								);
							})
						}
					</select>
				</div>

				<div className="menu-option-container info-container">
					<img className="info-icon" src={infoIcon} alt=""/>
				</div>
			</div>
		</div>
	);
}

export default MenuModal;