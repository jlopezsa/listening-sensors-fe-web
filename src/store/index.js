import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

// eslint-disable-next-line no-undef
const store = createStore(reducer, composeWithDevTools());

export default store;
