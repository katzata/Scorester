import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import gameSettingsReducer from "./store/reducers/gameSettings";
import appSettingsReducer from "./store/reducers/appSettings";
import sessionDataReducer from "./store/reducers/sessionData";

const reducer = combineReducers({
  appSettings: appSettingsReducer,
  gameSettings: gameSettingsReducer,
  sessionData: sessionDataReducer
})

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
