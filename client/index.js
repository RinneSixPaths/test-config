import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRouter from './routes';
import Hello from './views/Hello';

const render = (Component) => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
);

render(Hello);
if (module.hot) {
    module.hot.accept('./views/Hello', () => {
        require('./views/Hello');
        render(Hello);
    });
}
