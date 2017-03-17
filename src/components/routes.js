import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import About from './about/about';
import Todos from './todos/todos';

const AppRoutes = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/todos' component={Todos} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
      </Router>
    </div>
  );
};

export default AppRoutes;