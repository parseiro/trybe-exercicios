import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import countReducer from '../reducers/countReducer.js';

export const store = createStore(countReducer, composeWithDevTools());
