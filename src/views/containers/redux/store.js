import { legacy_createStore as createStore, combineReducers } from 'redux';
import Reducers from './reducers.js';

const rootReducer = combineReducers({
    taskReducer: Reducers
})

const store = createStore(rootReducer);

export default store;