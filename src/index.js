import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
import One from './components/App/One/One.jsx';
import Two from './components/App/Two/Two.jsx';
import Three from './components/App/Three/Three.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={One} />
        <Route path="/add" component={Two} />
        <Route path="/Three" component={Three} />
    </Route>
  </Router>
), document.querySelector('#root-container'));
