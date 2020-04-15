import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function makeStore (initialState) {
    const store = createStore(reducer, initialState, composeEnhancers(
        ));

    return store
};

let store = null;
export function getStore (initialState = {}) {
    if (store === null) {
        store = createStore(reducer, initialState, composeEnhancers(
        ));
    }
    return store;
};