import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';


const history = createBrowserHistory();

// adding google analytics code
const TRACKING_ID = "UA-172399841-1";
ReactGA.initialize(TRACKING_ID);
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
const App = () => (
  <Router history={history}>
    <Apps />
  </Router>
);
ReactDOM.render(


  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
