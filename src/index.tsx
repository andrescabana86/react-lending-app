import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import Router from './app/routes';

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('app-root'),
);
