import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


import reducer from '../reducers';
import rootSaga from '../sagas';


const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {

    console.log(action);

    // if (typeof action === 'function') {
    //     return action(dispatch, getState);
    // }  

    return next(action);
};

const configureStore = () => {
    const sagaMiddlewares = createSagaMiddleware();
    const middlewares = [sagaMiddlewares, loggerMiddleware];
    // const middlewares = [thunkMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddlewares.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;