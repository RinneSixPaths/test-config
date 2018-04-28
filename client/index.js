import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRouter from './routes';
import Hello from './views/Hello';

//ReactDOM.render(<Hello />, document.getElementById("app"));

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

render(Hello);
if (module.hot) {
    module.hot.accept('./routes', () => {
        require('./routes');
        render(AppRouter);
    });
}
