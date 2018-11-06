import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';

document.body.style.margin = 0;
const render = (Component) => {
  ReactDOM.render(
    <App/>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
