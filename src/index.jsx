import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

document.body.style.boxSizing = 'borderBox';
document.body.style.backgroundColor = 'fuchsia';

const render = (Component) => {
  ReactDOM.render(
    <App/>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
