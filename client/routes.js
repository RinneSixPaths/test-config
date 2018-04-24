import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Hello from './views/Hello';

export default () => (
  <Router>
    <Route path='/' component={Hello} />
  </Router>
);