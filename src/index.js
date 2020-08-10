import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/main.scss"
import "./styles/flange.scss";
import "./styles/ElementCreator.scss";
import "./styles/App.scss";
import "./styles/ElementList.scss";
import "./styles/Preview.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

