import React from "react";
import "./Header.scss";
import { connect } from "react-redux";

import InfoButton from "../../components/InfoButton/InfoButton";
import AppInfo from "../../components/AppInfo/AppInfo";

const Header = ({ infoVisible, toggleModal, toggleInfo }) => {
	return (
		<header>
			<div className="appInfoContainer">
				<InfoButton action={toggleInfo} blur={infoVisible ? toggleInfo : null}/>
				<AppInfo />
			</div>

			<button className="optionsButton" onClick={toggleModal}></button>
		</header>
	);
}

const mapStateToProps = state => {
	return {
		infoVisible: state.appSettings.infoVisible
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleModal: () => dispatch({ type: "TOGGLE_MODAL"}),
		toggleInfo: () => dispatch({ type: "TOGGLE_INFO" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);