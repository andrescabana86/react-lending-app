import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app';

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={ App } />
    </BrowserRouter>
  );
};
