import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { notifications } from './uikit/notifications/redux' ;


const store = createStore(
	combineReducers({
		notifications
	}),
);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
