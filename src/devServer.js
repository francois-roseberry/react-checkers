import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { IntlProvider } from 'react-intl';
import translations from '../i18n/translations';
import { DEFAULT_LOCALE } from '../config/Env';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <IntlProvider locale="en" messages={ translations[DEFAULT_LOCALE] }>
      <App />
    </IntlProvider>
  </Provider>, document.querySelector('.app'));
