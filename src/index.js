// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Application dependencies
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import applicationStore from './registerApplicationStore';


ReactDOM.render(
  <Provider store={applicationStore()}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
