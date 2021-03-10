import React from 'react';
import './App.css';

// import AppHeader from "./components/AppHeader/AppHeader";
// import MenuModal from "./components/MenuModal/MenuModal.js";
import AppBody from "./containers/AppBody/AppBody";
// import GameButton from "./components/GameButton/GameButton";
// import PauseGameButton from "./components/PauseGameButton/PauseGameButton";
// import ColumnModal from "./components/ColumnModal/ColumnModal";
// import GameReseultsModal from "./components/GameReseultsModal/GameReseultsModal";

// import localization from "./localization/localization.js";

function App() {
	// const [logedin, setLogedin] = useState(false);
	// const [username, setUsername] = useState("");
	// const [menuOpen, setMenuOpen] = useState(false);
	// const [language, setLanguage] = useState(localization.english);
	// const [font, setFont] = useState("playfair");
	// const [names, setNames] = useState([]);
	// const [numberOfPlayers, setNumberOfPlayers] = useState(0);
	// const [scores, setScores] = useState([]);
	// const [gameRunning, setGameRunning] = useState(false);
	// // const [gamePaused, setGamePaused] = useState(false);///////////////////////////////////
	// // const [gameHours, setGameHours] = useState(0);
	// // const [gameMinutes, setGameMinutes] = useState(0);
	// // const [gameSeconds, setGameSeconds] = useState(0);
	// // const [gameTimeTotal, setGameTimeTotal] = useState(0);
	// const [currentColumn, setCurrentColumn] = useState(0);
	// const [modalOpen, setModalOpen] = useState(false);
	// const [modalCoords, setModalCoords] = useState(1);
	// const [currentState, setCurrentState] = useState("start");

	
	return (
		<AppBody/>
	);
}

export default App;

// <PauseGameButton text={language.pauseGameButton} state={gameRunning} font={font}/>